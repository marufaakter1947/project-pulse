"use client";
import { useState } from "react";

export default function CheckInForm({ projectId }) {
  const [summary, setSummary] = useState("");
  const [blockers, setBlockers] = useState("");
  const [confidence, setConfidence] = useState(5);
  const [completion, setCompletion] = useState(0);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const employeeId = localStorage.getItem("userId");

    const res = await fetch("/api/checkins", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ projectId, employeeId, summary, blockers, confidence, completion }),
    });

    if (res.ok) setMessage("Check-in submitted successfully!");
    else setMessage("Error submitting check-in.");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded max-w-md">
      <h3 className="text-xl font-bold mb-2">Weekly Check-In</h3>
      <textarea
        placeholder="Progress Summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        className="w-full p-2 border mb-2 rounded"
        required
      />
      <textarea
        placeholder="Blockers / Challenges"
        value={blockers}
        onChange={(e) => setBlockers(e.target.value)}
        className="w-full p-2 border mb-2 rounded"
      />
      <input
        type="number"
        placeholder="Confidence (1-5)"
        value={confidence}
        onChange={(e) => setConfidence(e.target.value)}
        min={1} max={5}
        className="w-full p-2 border mb-2 rounded"
        required
      />
      <input
        type="number"
        placeholder="Completion %"
        value={completion}
        onChange={(e) => setCompletion(e.target.value)}
        min={0} max={100}
        className="w-full p-2 border mb-2 rounded"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      {message && <p className="mt-2">{message}</p>}
    </form>
  );
}
