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
  /** Optional little callouts like awards, usage stats, etc. */
  highlights?: string[];
  /** Flag to visually feature this project in grids. */
  featured?: boolean;
} 