"use client";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/dashboard")
      .then(res => res.json())
      .then(res => {
        setData(res);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!data || !data.projects) return <p>No dashboard data</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome Admin</h1>
      <p className="text-gray-500 mb-6">
        Project overview & system health
      </p>

      <div className="grid grid-cols-3 gap-4">
        <Card title="On Track" value={data.projects.onTrack ?? 0} />
        <Card title="At Risk" value={data.projects.atRisk ?? 0} />
        <Card title="Critical" value={data.projects.critical ?? 0} />
        <Card title="High Risks" value={data.highRisks ?? 0} />
        <Card title="Missing Check-ins" value={data.missingCheckins ?? 0} />
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="border rounded p-4 shadow">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
