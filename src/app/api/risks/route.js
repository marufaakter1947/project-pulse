// import connectDB from "@/lib/db";
// import Risk from "@/models/Risk";
// import Project from "@/models/Project";
// import CheckIn from "@/models/CheckIn";
// import Feedback from "@/models/Feedback";
// import { calculateHealthScore, healthStatus } from "@/lib/healthScore";

// connectDB();

// export default async function handler(req, res) {
//   // Create a new risk (Employee)
//   if (req.method === "POST") {
//     const { projectId, employeeId, title, severity, mitigation } = req.body;

//     const risk = await Risk.create({
//       project: projectId,
//       employee: employeeId,
//       title,
//       severity,
//       mitigation,
//       status: "Open",
//     });

//     // Recalculate project health
//     const recentFeedbacks = await Feedback.find({ project: projectId }).sort({ createdAt: -1 }).limit(5);
//     const recentCheckIns = await CheckIn.find({ project: projectId }).sort({ createdAt: -1 }).limit(5);
//     const openRisks = await Risk.countDocuments({ project: projectId, status: "Open" });

//     const project = await Project.findById(projectId);
//     const updatedScore = calculateHealthScore({
//       clientRatings: recentFeedbacks.map(f => f.satisfaction),
//       employeeConfidence: recentCheckIns.map(c => c.confidence),
//       progress: recentCheckIns.length ? recentCheckIns[recentCheckIns.length - 1].completion : 0,
//       openRisks: openRisks,
//     });

//     project.healthScore = updatedScore;
//     project.status = healthStatus(updatedScore);
//     await project.save();

//     return res.status(201).json(risk);
//   }

//   // Get all risks (Admin)
//   if (req.method === "GET") {
//     const risks = await Risk.find().populate("employee project");
//     return res.status(200).json(risks);
//   }

//   // Update risk status (Resolve)
//   if (req.method === "PATCH") {
//     const { riskId, status } = req.body;
//     const risk = await Risk.findByIdAndUpdate(riskId, { status }, { new: true });

//     // Recalculate health score for the project
//     const projectId = risk.project;
//     const recentFeedbacks = await Feedback.find({ project: projectId }).sort({ createdAt: -1 }).limit(5);
//     const recentCheckIns = await CheckIn.find({ project: projectId }).sort({ createdAt: -1 }).limit(5);
//     const openRisks = await Risk.countDocuments({ project: projectId, status: "Open" });

//     const project = await Project.findById(projectId);
//     const updatedScore = calculateHealthScore({
//       clientRatings: recentFeedbacks.map(f => f.satisfaction),
//       employeeConfidence: recentCheckIns.map(c => c.confidence),
//       progress: recentCheckIns.length ? recentCheckIns[recentCheckIns.length - 1].completion : 0,
//       openRisks: openRisks,
//     });

//     project.healthScore = updatedScore;
//     project.status = healthStatus(updatedScore);
//     await project.save();

//     return res.status(200).json(risk);
//   }
// }
import connectDB from "@/lib/db";
import Risk from "@/models/Risk";
import Project from "@/models/Project";
import CheckIn from "@/models/CheckIn";
import Feedback from "@/models/Feedback";
import { calculateHealthScore, healthStatus } from "@/lib/healthScore";

await connectDB();

// Create a new risk
export async function POST(req) {
  const body = await req.json();
  const { projectId, employeeId, title, severity, mitigation } = body;

  const risk = await Risk.create({
    project: projectId,
    employee: employeeId,
    title,
    severity,
    mitigation,
    status: "Open",
  });

  // Recalculate project health
  const recentFeedbacks = await Feedback.find({ project: projectId }).sort({ createdAt: -1 }).limit(5);
  const recentCheckIns = await CheckIn.find({ project: projectId }).sort({ createdAt: -1 }).limit(5);
  const openRisks = await Risk.countDocuments({ project: projectId, status: "Open" });

  const project = await Project.findById(projectId);
  const updatedScore = calculateHealthScore({
    clientRatings: recentFeedbacks.map(f => f.satisfaction),
    employeeConfidence: recentCheckIns.map(c => c.confidence),
    progress: recentCheckIns.length ? recentCheckIns[recentCheckIns.length - 1].completion : 0,
    openRisks,
  });

  project.healthScore = updatedScore;
  project.status = healthStatus(updatedScore);
  await project.save();

  return new Response(JSON.stringify(risk), { status: 201 });
}

// Get all risks
export async function GET() {
  const risks = await Risk.find().populate("employee project");
  return new Response(JSON.stringify(risks), { status: 200 });
}

// Update risk status
export async function PATCH(req) {
  const body = await req.json();
  const { riskId, status } = body;

  const risk = await Risk.findByIdAndUpdate(riskId, { status }, { new: true });

  // Recalculate project health
  const projectId = risk.project;
  const recentFeedbacks = await Feedback.find({ project: projectId }).sort({ createdAt: -1 }).limit(5);
  const recentCheckIns = await CheckIn.find({ project: projectId }).sort({ createdAt: -1 }).limit(5);
  const openRisks = await Risk.countDocuments({ project: projectId, status: "Open" });

  const project = await Project.findById(projectId);
  const updatedScore = calculateHealthScore({
    clientRatings: recentFeedbacks.map(f => f.satisfaction),
    employeeConfidence: recentCheckIns.map(c => c.confidence),
    progress: recentCheckIns.length ? recentCheckIns[recentCheckIns.length - 1].completion : 0,
    openRisks,
  });

  project.healthScore = updatedScore;
  project.status = healthStatus(updatedScore);
  await project.save();

  return new Response(JSON.stringify(risk), { status: 200 });
}
