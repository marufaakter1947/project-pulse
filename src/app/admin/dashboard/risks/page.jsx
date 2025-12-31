"use client";

import { useEffect, useState } from "react";

export default function RisksPage() {
  const [risks, setRisks] = useState([]);

  useEffect(() => {
    const fetchRisks = async () => {
      const token = localStorage.getItem("token");
      const res = await fetch("/api/admin/risks", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setRisks(data.filter(r => r.status === "Open"));
    };
    fetchRisks();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">High-risk Projects</h2>
      {risks.length === 0 ? (
        <p>No open risks.</p>
      ) : (
        <ul className="space-y-2">
          {risks.map(r => (
            <li key={r._id} className="bg-white p-4 rounded shadow">
              <p>Project: {r.projectName}</p>
              <p>Risk: {r.title}</p>
              <p>Status: {r.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
