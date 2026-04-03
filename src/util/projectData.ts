// util/projectData.ts
// ─────────────────────────────────────────────────────────────
// HOW TO USE:
//   1. Duplicate one of the objects below for each project.
//   2. Fill in every field marked with  ← EDIT THIS
//   3. Drop your images into /public/projects/<slug>/
//      and reference them in the `images` array.
//   4. Set previewUrl to null if no live link exists.
// ─────────────────────────────────────────────────────────────

export type ProjectStatus = 'Shipped' | 'In Progress' | 'Concept';
export type ProjectCategory = 'Mobile' | 'Web' | 'Full-Stack';

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  color: string;
  status: ProjectStatus;
  description: string[];
  images: ProjectImage[];
  tools: string[];
  previewUrl: string | null;
  githubUrl: string | null;
  company: string;
  year: string;
  role: string;
}

export const projects: Project[] = [
  {
    // ── IDENTITY ──────────────────────────────────────────────
    slug: 'invoicing-mobile-app', // ← URL slug (no spaces)
    number: '01',
    title: 'InvoicePal', // ← EDIT THIS
    tagline:
      'Streamlined invoicing, receipt generation and quote creation for the field.', // ← EDIT THIS
    category: 'Mobile',
    color: '#7fff6e',
    status: 'In Progress',

    // ── DESCRIPTION ───────────────────────────────────────────
    description: [
      'a full-featured invoicing mobile application built with React Native. Redesigned complex form flows into modular, reusable UI components. Includes document creation for items, client — with robust validation and clear UX feedback throughout.',
      'stack includes React Native for the frontend, a REST API for backend communication, and Tanstack Query for efficient data fetching and state management. The app features intuitive navigation, real-time updates, seamless authentication, and a responsive design to ensure a smooth user experience across various devices.',
    ],

    // ── IMAGES ────────────────────────────────────────────────
    // Drop images into /public/projects/invoicing-mobile-app/
    images: [
      //   {
      //     src: '/projects/invoicing-mobile-app/cover.png',
      //     alt: 'Invoicing app — main screen',
      //   },
    ],

    tools: ['React Native', 'REST API', 'Tanstack Query'],
    previewUrl: null, // ← 'https://your-live-link.com' or null
    githubUrl: null, // ← 'https://github.com/you/repo'  or null
    company: 'BluePeak Technologies',
    year: '2025',
    role: 'Frontend Mobile Engineer',
  },

  {
    slug: 'football-pitch-booking',
    number: '02',
    title: 'PitchBook',
    tagline: 'Book your pitch. Show up and play.',
    category: 'Mobile',
    color: '#6eb8ff',
    status: 'Shipped',
    description: [
      'A mobile application for booking football pitches, built with React Native. Features include real-time availability checks, seamless booking flows, and integrated payment processing.',
    ],
    images: [
      {
        src: '/proj-img/pitchbook4.jpeg',
        alt: 'Pitch booking — home screen',
      },
      {
        src: '/proj-img/pitchbook2.jpeg',
        alt: 'Pitch booking — Search Screen',
      },
      {
        src: '/proj-img/pitchbook3.jpeg',
        alt: 'Pitch booking — Settings Screen',
      },
    ],
    tools: ['React Native', 'Firebase', 'Tanstack Query'],
    previewUrl: 'https://www.pitchbookng.com',
    githubUrl: null,
    company: 'BluePeak Technologies',
    year: '2025',
    role: 'Frontend Mobile Engineer',
  },

  {
    slug: 'Speech-to-text-converter',
    number: '03',
    title: 'Speech to Text Converter',
    tagline: 'Accurate speech-to-text conversion for seamless communication.',
    category: 'Web',
    color: '#c084fc',
    status: 'Shipped',
    description: [
      'A comprehensive web application to Easily convert your speech into text with our state-of-the-art service. get accurate transcriptions in seconds with our user-friendly interface and powerful technology ',
      'Built with Vue.js, the app leverages the Web Speech API for real-time transcription and Tailwind CSS for a responsive design. It features a clean interface, and options to save or copy transcriptions.',
    ],
    images: [
      {
        src: '/proj-img/speech-2-text-home.png',
        alt: 'Converter — overview',
      },
      {
        src: '/proj-img/speech-2-text-transcript.png',
        alt: 'Converter — transcription view',
      },
    ],
    tools: ['Vue.js', 'Web Speech API', 'Tailwind CSS'],
    previewUrl: 'https://speech2text-lime.vercel.app/',
    githubUrl: 'https://github.com/lawalm2003/Vue-Speech-To-Text-App',
    company: 'Personal Project',
    year: '2025',
    role: 'Frontend Web Engineer',
  },

  {
    slug: 'orbit-ecommerce-platform',
    number: '04',
    title: 'Orbit',
    tagline:
      'A scalable e-commerce platform with custom CMS and dynamic server-side rendering.',
    category: 'Web',
    color: '#f97316',
    status: 'Shipped',
    description: [
      'A scalable e-commerce platform built with Next.js, featuring a custom CMS for product management, dynamic server-side rendering for SEO, and seamless integration with third-party payment gateways. Implemented a responsive design with Tailwind CSS to ensure a smooth shopping experience across all devices.',
      'The platform includes features such as user authentication, product search and filtering, shopping cart functionality, and an admin dashboard for managing products and orders. The custom CMS allows for easy content updates, while server-side rendering ensures fast load times and improved SEO performance.',
    ],
    images: [
      //   {
      //     src: '/projects/auth-security-system/cover.png',
      //     alt: 'Auth system — login screen',
      //   },
      //   {
      //     src: '/projects/auth-security-system/screen-2.png',
      //     alt: 'Auth system — OTP flow',
      //   },
    ],
    tools: ['Next.js', 'Rest API', 'Tailwind CSS'],
    previewUrl: 'https://orbit-customer.vercel.app/',
    githubUrl: null,
    company: 'Freelance Project',
    year: '2026',
    role: 'Frontend Web Engineer',
  },
  {
    slug: 'medimate-medication-reminder-app',
    number: '04',
    title: 'Medimate App',
    tagline:
      'A user-friendly app to help users manage their medication schedules and reminders.',
    category: 'Mobile',
    color: '#10b981',

    status: 'In Progress',
    description: [
      'A personal project to explore mobile health applications. This medication reminder app helps users track their daily medications',
      'Features: Add medications with detailed forms, Daily schedule view with timeline of medications, Quick status updates (Taken/Skipped) with one tap, Profile management with compliance statistics',
    ],
    images: [
      {
        src: '/proj-img/medimate1.jpg',
        alt: 'Medimate — home screen',
      },
      {
        src: '/proj-img/medimate2.jpg',
        alt: 'Medimate — Add Medication Screen',
      },
      {
        src: '/proj-img/medimate3.jpg',
        alt: 'Medimate — Profile Screen',
      },
    ],
    tools: ['React Native', 'AsyncStorage'],
    previewUrl: null,
    githubUrl: null,
    company: 'Personal Project',
    year: '2026',
    role: 'Frontend Web Engineer',
  },
];

// Helper — get a single project by slug
export function getProject(slug: string): Project | null {
  return projects.find((p) => p.slug === slug) ?? null;
}
