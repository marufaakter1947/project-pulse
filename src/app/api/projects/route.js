// api/projects/route.js
import connectDB from "@/lib/db";
import Project from "@/models/Project";

connectDB();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const projects = await Project.find().populate("employees client");
    return res.status(200).json(projects);
  }
  if (req.method === "POST") {
    const project = await Project.create(req.body);
    return res.status(201).json(project);
  }
}
