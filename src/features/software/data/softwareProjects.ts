import type { Project } from "../types/Project";

export const softwareProjects: Project[] = [
  {
    title: "Game Companion",
    subtitle: "Desktop Companion Application",
    description: "Desktop companion framework for game-specific tools and plugins.",
    technologies: [
      "React",
      "TypeScript",
      "Rust",
      "Tauri",
    ],
    highlights: [
      "Built a JSON-driven game plugin architecture",
      "Connected a React frontend to Rust commands through Tauri",
      "Designed reusable character and runtime-instruction systems",
    ],
    githubUrl: "https://github.com/SaeDus/game-companion",
  },

  {
    title: "<First Sample Project Card>",
    subtitle: "...",
    description: "<First Sample Project Description>",
  },

  {
    title: "<Second Sample Project Card>",
    subtitle: "...",
    description: "<Second Sample Project Description>",
  },

  {
    title: "<Third Sample Project Card>",
    subtitle: "...",
    description: "<Third Sample Project Description>",
  },
];
