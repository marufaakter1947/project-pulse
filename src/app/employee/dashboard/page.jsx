"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function EmployeeDashboard() {
  const [checkIns, setCheckIns] = useState([]);

  useEffect(() => {
    const fetchCheckIns = async () => {
      const token = localStorage.getItem("token");
      const res = await fetch("/api/checkins", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setCheckIns(data);
    };
    fetchCheckIns();
  }, []);

  return (
    <ProtectedRoute role="Employee">
      <Navbar />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Employee Dashboard</h2>
        {checkIns.map((c) => (
          <div key={c._id} className="p-4 border rounded mb-2">
            <p>Project: {c.project}</p>
            <p>Confidence: {c.confidence}</p>
            <p>Completion: {c.completion}%</p>
          </div>
        ))}
      </div>
    </ProtectedRoute>
  );
}
