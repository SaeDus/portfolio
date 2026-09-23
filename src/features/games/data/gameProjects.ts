import type { Game } from "../types/Game";
import sampleImage from "../../../assets/Sample_Image.webp";

export const gameProjects: Game[] = [
  {
    title: "Master of Disguise",
    genre: "Top-Down Adventure",
    role: "Gameplay / Systems Programmer",

    description: "Top-down game in development focused on grid movement, fog of war, interaction, and large-scale AI navigation for hundreds of agents.",

    image: sampleImage,

    engine: "Unity",
    status: "In Development",

    highlights: [
      "Built deterministic grid movement with smooth visual interpolation",
      "Offloaded fog-of-war visibility calculations to the GPU",
      "Developed layered pathfinding and navigation systems supporting 400+ agents",
    ],
  },

  {
    title: "Spectral Surveillance",
    genre: "Surveillance Horror",
    role: "Gameplay Programmer",

    description: "Isometric spot-the-difference horror prototype where players monitor remote environments for subtle anomalies through a surveillance hub.",

    image: sampleImage,

    engine: "Unity",
    status: "Prototype",

    highlights: [
      "Built a surveillance hub that loads playable environments independently",
      "Created remote surveillance feeds using cameras and RenderTextures",
      "Coordinated proximity, loading, and display states across the surveillance system",
    ],
  },

  {
    title: "The Excalibur",
    genre: "Shooter Action",
    role: "Gameplay Programmer",

    description: "Fast-paced action shooter prototype with aggressive attack-and-retreat enemy behavior with varied melee and ranged threats.",

    image: sampleImage,

    engine: "Unity",
    status: "Game Jam Prototype",

    highlights: [
      "Built enemy combat around aggressive charge, engagement, and retreat behaviors",
      "Implemented distinct melee and ranged enemy behaviors across multiple enemy types",
      "Developed combat systems supporting mixed 2D enemies and a custom 3D player character controller",
    ],
  },

  {
    title: "Reign & Rebellion: Tower Defense",
    genre: "Tower Defense",
    role: "Gameplay Programmer",

    description: "Tower defense game with automated defenders, enemy waves, a deployable hero, and multiple maps built around lane control.",

    image: sampleImage,

    engine: "Unity",
    status: "Shipped",

    highlights: [
      "Built and refined defender targeting, creep handoff, and hero aggro behavior",
      "Implemented a custom spline for creep pathfinding with several entry points and branching lanes",
      "Developed various development tools to speed up or automate creating new creeps, heroes, towers, and maps",
    ],

    externalUrl: "https://khestral.itch.io/reign-and-rebellion-tower-defense",
  },
];
