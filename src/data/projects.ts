import { Project, ProjectTag } from '../types/project';

const projects: Project[] = [
  {
    id: 'stoc-ai',
    title: 'STOC AI',
    description: 'A low-cost, field-deployable device that predicts total organic carbon (TOC) in soil using real-time sensor data and machine learning.',
    thumbnail: 'https://i.imgur.com/EKxPUG2.jpeg',
    tags: ['Python', 'Web Development'] as ProjectTag[],
    path: '/stoc-ai',
    year: 2025
  },
  {
    id: 'neurochess',
    title: 'Neurochess',
    description: 'A web application that combines chess education with interactive analysis and cognitive feedback, featuring AI-powered move analysis, educational videos, and responsive design for all devices.',
    thumbnail: 'https://i.imgur.com/pkbbe9D.png',
    tags: ['Web Development'] as ProjectTag[],
    path: '/neurochess',
    year: 2024
  },
  {
    id: 'focusflow',
    title: 'FocusFlow',
    description: 'A modern web-based Tetris game with secure code obfuscation, Firebase authentication, and optimized leaderboard system, featuring SEO enhancements and responsive design.',
    thumbnail: 'https://img.youtube.com/vi/WL_y1XK-sIQ/sddefault.jpg',
    tags: ['Web Development'] as ProjectTag[],
    path: '/focusflow',
    year: 2024
  },
  {
    id: 'LSTM-financial-model',
    title: 'LSTM NVDA Model',
    description: 'A Python-based machine learning model that uses Long Short-Term Memory (LSTM) networks to predict NVIDIA stock prices.',
    thumbnail: 'https://i.imgur.com/yrBCJvi.png',
    tags: ['Python'] as ProjectTag[],
    path: '/LSTM-financial-model',
    year: 2024
  },
  {
    id: 'skyblock-item-logger',
    title: 'Skyblock Item Logger',
    description: 'A Python-based tool that tracks and analyzes item prices in Minecraft Skyblock using the Hypixel API, featuring automated data collection and visualization.',
    thumbnail: 'https://i.imgur.com/jldOwY1.png',
    tags: ['Python'] as ProjectTag[],
    path: '/skyblock-item-logger',
    year: 2024
  },
  {
    id: 'valorant-loadout-optimizer',
    title: 'Valorant Loadout Optimizer',
    description: 'A Python-based tool that uses computer vision and machine learning to analyze Valorant gameplay screenshots and recommend optimal weapon and shield loadouts based on professional player data.',
    thumbnail: 'https://i.imgur.com/YSJubb4.png',
    tags: ['Python'] as ProjectTag[],
    path: '/valorant-loadout-optimizer',
    year: 2024
  },
  {
    id: 'chess-analysis',
    title: 'Chess Analysis',
    description: 'Java-based application for analyzing chess games and strategies using statistical analysis and data visualization.',
    thumbnail: 'https://i.imgur.com/uhGItrb.png',
    tags: ['Java'] as ProjectTag[],
    path: '/chess-analysis',
    year: 2023
  },
  {
    id: 'snake-game',
    title: 'Educational Snake Game',
    description: 'A Java-based implementation of the classic Snake game, designed for educational purposes with a focus on object-oriented programming principles.',
    thumbnail: 'https://img.youtube.com/vi/2QblpNvy2tk/hqdefault.jpg',
    tags: ['Java'] as ProjectTag[],
    path: '/snake-game',
    year: 2023
  },
  {
    id: 'polka-dot',
    title: 'Polka Dot Game',
    description: 'A Python-based arcade game where players control a dot to consume smaller dots while avoiding larger ones, featuring dynamic cursor control, difficulty levels, and optimized performance.',
    thumbnail: 'https://img.youtube.com/vi/n0cZOY_2MZk/sddefault.jpg',
    tags: ['Python'] as ProjectTag[],
    path: '/polka-dot',
    year: 2023
  }
];

export { projects }; 