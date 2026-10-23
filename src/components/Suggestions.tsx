import { Link } from "react-router";
import { suggestions } from "../data/conversations";

export function Suggestions({ exclude, className = "" }: { exclude?: string; className?: string }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {suggestions
        .filter((s) => s.slug !== exclude)
        .map((s) => (
          <Link
            key={s.slug}
            to={`/c/${s.slug}`}
            className="rounded-lg border border-border bg-bg px-3 py-1.5 text-sm text-text/80 transition hover:bg-surface-hover hover:text-text"
          >
            {s.label}
          </Link>
        ))}
    </div>
  );
}
