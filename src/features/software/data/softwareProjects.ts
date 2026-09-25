import type { Project } from "../types/Project";
import gameCompanionImage from "../../../assets/projects/game-companion/game-companion-banner.webp";
import masterOfDisguiseImage from "../../../assets/projects/master-of-disguise/master-of-disguise-banner.webp";
import spectralSurveillanceImage from "../../../assets/projects/spectral-surveillance/spectral-surveillance-banner.webp";
import stealthPerimeterImage from "../../../assets/projects/stealth-perimeter/stealth-perimeter-banner.webp";

export const softwareProjects: Project[] = [
  {
    title: "Game Companion",
    subtitle: "Desktop Companion Application",
    description: "Desktop companion framework for game-specific tools, save-data extraction, and portable character data.",

    image: gameCompanionImage,

    technologies: [
      "React",
      "TypeScript",
      "Rust",
      "Tauri",
      "C#",
      ".NET",
      "Python",
    ],

    highlights: [
      "Parses binary game saves into strongly typed, portable JSON",
      "Uses modular game-specific exporters isolated from the shared application",
      "Generates lookup data and validation resources through Python tooling",
    ],

    githubUrl: "https://github.com/SaeDus/game-companion",
  },

  {
    title: "Master of Disguise",
    subtitle: "Gameplay Systems & GPU Programming",
    description: "Top-down stealth game featuring deterministic movement, grid-based navigation, and GPU-driven visibility systems.",

    image: masterOfDisguiseImage,

    technologies: [
      "Unity",
      "C#",
      "Shaders",
      "GPU Programming",
      "Pathfinding",
    ],

    highlights: [
      "Built grid-based movement with deterministic logical positioning and smooth visual interpolation",
      "Implemented fog-of-war visibility calculations on the GPU",
      "Used sliding visibility windows, texture data, bitwise operations, and a custom shader",
    ],
  },

  {
    title: "Spectral Surveillance",
    subtitle: "Runtime Architecture & Rendering",

    description: "Surveillance gameplay prototype built around multi-scene runtime architecture and remote camera rendering.",

    image: spectralSurveillanceImage,

    technologies: [
      "Unity",
      "C#",
      "RenderTexture",
      "Scene Management",
      "Runtime Systems",
    ],

    highlights: [
      "Architected playable scenes to load independently from a persistent lobby",
      "Streamed remote camera feeds through shared RenderTextures",
      "Coordinated proximity, loading states, and render targets to limit unnecessary rendering",
    ],
  },

  {
    title: "Stealth Perimeter",
    subtitle: "AI Pathfinding Toolkit",

    description: "Reusable stealth-AI toolkit for route evaluation, player movement prediction, and modular enemy behavior.",

    image: stealthPerimeterImage,

    technologies: [
      "Unity",
      "C#",
      "A*",
      "Dijkstra",
      "State Machines",
      "AI Systems",
    ],

    highlights: [
      "Combined A* and Dijkstra pathfinding to evaluate routes and predict player movement",
      "Separated navigation logic from behavior through state-machine sequencing",
      "Designed the toolkit for reusable and extensible enemy behaviors",
    ],
  },
];
