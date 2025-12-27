import ClientSidebar from "@/components/ClientSidebar";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function ClientLayout({ children }) {
  return (
    <ProtectedRoute role="client">
      <div className="flex">
        <ClientSidebar />
        <main className="ml-64 w-full min-h-screen bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}
