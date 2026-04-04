// app/projects/[slug]/ProjectDetail.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { projects, type Project, type ProjectImage } from '@/util/projectData';
import { Gallery } from '@/components/UI/Gallery';
import Link from 'next/link';

// ─── Status badge styles ──────────────────────────────────────
function statusStyles(status: Project['status']): React.CSSProperties {
  const map: Record<Project['status'], React.CSSProperties> = {
    Shipped: {
      color: '#7fff6e',
      borderColor: '#7fff6e40',
      background: '#7fff6e12',
    },
    'In Progress': {
      color: '#fbbf24',
      borderColor: '#fbbf2440',
      background: '#fbbf2412',
    },
    Concept: {
      color: '#8888aa',
      borderColor: '#8888aa40',
      background: '#8888aa12',
    },
  };
  return map[status];
}

const statusPrefix: Record<Project['status'], string> = {
  Shipped: '✓ ',
  'In Progress': '⟳ ',
  Concept: '',
};

// ─── Main client component ────────────────────────────────────
interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const router = useRouter();
  const { color } = project;

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: true,
      offset: 40,
    });
  }, []);

  const idx = projects.findIndex((p) => p.slug === project.slug);
  const prev: Project | null = idx > 0 ? projects[idx - 1] : null;
  const next: Project | null =
    idx < projects.length - 1 ? projects[idx + 1] : null;

  return (
    <main className='min-h-screen bg-bg text-text-primary font-display relative overflow-x-hidden'>
      {/* Grid background */}
      <div
        className='fixed inset-0 pointer-events-none z-0 opacity-50'
        style={{
          backgroundImage:
            'linear-gradient(rgba(127,255,110,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(127,255,110,0.02) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient glow */}
      <div
        className='fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none z-0'
        style={{
          background: `radial-gradient(ellipse at center, ${color}10 0%, transparent 70%)`,
          filter: 'blur(60px)',
        }}
      />

      <div className='relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-10 pb-24'>
        {/* ── Top bar ── */}
        <div
          className='flex items-center justify-between mb-12'
          data-aos='fade-down'
        >
          <button
            onClick={() => router.back()}
            className='group inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-text-secondary border border-border px-4 py-2.5 rounded-sm transition-all duration-200 hover:border-accent hover:text-accent hover:bg-accent-dim'
          >
            <svg
              className='transition-transform duration-200 group-hover:-translate-x-1'
              width='14'
              height='14'
              viewBox='0 0 16 16'
              fill='none'
            >
              <path
                d='M13 8H3M7 4l-4 4 4 4'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            Back
          </button>

          <div className='flex items-center gap-2'>
            <span
              className='font-mono text-[0.65rem] uppercase tracking-widest px-3 py-1.5 rounded-full border'
              style={{
                color,
                borderColor: `${color}60`,
                background: `${color}12`,
              }}
            >
              {project.category}
            </span>
            <span
              className='font-mono text-[0.65rem] uppercase tracking-widest px-3 py-1.5 rounded-full border'
              style={statusStyles(project.status)}
            >
              {statusPrefix[project.status]}
              {project.status}
            </span>
          </div>
        </div>

        {/* ── Title block ── */}
        <div className='mb-12' data-aos='fade-up'>
          <span className='font-mono text-[0.7rem] text-text-muted tracking-[0.2em] uppercase block mb-3'>
            Project {project.number}
          </span>
          <h1
            className='font-display font-black tracking-[-0.04em] leading-[0.95] mb-4 text-text-primary'
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
          >
            {project.title}
          </h1>
          <p className='font-serif italic text-text-secondary text-xl leading-relaxed max-w-xl'>
            {project.tagline}
          </p>
        </div>

        {/* ── Main grid ── */}
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 mb-16'>
          {/* Gallery */}
          <div data-aos='fade-up' data-aos-delay='100'>
            <Gallery
              images={project.images}
              color={color}
              slug={project.slug}
            />
          </div>

          {/* Sidebar */}
          <div
            className='flex flex-col gap-5'
            data-aos='fade-left'
            data-aos-delay='200'
          >
            {/* Meta card */}
            <div className='bg-bg-card border border-border rounded-xl p-6 flex flex-col gap-5'>
              {(
                [
                  { label: 'Company', value: project.company },
                  { label: 'Role', value: project.role },
                  { label: 'Year', value: project.year },
                ] as const
              ).map(({ label, value }) => (
                <div key={label}>
                  <p className='font-mono text-[0.65rem] uppercase tracking-widest text-text-muted mb-1'>
                    {label}
                  </p>
                  <p className='text-sm text-text-primary font-medium'>
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Tools card */}
            <div className='bg-bg-card border border-border rounded-xl p-6'>
              <p className='font-mono text-[0.65rem] uppercase tracking-widest text-text-muted mb-4'>
                Tools Used
              </p>
              <div className='flex flex-wrap gap-2'>
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className='font-mono text-[0.72rem] px-3 py-1.5 rounded-sm border cursor-default'
                    style={{
                      color,
                      borderColor: `${color}40`,
                      background: `${color}10`,
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Links card */}
            <div className='bg-bg-card border border-border rounded-xl p-6 flex flex-col gap-3'>
              <p className='font-mono text-[0.65rem] uppercase tracking-widest text-text-muted mb-1'>
                Links
              </p>

              {project.previewUrl ? (
                <Link
                  href={project.previewUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-center justify-between gap-3 px-4 py-3 rounded-md border transition-all duration-200 hover:-translate-y-0.5'
                  style={{
                    background: `${color}10`,
                    borderColor: `${color}40`,
                  }}
                >
                  <div className='flex items-center gap-2.5'>
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke={color}
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
                      <polyline points='15 3 21 3 21 9' />
                      <line x1='10' y1='14' x2='21' y2='3' />
                    </svg>
                    <span className='font-mono text-xs' style={{ color }}>
                      Live Preview
                    </span>
                  </div>
                  <svg
                    className='transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                    width='12'
                    height='12'
                    viewBox='0 0 16 16'
                    fill='none'
                  >
                    <path
                      d='M3 13L13 3M13 3H7M13 3v6'
                      stroke={color}
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </Link>
              ) : (
                <div className='flex items-center gap-2.5 px-4 py-3 rounded-md border border-border bg-white/[0.02] opacity-50 cursor-not-allowed'>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='text-text-muted'
                  >
                    <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
                    <polyline points='15 3 21 3 21 9' />
                    <line x1='10' y1='14' x2='21' y2='3' />
                  </svg>
                  <span className='font-mono text-xs text-text-muted'>
                    No live preview
                  </span>
                </div>
              )}

              {project.githubUrl ? (
                <Link
                  href={project.githubUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-center justify-between gap-3 px-4 py-3 rounded-md border border-border bg-white/[0.02] transition-all duration-200 hover:border-border-bright hover:-translate-y-0.5'
                >
                  <div className='flex items-center gap-2.5'>
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      className='text-text-secondary'
                    >
                      <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
                    </svg>
                    <span className='font-mono text-xs text-text-secondary'>
                      GitHub Repo
                    </span>
                  </div>
                  <svg
                    className='text-text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                    width='12'
                    height='12'
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
                </Link>
              ) : (
                <div className='flex items-center gap-2.5 px-4 py-3 rounded-md border border-border bg-white/[0.02] opacity-50 cursor-not-allowed'>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='text-text-muted'
                  >
                    <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
                  </svg>
                  <span className='font-mono text-xs text-text-muted'>
                    Private repo
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── About this project ── */}
        <div className='border-t border-border pt-14 mb-16' data-aos='fade-up'>
          <div className='flex items-center gap-3 mb-8'>
            <span className='w-8 h-px' style={{ background: color }} />
            <span
              className='font-mono text-xs uppercase tracking-[0.15em]'
              style={{ color }}
            >
              About this project
            </span>
          </div>
          <div className='max-w-3xl flex flex-col gap-5'>
            {project.description.map((para, i) => (
              <p
                key={i}
                className='text-text-secondary text-base leading-[1.85]'
                data-aos='fade-up'
                data-aos-delay={i * 80}
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* ── Prev / Next ── */}
        <div className='border-t border-border pt-10' data-aos='fade-up'>
          <p className='font-mono text-[0.65rem] uppercase tracking-widest text-text-muted mb-6 text-center'>
            More Projects
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className='group flex items-center gap-4 bg-bg-card border border-border rounded-lg p-5 transition-all duration-200 hover:border-border-bright hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]'
              >
                <svg
                  className='flex-shrink-0 text-text-muted transition-transform duration-200 group-hover:-translate-x-1'
                  width='18'
                  height='18'
                  viewBox='0 0 16 16'
                  fill='none'
                >
                  <path
                    d='M13 8H3M7 4l-4 4 4 4'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <div>
                  <p className='font-mono text-[0.6rem] uppercase tracking-widest text-text-muted mb-0.5'>
                    Previous
                  </p>
                  <p className='font-display font-semibold text-sm text-text-primary'>
                    {prev.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className='group flex items-center justify-end gap-4 bg-bg-card border border-border rounded-lg p-5 transition-all duration-200 hover:border-border-bright hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]'
              >
                <div className='text-right'>
                  <p className='font-mono text-[0.6rem] uppercase tracking-widest text-text-muted mb-0.5'>
                    Next
                  </p>
                  <p className='font-display font-semibold text-sm text-text-primary'>
                    {next.title}
                  </p>
                </div>
                <svg
                  className='flex-shrink-0 text-text-muted transition-transform duration-200 group-hover:translate-x-1'
                  width='18'
                  height='18'
                  viewBox='0 0 16 16'
                  fill='none'
                >
                  <path
                    d='M3 8h10M9 4l4 4-4 4'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
