import mongoose from "mongoose";

const CheckInSchema = new mongoose.Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
  employee: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  summary: String,
  blockers: String,
  confidence: { type: Number, min: 1, max: 5 },
  completion: { type: Number, min: 0, max: 100 },
}, { timestamps: true });

export default mongoose.models.CheckIn || mongoose.model("CheckIn", CheckInSchema);
