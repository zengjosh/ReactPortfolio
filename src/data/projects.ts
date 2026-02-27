import { Project, ProjectTag, ProjectStatus } from '../types/project';

const projects: Project[] = [
  {
    id: 'r3fresh',
    title: 'r3fresh',
    description: 'Full-stack agent lifecycle management platform: Python SDK on PyPI for AI agent telemetry, FastAPI on Railway, Supabase/PostgreSQL event-driven architecture, Next.js dashboard with AI assistant, and Stripe subscriptions.',
    thumbnail: 'https://i.imgur.com/4I2oRwp.png',
    tags: ['Python', 'Web Development'] as ProjectTag[],
    path: '/r3fresh',
    year: 2025,
    status: 'In Progress' as ProjectStatus,
    highlights: ['Under development']
  },
  {
    id: 'stoc-ai',
    title: 'STOC AI',
    description: 'A low-cost, field-deployable device that predicts total organic carbon (TOC) in soil using real-time sensor data and machine learning.',
    thumbnail: 'https://i.imgur.com/EKxPUG2.jpeg',
    tags: ['Python', 'Web Development'] as ProjectTag[],
    path: '/stoc-ai',
    year: 2025,
    status: 'Completed' as ProjectStatus
  },
  {
    id: 'neurochess',
    title: 'Neurochess',
    description: 'A web application that combines chess education with interactive analysis and cognitive feedback, featuring AI-powered move analysis, educational videos, and responsive design for all devices.',
    thumbnail: 'https://i.imgur.com/pkbbe9D.png',
    tags: ['Web Development'] as ProjectTag[],
    path: '/neurochess',
    year: 2024,
    status: 'Completed' as ProjectStatus,
    featured: true,
    highlights: [
      'Congressional App Challenge Winner',
      'Presented at #HouseOfCode'
    ]
  },
  {
    id: 'tetri-us',
    title: 'tetri.us',
    description: 'A modern web-based Tetris game with secure code obfuscation, Firebase authentication, and optimized leaderboard system, featuring SEO enhancements and responsive design.',
    thumbnail: 'https://img.youtube.com/vi/WL_y1XK-sIQ/sddefault.jpg',
    tags: ['Web Development'] as ProjectTag[],
    path: '/tetri-us',
    year: 2024,
    status: 'Completed' as ProjectStatus,
    featured: true,
    highlights: [
      '20k+ visits',
      '150+ accounts',
      '1000+ total hours played'
    ]
  },
  {
    id: 'LSTM-financial-model',
    title: 'LSTM NVDA Model',
    description: 'A Python-based machine learning model that uses Long Short-Term Memory (LSTM) networks to predict NVIDIA stock prices.',
    thumbnail: 'https://i.imgur.com/yrBCJvi.png',
    tags: ['Python'] as ProjectTag[],
    path: '/LSTM-financial-model',
    year: 2024,
    status: 'Completed' as ProjectStatus
  },
  {
    id: 'skyblock-item-logger',
    title: 'Skyblock Item Logger',
    description: 'A Python-based tool that tracks and analyzes item prices in Minecraft Skyblock using the Hypixel API, featuring automated data collection and visualization.',
    thumbnail: 'https://i.imgur.com/jldOwY1.png',
    tags: ['Python'] as ProjectTag[],
    path: '/skyblock-item-logger',
    year: 2024,
    status: 'Completed' as ProjectStatus
  },
  {
    id: 'valorant-loadout-optimizer',
    title: 'Valorant Loadout Optimizer',
    description: 'A Python-based tool that uses computer vision and machine learning to analyze Valorant gameplay screenshots and recommend optimal weapon and shield loadouts based on professional player data.',
    thumbnail: 'https://i.imgur.com/YSJubb4.png',
    tags: ['Python'] as ProjectTag[],
    path: '/valorant-loadout-optimizer',
    year: 2024,
    status: 'Completed' as ProjectStatus
  },
  {
    id: 'chess-analysis',
    title: 'Chess Analysis',
    description: 'Java-based application for analyzing chess games and strategies using statistical analysis and data visualization.',
    thumbnail: 'https://i.imgur.com/uhGItrb.png',
    tags: ['Java'] as ProjectTag[],
    path: '/chess-analysis',
    year: 2023,
    status: 'Completed' as ProjectStatus
  },
  {
    id: 'snake-game',
    title: 'Educational Snake Game',
    description: 'A Java-based implementation of the classic Snake game, designed for educational purposes with a focus on object-oriented programming principles.',
    thumbnail: 'https://img.youtube.com/vi/2QblpNvy2tk/hqdefault.jpg',
    tags: ['Java'] as ProjectTag[],
    path: '/snake-game',
    year: 2023,
    status: 'Completed' as ProjectStatus
  },
  {
    id: 'polka-dot',
    title: 'Polka Dot Game',
    description: 'A Python-based arcade game where players control a dot to consume smaller dots while avoiding larger ones, featuring dynamic cursor control, difficulty levels, and optimized performance.',
    thumbnail: 'https://img.youtube.com/vi/n0cZOY_2MZk/sddefault.jpg',
    tags: ['Python'] as ProjectTag[],
    path: '/polka-dot',
    year: 2023,
    status: 'Completed' as ProjectStatus
  }
];

export { projects }; 