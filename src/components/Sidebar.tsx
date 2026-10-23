import type { ReactNode } from "react";
import { Link, NavLink } from "react-router";
import { LuFileText, LuFolder, LuMail, LuPlus, LuUser, LuX } from "react-icons/lu";
import { profile, socials } from "../data/profile";
import { projects } from "../data/projects";
import { ThemeToggle } from "./ThemeToggle";

function Item({ to, icon, children }: { to: string; icon?: ReactNode; children: ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2.5 truncate rounded-lg px-3 py-1.5 text-sm transition ${
          isActive ? "bg-surface-hover font-medium text-text" : "text-text/80 hover:bg-surface-hover"
        }`
      }
    >
      {icon}
      {children}
    </NavLink>
  );
}

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-border bg-surface transition-transform duration-200 md:static md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 pt-4 pb-3">
          <Link to="/" className="font-serif text-xl">
            {profile.name}
          </Link>
          <button
            onClick={onClose}
            aria-label="Close sidebar"
            className="grid size-8 place-items-center rounded-lg text-muted hover:bg-surface-hover md:hidden"
          >
            <LuX size={18} />
          </button>
        </div>

        <nav className="space-y-0.5 px-2">
          <Link
            to="/"
            className="mb-2 flex items-center gap-2.5 rounded-lg px-3 py-1.5 text-sm font-medium text-accent hover:bg-surface-hover"
          >
            <span className="grid size-6 place-items-center rounded-full bg-accent text-on-accent">
              <LuPlus size={15} />
            </span>
            New chat
          </Link>
          <Item to="/c/projects" icon={<LuFolder size={16} className="text-muted" />}>
            Projects
          </Item>
          <Item to="/c/about" icon={<LuUser size={16} className="text-muted" />}>
            About me
          </Item>
          <Item to="/c/resume" icon={<LuFileText size={16} className="text-muted" />}>
            Resume
          </Item>
          <Item to="/c/contact" icon={<LuMail size={16} className="text-muted" />}>
            Contact
          </Item>
        </nav>

        <p className="px-5 pt-6 pb-1.5 text-xs font-medium text-muted">Recents</p>
        <nav className="min-h-0 flex-1 space-y-0.5 overflow-y-auto px-2">
          {projects.map((p) => (
            <Item key={p.slug} to={`/c/${p.slug}`}>
              {p.title}
            </Item>
          ))}
        </nav>

        <div className="flex items-center justify-between border-t border-border px-3 py-3">
          <div className="flex items-center gap-1">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="grid size-8 place-items-center rounded-lg text-muted transition hover:bg-surface-hover hover:text-text"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </aside>

      {open && <div onClick={onClose} className="fixed inset-0 z-30 bg-black/40 md:hidden" aria-hidden />}
    </>
  );
}
