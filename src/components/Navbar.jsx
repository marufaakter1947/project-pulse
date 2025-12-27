"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import logo from "../assets/images/logo-white-CyDn9rGY.png";
import avatarImg from "../assets/images/default-avatar.jpg";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
   const [mounted, setMounted] = useState(false); 

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      setUser(JSON.parse(userData));
    } else {
      setUser(null);
    }
     setMounted(true);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setOpen(false);
    window.location.href = "/login";
  };

 const roleRoutes = {
  admin: "/admin/dashboard",
  employee: "/employee/dashboard",
  client: "/client/dashboard",
};

const dashboardRoute = user?.role
  ? roleRoutes[user.role.toLowerCase()]
  : "/";

  return (
    <nav className="fixed top-0 inset-x-0 bg-white shadow z-50">
      <div className="mx-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src={logo.src} className="w-9 h-9" alt="logo" />
          <span className="font-bold text-xl text-blue-600">ProjectPulse</span>
        </Link>

        {/* Middle Links */}
        <div className="hidden md:flex gap-8 font-semibold">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        {/* Right Side */}
        {!user ? (
          <div className="flex gap-4 font-semibold">
            <Link
              href="/login"
              className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition"
            >
              Login
            </Link>
          </div>
        ) : (
          <div className="relative">
            <img
              src={user.avatar || avatarImg.src}
              className="w-9 h-9 rounded-full cursor-pointer"
              alt="avatar"
              onClick={() => setOpen(!open)}
            />

            {open && (
              <div className="absolute right-0 mt-2 w-44 bg-white shadow rounded z-50">
                <Link
                  href={dashboardRoute}
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
