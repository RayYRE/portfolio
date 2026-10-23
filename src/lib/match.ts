// Maps a free-text question to a conversation slug. Order matters: specific projects before general topics.
const rules: [slug: string, keywords: string[]][] = [
  ["phase-shift", ["phase", "shift", "platformer", "dimension"]],
  ["magic-knight", ["magic", "knight", "roguelike", "spell", "noita"]],
  ["find-mine", ["find mine", "findmine", "hackathon", "map", "venue", "leaflet", "accessib"]],
  ["resume", ["resume", "cv", "experience"]],
  ["contact", ["contact", "email", "reach", "hire", "phone", "whatsapp", "linkedin", "touch"]],
  ["projects", ["project", "built", "build", "work", "game", "portfolio"]],
  ["about", ["about", "who", "yourself", "background", "skill", "study", "university", "degree"]],
];

export function matchQuestion(question: string): string {
  const q = question.toLowerCase();
  for (const [slug, keywords] of rules) {
    if (keywords.some((k) => q.includes(k))) return slug;
  }
  return "help";
}
