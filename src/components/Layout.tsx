import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import { LuPanelLeft } from "react-icons/lu";
import { profile } from "../data/profile";
import { Sidebar } from "./Sidebar";

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile drawer whenever the route changes.
  useEffect(() => setSidebarOpen(false), [pathname]);

  return (
    <div className="flex h-dvh overflow-hidden bg-bg text-text">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center gap-2 px-3 py-2 md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
            className="grid size-9 place-items-center rounded-lg text-muted hover:bg-surface-hover"
          >
            <LuPanelLeft size={19} />
          </button>
          <Link to="/" className="font-serif text-lg">
            {profile.name}
          </Link>
        </header>
        <main className="flex min-h-0 flex-1 flex-col">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
