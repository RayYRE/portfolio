import type { ReactNode } from "react";
import { Link } from "react-router";
import { LuExternalLink, LuGamepad2, LuTrophy } from "react-icons/lu";
import type { Project } from "../data/projects";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border px-2.5 py-0.5 font-sans text-xs text-muted">
      {children}
    </span>
  );
}

export function Award({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-1.5 font-sans text-sm text-accent">
      <LuTrophy className="shrink-0" aria-hidden />
      {children}
    </p>
  );
}

function Thumbnail({ project, className }: { project: Project; className: string }) {
  if (project.image) {
    return <img src={project.image} alt={`${project.title} gameplay`} className={`object-cover ${className}`} />;
  }
  return (
    <div className={`grid place-items-center bg-surface-hover text-muted ${className}`}>
      <LuGamepad2 size={28} aria-hidden />
    </div>
  );
}

/** The full write-up for one project, rendered as an assistant reply. Returns a fragment so each block streams in. */
export function ProjectAnswer({ project }: { project: Project }) {
  return (
    <>
      <div className="space-y-2">
        <h2 className="font-serif text-3xl">{project.title}</h2>
        <Award>{project.award}</Award>
      </div>
      {project.image && <Thumbnail project={project} className="w-full rounded-xl border border-border" />}
      {project.sections.map((section, i) => (
        <section key={i} className="space-y-3">
          {section.heading && <h3 className="font-sans text-base font-semibold">{section.heading}</h3>}
          {section.paragraphs?.map((p, j) => <p key={j}>{p}</p>)}
          {section.bullets && (
            <ul className="list-disc space-y-1 pl-6">
              {section.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
      <div className="flex flex-wrap items-center gap-2">
        {project.tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
        {project.links?.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-sans text-sm text-accent hover:underline"
          >
            {link.label} <LuExternalLink size={14} aria-hidden />
          </a>
        ))}
      </div>
    </>
  );
}

/** A compact, artifact-style card that links to a project's conversation. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/c/${project.slug}`}
      className="group flex overflow-hidden rounded-xl border border-border bg-input transition hover:border-accent/60 hover:shadow-sm"
    >
      <Thumbnail project={project} className="h-auto w-28 shrink-0 sm:w-36" />
      <div className="min-w-0 space-y-1 p-4 font-sans">
        <p className="font-medium group-hover:text-accent">{project.title}</p>
        <p className="text-sm leading-snug text-muted">{project.summary}</p>
        <p className="pt-1 text-xs text-accent">{project.award}</p>
      </div>
    </Link>
  );
}
