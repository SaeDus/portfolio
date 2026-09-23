export interface Project {
  title: string;
  subtitle: string;
  description: string;

  image?: string;

  technologies?: string[];
  highlights?: string[];

  githubUrl?: string;
  externalUrl?: string;
}
