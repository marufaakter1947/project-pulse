"use client";

import AdminSidebar from "@/components/AdminSidebar";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function AdminDashboardLayout({ children }) {
  return (
    <ProtectedRoute role="admin">
      <div className="flex">
        <AdminSidebar />
        <main className="ml-64 w-full min-h-screen bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}
