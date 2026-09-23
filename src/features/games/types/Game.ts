export interface Game {
  title: string;
  genre: string;
  role: string;

  description: string;

  image?: string;

  engine: string;
  platform?: string;
  status: string;

  highlights?: string[];

  githubUrl?: string;
  externalUrl?: string;
}
