"use client";
import { useState } from "react";

export default function FeedbackForm({ projectId }) {
  const [satisfaction, setSatisfaction] = useState(5);
  const [communication, setCommunication] = useState(5);
  const [comments, setComments] = useState("");
  const [flagged, setFlagged] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const clientId = localStorage.getItem("userId");

    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ projectId, clientId, satisfaction, communication, comments, flagged }),
    });

    if (res.ok) setMessage("Feedback submitted successfully!");
    else setMessage("Error submitting feedback.");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded max-w-md">
      <h3 className="text-xl font-bold mb-2">Weekly Feedback</h3>
      <input
        type="number"
        placeholder="Satisfaction (1-5)"
        value={satisfaction}
        onChange={(e) => setSatisfaction(e.target.value)}
        min={1} max={5}
        className="w-full p-2 border mb-2 rounded"
        required
      />
      <input
        type="number"
        placeholder="Communication Clarity (1-5)"
        value={communication}
        onChange={(e) => setCommunication(e.target.value)}
        min={1} max={5}
        className="w-full p-2 border mb-2 rounded"
        required
      />
      <textarea
        placeholder="Optional Comments"
        value={comments}
        onChange={(e) => setComments(e.target.value)}
        className="w-full p-2 border mb-2 rounded"
      />
      <label className="flex items-center mb-2">
        <input type="checkbox" checked={flagged} onChange={(e) => setFlagged(e.target.checked)} className="mr-2" />
        Flag an Issue
      </label>
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
      {message && <p className="mt-2">{message}</p>}
    </form>
  );
}
