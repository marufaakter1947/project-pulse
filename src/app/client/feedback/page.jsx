import connectDB from "@/lib/db";
import Feedback from "@/models/Feedback";
import jwt from "jsonwebtoken";

export async function GET(req) {
  try {
    await connectDB();

    // token check
    const authHeader = req.headers.get("authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ message: "Unauthorized" }),
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET);

    const feedbacks = await Feedback.find();

    return new Response(JSON.stringify(feedbacks), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("FEEDBACK ERROR:", error);
    return new Response(
      JSON.stringify({ message: "Server error" }),
      { status: 500 }
    );
  }
}
