"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  Activity,
  MessageSquare,
  User,
  LogOut,
} from "lucide-react";

export default function ClientSidebar() {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", href: "/client/dashboard", icon: LayoutDashboard },
    { name: "Projects", href: "/client/dashboard/projects", icon: FolderKanban },
    { name: "Health Status", href: "/client/dashboard/health", icon: Activity },
    { name: "Feedback", href: "/client/dashboard/feedback", icon: MessageSquare },
  ];

  const isActive = (href) => pathname === href;

  return (
    <aside className="w-64 h-screen bg-slate-900 text-white flex flex-col justify-between fixed">
      {/* Top */}
      <div>
        <h2 className="text-xl font-bold p-6 border-b border-slate-700">
          ProjectPulse
        </h2>

        <nav className="mt-4 space-y-1">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-6 py-3 hover:bg-slate-800 ${
                isActive(item.href) && "bg-slate-800"
              }`}
            >
              <item.icon size={18} />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-700">
        <Link
          href="/profile"
          className="flex items-center gap-3 px-6 py-3 hover:bg-slate-800"
        >
          <User size={18} /> Profile
        </Link>

        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/auth/login";
          }}
          className="flex items-center gap-3 px-6 py-3 text-red-400 hover:bg-slate-800 w-full"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>
    </aside>
  );
}
