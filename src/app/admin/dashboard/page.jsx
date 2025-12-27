// app/dashboard/admin/page.jsx
"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const token = localStorage.getItem("token");
      const res = await fetch("/api/admin/projects", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <ProtectedRoute role="admin">
      <Navbar />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project._id} className="p-4 border rounded shadow">
              <h3 className="font-bold text-lg">{project.name}</h3>
              <p>Status: {project.healthStatus}</p>
              <p>Health Score: {project.healthScore}</p>
              <p>Employees: {project.employees.length}</p>
            </div>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}
