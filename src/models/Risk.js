import mongoose from "mongoose";

const RiskSchema = new mongoose.Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
  employee: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: String,
  severity: { type: String, enum: ["Low", "Medium", "High"], default: "Low" },
  mitigation: String,
  status: { type: String, enum: ["Open", "Resolved"], default: "Open" },
}, { timestamps: true });

export default mongoose.models.Risk || mongoose.model("Risk", RiskSchema);
