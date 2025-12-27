import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  startDate: Date,
  endDate: Date,
  status: { type: String, enum: ["On Track", "At Risk", "Critical", "Completed"], default: "On Track" },
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  client: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  healthScore: { type: Number, default: 100 },
}, { timestamps: true });

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);
