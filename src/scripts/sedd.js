import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

await mongoose.connect(process.env.MONGODB_URI);

const users = [
  {
    name: "Admin",
    email: "admin@test.com",
    password: await bcrypt.hash("admin123", 10),
    role: "admin",
  },
  {
    name: "Employee",
    email: "emp@test.com",
    password: await bcrypt.hash("emp123", 10),
    role: "employee",
  },
  {
    name: "Client",
    email: "client@test.com",
    password: await bcrypt.hash("client123", 10),
    role: "client",
  },
];

await User.insertMany(users);
console.log("Seeded users");
process.exit();
