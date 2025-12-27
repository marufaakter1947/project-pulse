"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children, role }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role");

    if (!token || (role && userRole !== role)) {
      router.push("/auth/login");
    } else {
      setAuthorized(true);
    }
  }, [router, role]);

  if (!authorized) return <p>Loading...</p>;
  return children;
}
