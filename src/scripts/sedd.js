// import mongoose from "mongoose";
// import bcrypt from "bcryptjs";
// import User from "../models/User.js";

// await mongoose.connect(process.env.MONGODB_URI);

// const users = [
//   {
//     name: "Admin",
//     email: "admin@test.com",
//     password: await bcrypt.hash("admin123", 10),
//     role: "admin",
//   },
//   {
//     name: "Employee",
//     email: "emp@test.com",
//     password: await bcrypt.hash("emp123", 10),
//     role: "employee",
//   },
//   {
//     name: "Client",
//     email: "client@test.com",
//     password: await bcrypt.hash("client123", 10),
//     role: "client",
//   },
// ];

// await User.insertMany(users);
// console.log("Seeded users");
// process.exit();
// scripts/seed.js
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

import connectDB from "../lib/db";
import User from "../models/User";
import Project from "../models/Project";

dotenv.config();

const seed = async () => {
  try {
    await connectDB();

    // Clear existing data
    await User.deleteMany();
    await Project.deleteMany();

    // Create Users
    const password = await bcrypt.hash("password123", 10);

    const admin = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password,
      role: "Admin",
    });

    const employee1 = await User.create({
      name: "Employee One",
      email: "employee1@example.com",
      password,
      role: "Employee",
    });

    const employee2 = await User.create({
      name: "Employee Two",
      email: "employee2@example.com",
      password,
      role: "Employee",
    });

    const client1 = await User.create({
      name: "Client One",
      email: "client1@example.com",
      password,
      role: "Client",
    });

    const client2 = await User.create({
      name: "Client Two",
      email: "client2@example.com",
      password,
      role: "Client",
    });

    // Create Sample Projects
    await Project.create([
      {
        name: "Project Alpha",
        description: "First sample project",
        startDate: new Date("2025-12-01"),
        endDate: new Date("2026-01-15"),
        employees: [employee1._id, employee2._id],
        client: client1._id,
        healthScore: 100,
        status: "On Track",
      },
      {
        name: "Project Beta",
        description: "Second sample project",
        startDate: new Date("2025-12-05"),
        endDate: new Date("2026-01-20"),
        employees: [employee2._id],
        client: client2._id,
        healthScore: 100,
        status: "On Track",
      },
    ]);

    console.log("Seed data created successfully!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
