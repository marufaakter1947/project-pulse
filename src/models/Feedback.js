import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
  client: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  satisfaction: { type: Number, min: 1, max: 5 },
  communication: { type: Number, min: 1, max: 5 },
  comments: String,
  flagged: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.models.Feedback || mongoose.model("Feedback", FeedbackSchema);
