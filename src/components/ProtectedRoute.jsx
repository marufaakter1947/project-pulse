"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "./Loader";

export default function ProtectedRoute({ children, role }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      router.replace("/auth/login");
      return;
    }

    const user = JSON.parse(userData);

    if (role && user.role.toLowerCase() !== role.toLowerCase()) {
      router.replace("/auth/login");
      return;
    }

    setLoading(false);
  }, [router, role]);

  if (loading) return <Loader />;

  return children;
}
