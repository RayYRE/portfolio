export type ProjectSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Project = {
  slug: string;
  title: string;
  award: string;
  summary: string;
  image?: string;
  tech: string[];
  links?: { label: string; href: string }[];
  sections: ProjectSection[];
};

// Add a project by adding an entry here — it shows up in the sidebar, the project list and its own chat page.
export const projects: Project[] = [
  {
    slug: "find-mine",
    title: "Find Mine",
    award: "CISSA Catalyst Hackathon — Runner Up",
    summary:
      "An interactive map of live music venues that lets people check and share their accessibility features.",
    tech: ["Leaflet", "Full stack"],
    sections: [
      {
        paragraphs: [
          "My first experience building a full stack project. This hackathon taught me the range of technologies a software developer is expected to know, and through it I learnt from my peers how the frontend interacts with the backend and database.",
          "Find Mine uses the Australian government's API of music venues to place interactive markers on a Leaflet map. Users can comment on each venue's accessibility features, helping others decide whether it suits their needs.",
        ],
      },
    ],
  },
  {
    slug: "magic-knight",
    title: "Magic Knight",
    award: "Ranked 5th in Gameplay — UniMelb GMC 2025 Mid-Sem Game Jam",
    summary:
      "A roguelike where players experiment with different combinations of spells to survive.",
    image: "/images/MagicKnightGIF.gif",
    tech: ["Godot", "Game jam"],
    links: [{ label: "itch.io", href: "https://carelesscapybara.itch.io/" }],
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "A team of two, we set out to build a 2D roguelike with spell mechanics inspired by Noita. In Magic Knight you experiment with different combinations of spells to battle incoming hordes of goblins.",
        ],
      },
      {
        heading: "Inventory",
        paragraphs: [
          "We had two different types of inventory, so I built it on resources to keep it scalable and reusable. I adapted the built-in drag and drop functions to suit our game: each inventory slot is a scene that detects drops and inserts the item into its respective inventory.",
        ],
      },
      {
        heading: "Spell system",
        paragraphs: [
          "The spell inventory is a list of resources that the spell manager loops through to cast spells in order. Once the base resource existed, adding new types of spells was easy.",
        ],
      },
      {
        heading: "What I learnt",
        bullets: [
          "Making mechanics scalable and code reusable (polymorphism)",
          "Finding the root cause of bugs and debugging",
        ],
      },
    ],
  },
  {
    slug: "phase-shift",
    title: "Phase Shift",
    award: "CISSA × UMGMC Game Jam Submission",
    summary:
      "A platformer with a twist — phase between two eras to navigate an ever-changing world.",
    image: "/images/PhaseShiftGIF.gif",
    tech: ["Godot", "Game jam"],
    links: [{ label: "itch.io", href: "https://carelesscapybara.itch.io/" }],
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "As a team of three beginner game devs, we made a platformer that uses a singleton to swap between dimensions to solve puzzles and escape from a human lab.",
        ],
      },
      {
        heading: "Damage mechanic and UI",
        paragraphs: [
          "I implemented a one-hit KO mechanic with a hitbox slightly smaller than the sprite so the game feels more forgiving, plus a simple UI with buttons for the win and lose scenes.",
        ],
      },
      {
        heading: "The phase shift mechanic",
        paragraphs: [
          "Pressing Shift moves the player between the two dimensions. The map lives in one scene across separate TileMapLayers; toggling each layer's visibility and collision, together with a transition animation, makes the shift seamless.",
          "The hardest problem was players shifting while overlapping a block in the other layer. After hours of research we tracked the player's position delta while mid-air to detect when they were stuck.",
        ],
      },
      {
        heading: "What I learnt",
        bullets: [
          "Collaborating with team members",
          "Using GitHub more effectively",
          "The basics of game making and game engines",
        ],
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
