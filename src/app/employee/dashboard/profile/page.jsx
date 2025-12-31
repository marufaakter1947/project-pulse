"use client";

import { useEffect, useState } from "react";
import { FaUser, FaIdBadge } from "react-icons/fa";

export default function EmployeeProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) setUser(JSON.parse(userData));
  }, []);

  if (!user) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Employee Profile</h1>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <FaUser className="text-gray-500" />
          <p><span className="font-semibold">Name:</span> {user.name}</p>
        </div>

        <div className="flex items-center gap-3">
          <FaIdBadge className="text-gray-500" />
          <p><span className="font-semibold">Role:</span> {user.role}</p>
        </div>
      </div>
    </div>
  );
}
