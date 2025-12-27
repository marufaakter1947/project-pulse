"use client";

export default function HealthPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Project Health Status</h2>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded shadow">
          <p>Overall Health</p>
          <h3 className="text-2xl text-green-600 font-bold">Good</h3>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <p>Flags</p>
          <h3 className="text-2xl font-bold">1</h3>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <p>Satisfaction</p>
          <h3 className="text-2xl font-bold">4.5 / 5</h3>
        </div>
      </div>
    </div>
  );
}
