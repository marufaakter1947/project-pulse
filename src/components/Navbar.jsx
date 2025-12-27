"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import logo from "../assets/images/logo-white-CyDn9rGY.png";
import avatarImg from "../assets/images/default-avatar.jpg";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  // check login
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  // role based dashboard
  const dashboardRoute = user?.role
    ? `/app/dashboard/${user.role}`
    : "/";

  return (
    <nav className="fixed top-0 inset-x-0 bg-white shadow z-50">
      <div className="mx-6 flex items-center justify-between h-16">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src={logo.src} className="w-9 h-9" alt="logo" />
          <span className="font-bold text-xl text-blue-600">
            ProjectPulse
          </span>
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
            <Link href="/login" className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700">
              Login
            </Link>
            {/* <Link
              href="/register"
              className=""
            >
              Register
            </Link> */}
          </div>
        ) : (
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <img
              src={user.avatar || avatarImg.src}
              className="w-9 h-9 rounded-full cursor-pointer"
              alt="avatar"
            />

            {open && (
              <div className="absolute right-0 mt-2 w-44 bg-white shadow rounded">
                <Link
                  href={dashboardRoute}
                  className="block px-4 py-2 hover:bg-gray-100"
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
