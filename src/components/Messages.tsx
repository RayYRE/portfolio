import { useEffect, useState, type ReactNode } from "react";

export function UserMessage({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-end">
      <p className="max-w-[85%] rounded-2xl bg-bubble px-4 py-2.5 text-[15px] whitespace-pre-wrap">{children}</p>
    </div>
  );
}

function Thinking() {
  return (
    <div className="flex h-7 items-center gap-1.5" role="status" aria-label="Thinking">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="thinking-dot size-2 rounded-full bg-accent"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}

/** An assistant reply: a short "thinking" beat, then each top-level child fades in one after another. */
export function AssistantMessage({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const id = setTimeout(() => setReady(true), reduced ? 0 : 550);
    return () => clearTimeout(id);
  }, []);

  if (!ready) return <Thinking />;
  return <div className="stream space-y-4 font-serif text-[17px] leading-relaxed">{children}</div>;
}
