export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  contributions: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  url: string;
  githubUrl?: string;
  technicalSheet: string[];
  resources?: {
    title: string;
    url: string;
  }[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'sports-analytics-dashboard',
    title: 'Sports Analytics Dashboard',
    shortDescription: 'Real-time sports analytics and visualization platform',
    fullDescription: `
      A comprehensive sports analytics platform that provides real-time insights into game
      statistics, player performance metrics, and predictive analytics. The dashboard features
      interactive visualizations, live data updates, and customizable reporting tools for
      sports analysts and decision makers.
    `,
    contributions: `
      Led the development of the frontend architecture using React and D3.js. Implemented
      real-time data visualization components, designed the WebSocket integration for live
      updates, and created a responsive, intuitive user interface that handles complex data
      representations.
    `,
    thumbnail: '/projects/placeholder.png',
    images: ['/projects/placeholder.png'],
    tags: ['Machine Learning'],
    url: '#',
    technicalSheet: ['Coming Soon'],
  },
  {
    id: 'performance-metrics-tool',
    title: 'Performance Metrics Tool',
    shortDescription: 'Comprehensive athlete performance tracking system',
    fullDescription: `
      A sophisticated analytics platform designed to track and analyze athlete performance
      metrics across multiple sports. The system incorporates machine learning algorithms
      for performance prediction, injury prevention, and training optimization, while
      providing coaches and athletes with actionable insights.
    `,
    contributions: `
      Architected the full-stack application using Next.js and Python. Implemented data
      collection systems, designed the database schema, and created interactive dashboards
      for performance visualization. Developed machine learning models for performance
      prediction and injury risk assessment.
    `,
    thumbnail: '/projects/placeholder.png',
    images: ['/projects/placeholder.png'],
    tags: ['Generative AI'],
    url: '#',
    technicalSheet: ['Coming Soon'],
  },
];

export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured);
