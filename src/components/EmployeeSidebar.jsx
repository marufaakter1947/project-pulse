"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  FaProjectDiagram,
  FaClipboardCheck,
  FaExclamationTriangle,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

export default function EmployeeSidebar() {
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
      path: "/employee/dashboard",
      icon: <FaProjectDiagram />,
    },
    {
      name: "Projects",
      path: "/employee/dashboard/projects",
      icon: <FaProjectDiagram />,
    },
    {
      name: "Check-ins",
      path: "/employee/dashboard/checkins",
      icon: <FaClipboardCheck />,
    },
    {
      name: "Risks",
      path: "/employee/dashboard/risks",
      icon: <FaExclamationTriangle />,
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r flex flex-col">
      {/* Logo */}
      <Link
        href="/"
        className="text-xl font-bold text-blue-600 p-6 border-b"
      >
        ProjectPulse
      </Link>

      {/* Menu */}
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

      {/* Bottom */}
      <div className="border-t p-4">
        <Link
          href="/employee/dashboard/profile"
          className="flex items-center gap-2 mb-3 hover:text-blue-600"
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
