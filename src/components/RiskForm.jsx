// components/RiskForm.jsx
"use client";
import { useState } from "react";

export default function RiskForm({ projectId }) {
  const [title, setTitle] = useState("");
  const [severity, setSeverity] = useState("Low");
  const [mitigation, setMitigation] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const employeeId = localStorage.getItem("userId");

    const res = await fetch("/api/risks", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ projectId, employeeId, title, severity, mitigation }),
    });

    if (res.ok) setMessage("Risk submitted successfully!");
    else setMessage("Error submitting risk.");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded max-w-md">
      <h3 className="text-xl font-bold mb-2">Submit a Risk</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border mb-2 rounded"
        required
      />
      <select
        value={severity}
        onChange={(e) => setSeverity(e.target.value)}
        className="w-full p-2 border mb-2 rounded"
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <textarea
        placeholder="Mitigation Plan"
        value={mitigation}
        onChange={(e) => setMitigation(e.target.value)}
        className="w-full p-2 border mb-2 rounded"
        required
      />
      <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">Submit</button>
      {message && <p className="mt-2">{message}</p>}
    </form>
  );
}
