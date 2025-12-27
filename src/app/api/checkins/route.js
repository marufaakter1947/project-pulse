import connectDB from "@/lib/db";
import CheckIn from "@/models/CheckIn";
import Project from "@/models/Project";
import { calculateHealthScore, healthStatus } from "@/lib/healthScore";

connectDB();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { projectId, employeeId, summary, blockers, confidence, completion } = req.body;

    const checkIn = await CheckIn.create({
      project: projectId,
      employee: employeeId,
      summary,
      blockers,
      confidence,
      completion,
    });

    // Recalculate project health
    const checkIns = await CheckIn.find({ project: projectId }).sort({ createdAt: -1 }).limit(5);
    const project = await Project.findById(projectId);
    const updatedScore = calculateHealthScore({
      employeeConfidence: checkIns.map(c => c.confidence),
      progress: completion,
    });

    project.healthScore = updatedScore;
    project.status = healthStatus(updatedScore);
    await project.save();

    return res.status(201).json(checkIn);
  }

  if (req.method === "GET") {
    const { projectId } = req.query;
    const checkIns = await CheckIn.find({ project: projectId }).populate("employee");
    return res.status(200).json(checkIns);
  }
}
