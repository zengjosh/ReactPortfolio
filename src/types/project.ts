export type ProjectTag = 'Java' | 'Python' | 'Web Development';

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: ProjectTag[];
  path: string;
  year: number;
} 