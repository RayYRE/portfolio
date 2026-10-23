import { useState, type FormEvent, type KeyboardEvent } from "react";
import { useNavigate } from "react-router";
import { LuArrowUp } from "react-icons/lu";
import { matchQuestion } from "../lib/match";

/** The chat input. Questions are matched to a scripted conversation and opened as a new page. */
export function Composer({ autoFocus = false }: { autoFocus?: boolean }) {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const submit = (e?: FormEvent) => {
    e?.preventDefault();
    const question = text.trim();
    if (!question) return;
    setText("");
    navigate(`/c/${matchQuestion(question)}`, { state: { question } });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) submit(e);
  };

  return (
    <form
      onSubmit={submit}
      className="rounded-2xl border border-border bg-input p-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition focus-within:border-muted/50"
    >
      <label htmlFor="composer" className="sr-only">
        Ask a question
      </label>
      <textarea
        id="composer"
        rows={2}
        value={text}
        autoFocus={autoFocus}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Ask about my projects, background, or how to reach me…"
        className="field-sizing-content max-h-48 min-h-12 w-full resize-none bg-transparent px-1 text-[15px] outline-none placeholder:text-muted"
      />
      <div className="flex items-center justify-between gap-2">
        <span className="px-1 text-xs text-muted">Scripted answers — no AI involved (yet)</span>
        <button
          type="submit"
          disabled={!text.trim()}
          aria-label="Send"
          className="grid size-8 shrink-0 place-items-center rounded-lg bg-accent text-on-accent transition hover:bg-accent-hover disabled:opacity-40"
        >
          <LuArrowUp size={18} />
        </button>
      </div>
    </form>
  );
}
