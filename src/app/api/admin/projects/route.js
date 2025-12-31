import connectDB from "@/lib/db";
import Project from "@/models/Project";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    // Create project
    const project = await Project.create({
      name: body.name,
      description: body.description,
      client: body.clientId,            // client ObjectId
      employees: body.employeeIds,      // array of employee ObjectIds
      status: "On Track",
      healthScore: 100,
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
