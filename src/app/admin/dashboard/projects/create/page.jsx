"use client";
import { useState } from "react";

export default function CreateProject() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    clientId: "",
    employeeIds: "",
  });

  async function submit(e) {
    e.preventDefault();

    try {
      const res = await fetch("/api/admin/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          employeeIds: form.employeeIds
            .split(",")
            .map((id) => id.trim()), // remove spaces
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Project created successfully!");
        setForm({ name: "", description: "", clientId: "", employeeIds: "" });
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Create New Project</h1>
      <form onSubmit={submit} className="space-y-4">
        <input
          type="text"
          placeholder="Project Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <textarea
          placeholder="Project Description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          placeholder="Client ID"
          value={form.clientId}
          onChange={(e) => setForm({ ...form, clientId: e.target.value })}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          placeholder="Employee IDs (comma separated)"
          value={form.employeeIds}
          onChange={(e) =>
            setForm({ ...form, employeeIds: e.target.value })
          }
          className="w-full border px-3 py-2 rounded"
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Create Project
        </button>
      </form>
    </div>
  );
}
