"use client";

export default function ClientDashboard() {
  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">
        Welcome, {user?.name}
      </h1>
      <p className="text-gray-600 mb-6">
        Here is an overview of your projects and feedback.
      </p>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded shadow">
          <h3 className="font-semibold">Assigned Projects</h3>
          <p className="text-2xl mt-2">5</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3 className="font-semibold">Project Health</h3>
          <p className="text-2xl mt-2 text-green-600">Good</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h3 className="font-semibold">Last Feedback</h3>
          <p className="text-sm mt-2">2 days ago</p>
        </div>
      </div>
    </div>
  );
}
