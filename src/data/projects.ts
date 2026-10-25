/**
 * LAPLOOP Ventures & Projects Registry
 * 
 * Scalable data structure supporting verified initiatives, research experiments,
 * and future products developed under the Laploop vision.
 * 
 * Per Laploop brand guidelines: Only verified projects are displayed.
 * When empty, the interface renders a tasteful architectural staging state.
 */

export type ProjectCategory = 
  | 'Artificial Intelligence'
  | 'Advanced Computing'
  | 'Cybersecurity'
  | 'Software & Platforms'
  | 'Robotics & Automation'
  | 'Hardware & Semiconductors';

export type DevelopmentStatus = 
  | 'Research Exploration'
  | 'Architectural Prototyping'
  | 'Internal Engineering'
  | 'Pre-Release Pilot'
  | 'Active Initiative';

export interface LaploopProject {
  id: string;
  name: string;
  description: string;
  category: ProjectCategory;
  status: DevelopmentStatus;
  url?: string;
  engineeringFocus?: string;
}

/**
 * Configure active projects here.
 * Defaults to an empty list to prevent fabricated claims or fake case studies.
 * When owners configure verified projects, they will automatically appear.
 */
export const LAPLOOP_PROJECTS: LaploopProject[] = [
  // To register a verified Laploop project or venture, add it below:
  // {
  //   id: 'project-1',
  //   name: 'Project Alpha',
  //   description: 'Description of the verified engineering initiative.',
  //   category: 'Advanced Computing',
  //   status: 'Internal Engineering',
  //   url: 'https://example.com'
  // }
];

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'Artificial Intelligence',
  'Advanced Computing',
  'Cybersecurity',
  'Software & Platforms',
  'Robotics & Automation',
  'Hardware & Semiconductors',
];
