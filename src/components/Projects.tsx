// components/Projects.jsx

import Link from 'next/link';
import SectionLabel from './SectionLabel';
import { projects } from '@/util/projectData';

// const projects = [
//   {
//     number: '01',
//     title: 'Invoicing Mobile App',
//     description:
//       'A full-featured invoicing mobile application built with React Native. Redesigned complex form flows into modular, reusable UI components. Includes document creation for items, customers — with robust validation and clear UX feedback throughout.',
//     stack: ['React Native', 'REST API', 'Tanstack Query'],
//     color: '#7fff6e',
//     category: 'Mobile',
//   },
//   {
//     number: '02',
//     title: 'Football Pitch Booking App',
//     description:
//       'End-to-end mobile app for booking football pitches. Delivered core modules covering authentication, session management, pitch discovery, and full booking flows. Collaborated closely with backend engineers to align API contracts.',
//     stack: ['React Native', 'Firebase', 'Tanstack Query'],
//     color: '#6eb8ff',
//     category: 'Mobile',
//   },
//   {
//     number: '03',
//     title: 'Speech to Text Converter',
//     description:
//       'A comprehensive web application to Easily convert your speech into text with our state-of-the-art service. get accurate transcriptions in seconds with our user-friendly interface and powerful technology ',
//     stack: ['Vue.js', 'Web Speech API', 'Tailwind CSS'],
//     color: '#c084fc',
//     category: 'Web',
//   },
//   {
//     number: '04',
//     title: 'Orbit E-commerce Platform',
//     description:
//       'A scalable e-commerce platform built with Next.js, featuring a custom CMS for product management, dynamic server-side rendering for SEO, and seamless integration with third-party payment gateways. Implemented a responsive design with Tailwind CSS to ensure a smooth shopping experience across all devices.',
//     stack: ['Next.js', 'Rest API', 'Tailwind CSS'],
//     color: '#f97316',
//     category: 'Web',
//   },
// ];

export default function Projects() {
  return (
    <section id='projects' className='relative z-10 py-28 px-8'>
      <div className='max-w-6xl mx-auto'>
        <div data-aos='fade-right'>
          <SectionLabel number='04' title='Projects' />
        </div>

        <h2
          className='font-display font-bold tracking-[-0.03em] text-text-primary mb-14'
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          data-aos='fade-up'
        >
          {`Things I've Built`}
        </h2>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10'>
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className='relative bg-bg-card border border-border rounded-lg p-8 flex flex-col gap-4 overflow-hidden transition-all duration-300 group hover:border-border-bright hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(0,0,0,0.4)]'
              data-aos='fade-up'
              data-aos-delay={i * 100}
            >
              {/* Hover glow */}
              <div
                className='absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500'
                style={{
                  background: `radial-gradient(circle at 50% 100%, ${project.color}15, transparent 60%)`,
                }}
              />

              {/* Top row */}
              <div className='flex items-center justify-between relative z-10'>
                <span className='font-mono text-[0.68rem] text-text-muted tracking-widest'>
                  {project.number}
                </span>
                <div className='flex items-center gap-2'>
                  <span
                    className='font-mono text-[0.65rem] uppercase tracking-widest px-3 py-1 rounded-full border'
                    style={{
                      color: project.color,
                      borderColor: `${project.color}60`,
                      background: `${project.color}15`,
                    }}
                  >
                    {project.category}
                  </span>
                  {/* Arrow hint */}
                  <svg
                    className='text-text-muted opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200'
                    width='13'
                    height='13'
                    viewBox='0 0 16 16'
                    fill='none'
                  >
                    <path
                      d='M3 13L13 3M13 3H7M13 3v6'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h3
                className='font-display font-bold text-[1.3rem] tracking-[-0.02em] leading-tight text-text-primary relative z-10 transition-colors duration-200 group-hover:text-[var(--c)]'
                style={{ '--c': project.color } as React.CSSProperties}
              >
                {project.title}
              </h3>

              {/* Tagline */}
              <p className='font-serif italic text-text-secondary text-sm leading-relaxed relative z-10'>
                {project.tagline}
              </p>

              {/* Tool tags */}
              <div className='flex flex-wrap gap-2 mt-auto pt-2 relative z-10'>
                {project.tools.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className='font-mono text-[0.7rem] text-text-muted border border-border px-2.5 py-1 rounded-sm transition-all duration-200 group-hover:border-border-bright group-hover:text-text-secondary'
                  >
                    {tech}
                  </span>
                ))}
                {project.tools.length > 4 && (
                  <span className='font-mono text-[0.7rem] text-text-muted px-2.5 py-1'>
                    +{project.tools.length - 4} more
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Note */}
        <div
          className='flex items-start gap-3 bg-blue-dim border border-[rgba(110,184,255,0.15)] rounded-md px-5 py-4'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          <span className='text-blue text-base flex-shrink-0 mt-0.5'>ℹ</span>
          <p className='text-[0.825rem] text-text-secondary leading-[1.6]'>
            These projects were developed during professional engagements.
            Source code is proprietary — descriptions reflect actual features
            shipped in production.
          </p>
        </div>
      </div>
    </section>
  );
}
