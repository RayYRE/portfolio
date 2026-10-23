import type { ReactNode } from "react";
import { Link } from "react-router";
import { LuFileText, LuMail } from "react-icons/lu";
import { ProjectAnswer, ProjectCard } from "../components/ProjectAnswer";
import { profile, socials } from "./profile";
import { getProject, projects } from "./projects";

export type Conversation = {
  slug: string;
  title: string;
  /** The question shown in the user bubble when the page is opened from a link. */
  prompt: string;
  /** The reply. Return a fragment: each top-level element streams in separately. */
  answer: () => ReactNode;
};

const linkClass = "text-accent underline decoration-accent/40 underline-offset-2 hover:decoration-accent";

const pages: Conversation[] = [
  {
    slug: "about",
    title: "About me",
    prompt: "Tell me about yourself",
    answer: () => (
      <>
        <p>
          Hello! I'm {profile.firstName}, a recent Computer Science graduate from the University of Melbourne with a
          passion for software development and problem solving.
        </p>
        <p>
          I'm particularly interested in <strong>backend development</strong>: building APIs and understanding how the
          different parts of a system work together. Through university and personal projects I've gained hands-on
          experience with JavaScript, Node.js, Express, databases and API integrations.
        </p>
        <p>
          I enjoy taking ideas from concept to working solution, whether that's collaborating with a team on a web
          application or building tools on my own to solve practical problems. I'm always keen to learn new
          technologies and improve the way I build software.
        </p>
        <p>
          I'm currently looking for opportunities to grow as a software developer, contribute to meaningful projects
          and learn from experienced engineers. Want to see{" "}
          <Link to="/c/projects" className={linkClass}>
            what I've built
          </Link>{" "}
          or{" "}
          <Link to="/c/contact" className={linkClass}>
            get in touch
          </Link>
          ?
        </p>
      </>
    ),
  },
  {
    slug: "projects",
    title: "Projects",
    prompt: "What have you built?",
    answer: () => (
      <>
        <p>Here are a few things I've worked on — a hackathon web app and two game jam games:</p>
        <div className="grid gap-3">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <p>Open any of them for the details of what I built and what I learnt.</p>
      </>
    ),
  },
  {
    slug: "contact",
    title: "Contact",
    prompt: "How can I get in touch?",
    answer: () => (
      <>
        <p>I'd love to hear from you. The quickest ways to reach me:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>
            Email:{" "}
            <a href={`mailto:${profile.email}`} className={linkClass}>
              {profile.email}
            </a>
          </li>
          <li>Phone / WhatsApp: {profile.phone} (Australia)</li>
        </ul>
        <div className="flex flex-wrap gap-2 font-sans text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-3 py-2 text-on-accent hover:bg-accent-hover"
          >
            <LuMail aria-hidden /> Send an email
          </a>
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 hover:bg-surface-hover"
            >
              <Icon aria-hidden /> {label}
            </a>
          ))}
        </div>
      </>
    ),
  },
  {
    slug: "resume",
    title: "Resume",
    prompt: "Can I see your resume?",
    answer: () => (
      <>
        <p>Of course — here's my latest resume:</p>
        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 rounded-xl border border-border bg-input p-4 font-sans transition hover:border-accent/60"
        >
          <span className="grid size-10 place-items-center rounded-lg bg-surface-hover text-accent">
            <LuFileText size={20} aria-hidden />
          </span>
          <span>
            <span className="block font-medium">RayErnYap_Resume2026.pdf</span>
            <span className="block text-sm text-muted">PDF · opens in a new tab</span>
          </span>
        </a>
      </>
    ),
  },
  {
    slug: "help",
    title: "Help",
    prompt: "",
    answer: () => (
      <>
        <p>
          I'm a scripted portfolio, so I can only answer a few kinds of questions for now. Try asking about my{" "}
          <Link to="/c/projects" className={linkClass}>
            projects
          </Link>
          , a specific project like{" "}
          <Link to="/c/magic-knight" className={linkClass}>
            Magic Knight
          </Link>
          , my{" "}
          <Link to="/c/about" className={linkClass}>
            background
          </Link>
          , my{" "}
          <Link to="/c/resume" className={linkClass}>
            resume
          </Link>
          , or{" "}
          <Link to="/c/contact" className={linkClass}>
            how to reach me
          </Link>
          .
        </p>
      </>
    ),
  },
];

export function getConversation(slug: string): Conversation | undefined {
  const page = pages.find((c) => c.slug === slug);
  if (page) return page;
  const project = getProject(slug);
  if (!project) return undefined;
  return {
    slug: project.slug,
    title: project.title,
    prompt: `Tell me about ${project.title}`,
    answer: () => <ProjectAnswer project={project} />,
  };
}

/** Suggestion chips shown on the home screen and under each reply. */
export const suggestions = [
  { slug: "projects", label: "Show me your projects" },
  { slug: "about", label: "Tell me about yourself" },
  { slug: "resume", label: "View resume" },
  { slug: "contact", label: "Get in touch" },
];
