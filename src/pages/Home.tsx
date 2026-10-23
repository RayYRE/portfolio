import { useEffect } from "react";
import { Composer } from "../components/Composer";
import { Suggestions } from "../components/Suggestions";
import { profile } from "../data/profile";

function greeting() {
  const hour = new Date().getHours();
  if (hour < 5) return "Up late";
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export function Home() {
  useEffect(() => {
    document.title = profile.name;
  }, []);

  return (
    <div className="flex flex-1 flex-col items-center justify-center overflow-y-auto px-4 py-10 sm:px-6">
      <div className="stream w-full max-w-2xl">
        <h1 className="text-center font-serif text-4xl leading-tight sm:text-5xl">
          {greeting()}, I'm <span className="text-accent">{profile.firstName}</span>.
        </h1>
        <p className="mt-3 text-center text-muted">{profile.tagline}</p>
        <div className="mt-8">
          <Composer autoFocus />
        </div>
        <Suggestions className="mt-4 justify-center" />
      </div>
    </div>
  );
}
