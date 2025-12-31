// // // api/projects/route.js
// // import connectDB from "@/lib/db";
// // import Project from "@/models/Project";

// // connectDB();

// // export default async function handler(req, res) {
// //   if (req.method === "GET") {
// //     const projects = await Project.find().populate("employees client");
// //     return res.status(200).json(projects);
// //   }
// //   if (req.method === "POST") {
// //     const project = await Project.create(req.body);
// //     return res.status(201).json(project);
// //   }
// // }
// import connectDB from "@/lib/db";
// import Project from "@/models/Project";

// await connectDB();

// export async function GET() {
//   const projects = await Project.find().populate("employees client");
//   return new Response(JSON.stringify(projects), { status: 200 });
// }

// export async function POST(req) {
//   const body = await req.json();
//   const project = await Project.create(body);
//   return new Response(JSON.stringify(project), { status: 201 });
// }
import connectDB from "@/lib/db";
import Project from "@/models/Project";

await connectDB();

// Admin: Get all projects
export async function GET() {
  const projects = await Project.find().populate("client employees");
  return Response.json(projects);
}

// Admin: Create project
export async function POST(req) {
  const body = await req.json();

  const project = await Project.create({
    name: body.name,
    description: body.description,
    client: body.clientId,
    employees: body.employeeIds,
    startDate: body.startDate,
    endDate: body.endDate,
  });

  return Response.json(project, { status: 201 });
}
