import ProtectedRoute from "@/components/ProtectedRoute";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function ClientDashboard() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const token = localStorage.getItem("token");
      const res = await fetch("/api/feedback", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setFeedbacks(data);
    };
    fetchFeedbacks();
  }, []);

  return (
    <ProtectedRoute role="Client">
      <Navbar />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Client Dashboard</h2>
        {feedbacks.map((f) => (
          <div key={f._id} className="p-4 border rounded mb-2">
            <p>Project: {f.project}</p>
            <p>Satisfaction: {f.satisfaction}</p>
            <p>Communication: {f.communication}</p>
            <p>Flagged: {f.flagged ? "Yes" : "No"}</p>
          </div>
        ))}
      </div>
    </ProtectedRoute>
  );
}
