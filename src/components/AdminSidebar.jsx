"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo-white-CyDn9rGY.png";
import { usePathname, useRouter } from "next/navigation";
import {
  FaProjectDiagram,
  FaClipboardCheck,
  FaExclamationTriangle,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.replace("/");
  };

  const menu = [
    {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <FaProjectDiagram />,
  },
    {
      name: "Projects",
      path: "/admin/dashboard/projects",
      icon: <FaProjectDiagram />,
    },
     {
    name: "Create Project",
    path: "/admin/dashboard/projects/create",
    icon: <FaProjectDiagram />,
  },
    {
      name: "Missing Check-ins",
      path: "/admin/dashboard/checkins",
      icon: <FaClipboardCheck />,
    },
    {
      name: "High-risk Projects",
      path: "/admin/dashboard/risks",
      icon: <FaExclamationTriangle />,
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r flex flex-col">
      {/* 🔹 Logo */}
      <Link
        href="/"
        className="flex items-center gap-3 p-6 border-b border-slate-700 hover:bg-slate-800"
      >
        <Image src={logo} alt="logo" width={36} height={36} />
        <span className="text-xl font-bold">ProjectPulse</span>
      </Link>

      {/* 🔹 Middle Menu */}
      <nav className="flex-1 px-4 py-4 space-y-2">
        {menu.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center gap-3 px-4 py-2 rounded
              ${
                pathname === item.path
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>

      {/* 🔹 Bottom Section */}
      <div className="border-t p-4">
        <Link
          href="/admin/dashboard/profile"
          className={`flex items-center gap-2 mb-3
            ${
              pathname === "/admin/dashboard/profile"
                ? "text-blue-600 font-semibold"
                : "hover:text-blue-600"
            }`}
        >
          <FaUserCircle />
          Profile
        </Link>

        <button
          onClick={logout}
          className="flex items-center gap-2 text-red-600"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
}
