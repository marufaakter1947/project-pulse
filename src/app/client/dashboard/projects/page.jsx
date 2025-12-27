"use client";

export default function ProjectsPage() {
  const projects = [
    { id: 1, name: "Website Redesign", status: "Active" },
    { id: 2, name: "Mobile App", status: "Completed" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Assigned Projects</h2>

      <div className="grid grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="bg-white p-5 rounded shadow">
            <h3 className="font-semibold">{p.name}</h3>
            <p className="mt-2 text-sm">
              Status:{" "}
              <span className="font-medium">{p.status}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
