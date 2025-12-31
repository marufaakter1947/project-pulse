"use client";

import { useEffect, useState } from "react";

export default function CheckinsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const token = localStorage.getItem("token");
      const res = await fetch("/api/admin/projects", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();

      // Filter projects missing check-ins
      const missingCheckIns = data.filter(
        (p) => !p.lastCheckIn || (new Date() - new Date(p.lastCheckIn)) / (1000*60*60*24) > 7
      );

      setProjects(missingCheckIns);
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projects Missing Recent Check-ins</h2>
      {projects.length === 0 ? (
        <p>No projects missing check-ins.</p>
      ) : (
        <ul className="space-y-2">
          {projects.map((p) => (
            <li key={p._id} className="bg-white p-4 rounded shadow">
              {p.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
