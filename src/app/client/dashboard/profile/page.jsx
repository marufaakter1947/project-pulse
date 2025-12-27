"use client";

import { useEffect, useState } from "react";

export default function ClientProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  if (!user) return null;

  return (
    <div className="max-w-xl">
      <h2 className="text-2xl font-bold mb-6">My Profile</h2>

      <div className="bg-white p-6 rounded shadow space-y-4">
        <div>
          <p className="text-sm text-gray-500">Name</p>
          <p className="font-medium">{user.name}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Role</p>
          <p className="font-medium">{user.role}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">User ID</p>
          <p className="text-sm break-all">{user.id}</p>
        </div>
      </div>
    </div>
  );
}
