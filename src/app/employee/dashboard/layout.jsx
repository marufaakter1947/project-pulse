import EmployeeSidebar from "@/components/EmployeeSidebar";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function EmployeeLayout({ children }) {
  return (
    <ProtectedRoute role="Employee">
      <div className="flex">
        <EmployeeSidebar />
        <main className="ml-64 w-full min-h-screen bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}
