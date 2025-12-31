"use client";

export default function EmployeeDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-1">
        Welcome back
      </h1>
      <p className="text-gray-600 mb-6">
        Here is your employee dashboard overview
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Assigned Projects" value="3" />
        <Card title="Pending Check-ins" value="2" />
        <Card title="Open Risks" value="1" />
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}
