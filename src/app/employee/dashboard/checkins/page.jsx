"use client";

export default function EmployeeCheckins() {
  const pending = [
    { id: 1, week: "Week 12", status: "Pending" },
    { id: 2, week: "Week 13", status: "Pending" },
  ];

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Pending Weekly Check-ins</h2>

      {pending.map((c) => (
        <div
          key={c.id}
          className="bg-white p-4 rounded shadow mb-3"
        >
          {c.week} — <b>{c.status}</b>
        </div>
      ))}
    </>
  );
}
