import connectDB from "@/lib/db";
import Feedback from "@/models/Feedback";
import Project from "@/models/Project";
import CheckIn from "@/models/CheckIn";
import { calculateHealthScore, healthStatus } from "@/lib/healthScore";

connectDB();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { projectId, clientId, satisfaction, communication, comments, flagged } = req.body;

    const feedback = await Feedback.create({
      project: projectId,
      client: clientId,
      satisfaction,
      communication,
      comments,
      flagged,
    });

    // Recalculate project health
    const recentFeedbacks = await Feedback.find({ project: projectId }).sort({ createdAt: -1 }).limit(5);
    const recentCheckIns = await CheckIn.find({ project: projectId }).sort({ createdAt: -1 }).limit(5);

    const project = await Project.findById(projectId);
    const updatedScore = calculateHealthScore({
      clientRatings: recentFeedbacks.map(f => f.satisfaction),
      employeeConfidence: recentCheckIns.map(c => c.confidence),
      progress: recentCheckIns.length ? recentCheckIns[recentCheckIns.length - 1].completion : 0,
      openRisks: 0, // আপাতত risks 0 ধরছি, পরে Risk API থেকে নিতে হবে
    });

    project.healthScore = updatedScore;
    project.status = healthStatus(updatedScore);
    await project.save();

    return res.status(201).json(feedback);
  }

  if (req.method === "GET") {
    const { projectId } = req.query;
    const feedbacks = await Feedback.find({ project: projectId }).populate("client");
    return res.status(200).json(feedbacks);
  }
}
