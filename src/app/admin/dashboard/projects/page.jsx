"use client";

import { useEffect, useState } from "react";

export default function ProjectsPage() {
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
    <div>
      <h2 className="text-2xl font-bold mb-4">Projects by Health Status</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p._id} className="bg-white p-5 rounded shadow">
            <h3 className="font-semibold">{p.name}</h3>
            <p>Health Status: <span className="font-medium">{p.healthStatus}</span></p>
            <p>Health Score: <span className="font-medium">{p.healthScore}</span></p>
            <p>Employees: {p.employees.length}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
