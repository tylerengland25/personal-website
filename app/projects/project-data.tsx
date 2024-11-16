export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  imageUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Sports Analytics Dashboard',
    year: 2023,
    description: 'Real-time sports analytics and visualization platform',
    url: 'https://example.com/sports-dashboard',
    imageUrl: '/projects/sports-dashboard.jpg',
    featured: true,
  },
  {
    title: 'ML Prediction Model',
    year: 2023,
    description: 'Machine learning model for predicting game outcomes',
    url: 'https://example.com/ml-prediction',
    imageUrl: '/projects/ml-prediction.jpg',
    featured: true,
  },
  {
    title: 'Performance Metrics Tool',
    year: 2022,
    description: 'Comprehensive athlete performance tracking system',
    url: 'https://example.com/metrics-tool',
    imageUrl: '/projects/metrics-tool.jpg',
    featured: true,
  },
  {
    title: 'Project One',
    year: 2023,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.',
    url: 'https://example.com/',
    imageUrl: '/projects/project-one.jpg',
    featured: false,
  },
  {
    title: 'Project Two',
    year: 2022,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.',
    url: 'https://example.com/',
    imageUrl: '/projects/project-two.jpg',
    featured: false,
  },
  {
    title: 'Project Three',
    year: 2021,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.',
    url: 'https://example.com/',
    imageUrl: '/projects/project-three.jpg',
    featured: false,
  },
];

export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured);
