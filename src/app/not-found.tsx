// app/not-found.tsx
// Place this file at: app/not-found.tsx
// Next.js automatically renders this for all 404s

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const GLITCH_CHARS = '!@#$%^&*<>[]{}|\\/?~`';

function useGlitch(text: string, active: boolean) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!active) {
      setDisplay(text);
      return;
    }
    let frame = 0;
    const totalFrames = 18;
    const interval = setInterval(() => {
      if (frame >= totalFrames) {
        setDisplay(text);
        clearInterval(interval);
        return;
      }
      const progress = frame / totalFrames;
      setDisplay(
        text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' ';
            if (i / text.length < progress) return char;
            return GLITCH_CHARS[
              Math.floor(Math.random() * GLITCH_CHARS.length)
            ];
          })
          .join(''),
      );
      frame++;
    }, 40);
    return () => clearInterval(interval);
  }, [active, text]);

  return display;
}

const terminalLines = [
  {
    delay: 0,
    text: '> initializing route resolver...',
    color: 'text-text-muted',
  },
  {
    delay: 600,
    text: '> scanning page registry...        [DONE]',
    color: 'text-text-muted',
  },
  {
    delay: 1200,
    text: '> matching path to known routes...',
    color: 'text-text-muted',
  },
  {
    delay: 1900,
    text: '> ERROR: route not found in manifest',
    color: 'text-[#ff6b6b]',
  },
  { delay: 2500, text: '> status_code: 404', color: 'text-[#fbbf24]' },
  {
    delay: 3000,
    text: '> suggestion: navigate back to safety ↓',
    color: 'text-accent',
  },
];

export default function NotFound() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [glitchActive, setGlitchActive] = useState(false);
  const heading = '404';

  useEffect(() => {
    // Reveal terminal lines one by one
    terminalLines.forEach((_, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, terminalLines[i].delay);
    });

    // Trigger glitch on the 404 heading every few seconds
    const glitchLoop = () => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 800);
    };
    const timer = setInterval(glitchLoop, 3500);
    glitchLoop();
    return () => clearInterval(timer);
  }, []);

  const glitchedHeading = useGlitch(heading, glitchActive);

  return (
    <main className='min-h-screen bg-bg text-text-primary font-display flex items-center justify-center px-6 pb-4 relative overflow-hidden'>
      {/* Grid background */}
      <div
        className='fixed inset-0 pointer-events-none z-0'
        style={{
          backgroundImage:
            'linear-gradient(rgba(127,255,110,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(127,255,110,0.02) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial red glow — error vibe */}
      <div
        className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none z-0'
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255,107,107,0.06) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Scanlines overlay */}
      <div
        className='fixed inset-0 pointer-events-none z-10 opacity-[0.03]'
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)',
        }}
      />

      <div className='relative z-20 w-full max-w-2xl'>
        {/* ── Big 404 ── */}
        <div className='relative mb-2 select-none'>
          {/* Ghost / shadow layer for glitch depth */}
          <span
            className='absolute inset-0 font-display font-black leading-none tracking-[-0.06em] pointer-events-none'
            style={{
              fontSize: 'clamp(7rem, 22vw, 14rem)',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(255,107,107,0.25)',
              transform: 'translate(3px, 3px)',
            }}
            aria-hidden
          >
            {glitchedHeading}
          </span>
          <h1
            className='relative font-display font-black leading-none tracking-[-0.06em]'
            style={{
              fontSize: 'clamp(7rem, 22vw, 14rem)',
              color: 'transparent',
              WebkitTextStroke: glitchActive ? '2px #ff6b6b' : '2px #7fff6e',
              transition: 'all 0.1s',
              textShadow: glitchActive
                ? '0 0 40px rgba(255,107,107,0.5), 0 0 80px rgba(255,107,107,0.2)'
                : '0 0 40px rgba(127,255,110,0.3)',
            }}
          >
            {glitchedHeading}
          </h1>
        </div>

        {/* ── Subtitle ── */}
        <p className='font-serif italic text-text-secondary text-xl mb-10 leading-relaxed'>
          {`The page you're looking for doesn't exist`} —{' '}
          <span className='not-italic font-mono text-[0.9em] text-[#fbbf24]'>
            or never did.
          </span>
        </p>

        {/* ── Terminal block ── */}
        <div className='bg-bg-card border border-border rounded-lg overflow-hidden mb-10'>
          {/* Terminal header */}
          <div className='flex items-center gap-2 px-4 py-3 border-b border-border bg-white/[0.02]'>
            <span className='w-2.5 h-2.5 rounded-full bg-[#ff5f57]' />
            <span className='w-2.5 h-2.5 rounded-full bg-[#ffd700]' />
            <span className='w-2.5 h-2.5 rounded-full bg-accent' />
            <span className='font-mono text-[0.7rem] text-text-muted ml-2 tracking-widest'>
              router.log
            </span>
          </div>

          {/* Terminal lines */}
          <div className='p-5 flex flex-col gap-2 min-h-[160px]'>
            {terminalLines.map((line, i) => (
              <div
                key={i}
                className={`font-mono text-[0.8rem] leading-relaxed transition-all duration-300 ${
                  visibleLines.includes(i)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-1'
                } ${line.color}`}
              >
                {line.text}
                {/* Blinking cursor on last visible line */}
                {i === Math.max(...visibleLines) && (
                  <span className='ml-0.5 inline-block w-[7px] h-[14px] bg-accent align-middle animate-pulse' />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Actions ── */}
        <div className='flex items-center gap-4 flex-wrap'>
          <Link
            href='/'
            className='inline-flex items-center gap-2.5 bg-accent text-bg font-display font-bold text-sm uppercase tracking-widest px-7 py-3 rounded-sm transition-all duration-200 hover:bg-[#a8ffaa] hover:shadow-[0_0_30px_rgba(127,255,110,0.4)] hover:-translate-y-px'
          >
            <svg width='14' height='14' viewBox='0 0 16 16' fill='none'>
              <path
                d='M13 8H3M7 4l-4 4 4 4'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
            Back to Home
          </Link>

          <Link
            href='/#projects'
            className='inline-flex items-center gap-2 border border-border-bright text-text-primary font-display font-semibold text-sm uppercase tracking-widest px-7 py-3 rounded-sm transition-all duration-200 hover:border-accent hover:text-accent hover:bg-accent-dim'
          >
            View Projects
          </Link>
        </div>

        {/* ── Bottom status bar ── */}
        <div className='mt-16 pt-6 border-t border-border flex items-center justify-between flex-wrap gap-3'>
          <span className='font-mono text-[0.65rem] text-text-muted uppercase tracking-widest'>
            musa-lawal.dev
          </span>
          <div className='flex items-center gap-2'>
            <span className='w-1.5 h-1.5 rounded-full bg-[#ff6b6b] animate-pulse' />
            <span className='font-mono text-[0.65rem] text-[#ff6b6b] uppercase tracking-widest'>
              404 Not Found
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
