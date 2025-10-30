export type ProjectTag = 'Java' | 'Python' | 'Web Development';
export type ProjectStatus = 'Completed' | 'In Progress';

export interface Project {
  id: string;
  title: string;
  description?: string;
  thumbnail: string;
  tags: ProjectTag[];
  path?: string;
  year: number;
  status?: ProjectStatus;
  externalLink?: string;
} 