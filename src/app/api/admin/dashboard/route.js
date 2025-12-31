import connectDB from "@/lib/db";
import Project from "@/models/Project";
import Checkin from "@/models/CheckIn";
import Risk from "@/models/Risk";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();

  const healthy = await Project.countDocuments({ health: "healthy" });
  const atRisk = await Project.countDocuments({ health: "at-risk" });

  const missingCheckins = await Checkin.countDocuments({
    submittedAt: { $lt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) },
  });

  const highRisk = await Risk.countDocuments({ level: "high" });

  return NextResponse.json({
    projectsByHealth: { healthy, atRisk },
    missingCheckins,
    highRisk,
  });
}
