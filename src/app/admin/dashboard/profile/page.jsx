"use client";

import { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaIdBadge } from "react-icons/fa";

export default function AdminProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  if (!user) {
    return <p className="p-6">Loading...</p>;
  }

  return (
    <div className="max-w-2xl bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Admin Profile</h2>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <FaUser className="text-gray-500" />
          <p><b>Name:</b> {user.name}</p>
        </div>

        <div className="flex items-center gap-3">
          <FaEnvelope className="text-gray-500" />
          <p><b>Email:</b> {user.email}</p>
        </div>

        <div className="flex items-center gap-3">
          <FaIdBadge className="text-gray-500" />
          <p><b>Role:</b> {user.role}</p>
        </div>
      </div>
    </div>
  );
}
