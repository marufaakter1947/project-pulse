// api/admin/projects/route.js
import connectDB from "@/lib/db";
import Project from "@/models/Project";
import CheckIn from "@/models/CheckIn";
import Feedback from "@/models/Feedback";
import Risk from "@/models/Risk";
import { calculateHealthScore, healthStatus } from "@/lib/healthScore";

connectDB();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const projects = await Project.find().populate("employees client");

    const projectsWithHealth = await Promise.all(
      projects.map(async (project) => {
        // Get recent feedbacks and check-ins
        const clientFeedbacks = await Feedback.find({ project: project._id }).sort({ createdAt: -1 }).limit(5);
        const employeeCheckIns = await CheckIn.find({ project: project._id }).sort({ createdAt: -1 }).limit(5);
        const risks = await Risk.find({ project: project._id, status: "Open" });

        const score = calculateHealthScore({
          clientRatings: clientFeedbacks.map(f => f.satisfaction || 5),
          employeeConfidence: employeeCheckIns.map(c => c.confidence || 5),
          progress: employeeCheckIns.length ? employeeCheckIns[employeeCheckIns.length - 1].completion : 0,
          openRisks: risks.length,
        });

        return {
          ...project.toObject(),
          healthScore: score,
          healthStatus: healthStatus(score),
        };
      })
    );

    return res.status(200).json(projectsWithHealth);
  }

  if (req.method === "POST") {
    const project = await Project.create(req.body);
    return res.status(201).json(project);
  }
}
