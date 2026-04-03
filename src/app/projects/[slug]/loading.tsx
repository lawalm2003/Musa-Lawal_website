// app/projects/[slug]/loading.tsx

import React from 'react';

interface SkeletonProps {
  className?: string;
  style?: React.CSSProperties;
}

function Skeleton({ className, style }: SkeletonProps) {
  return (
    <div
      className={`rounded-md bg-bg-card relative overflow-hidden ${className ?? ''}`}
      style={style}
    >
      <div
        className='absolute inset-0'
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)',
          animation: 'skeletonShimmer 1.6s ease-in-out infinite',
        }}
      />
    </div>
  );
}

export default function ProjectLoading() {
  return (
    <div className='min-h-screen bg-bg text-text-primary relative overflow-x-hidden'>
      {/* Grid background */}
      <div
        className='fixed inset-0 pointer-events-none z-0'
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
          background:
            'radial-gradient(ellipse at center, rgba(127,255,110,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className='relative z-10 max-w-6xl mx-auto px-6 md:px-10 py-10 pb-24'>
        {/* ── Top bar skeleton ── */}
        <div className='flex items-center justify-between mb-12'>
          <Skeleton className='w-24 h-9' />
          <div className='flex items-center gap-2'>
            <Skeleton className='w-20 h-7 rounded-full' />
            <Skeleton className='w-20 h-7 rounded-full' />
          </div>
        </div>

        {/* ── Title block skeleton ── */}
        <div className='mb-12 flex flex-col gap-4'>
          <Skeleton className='w-28 h-4' />
          <Skeleton className='w-3/4 h-16' />
          <Skeleton className='w-1/2 h-6' />
        </div>

        {/* ── Main grid skeleton ── */}
        <div className='grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 mb-16'>
          {/* Gallery skeleton */}
          <div className='flex flex-col gap-4'>
            <Skeleton
              className='w-full rounded-xl'
              style={{ aspectRatio: '16/9' }}
            />
            <div className='flex gap-3'>
              {[0, 1, 2].map((i) => (
                <Skeleton
                  key={i}
                  className='flex-shrink-0 w-20 rounded-md'
                  style={{ aspectRatio: '16/9' }}
                />
              ))}
            </div>
          </div>

          {/* Sidebar skeleton */}
          <div className='flex flex-col gap-5'>
            {/* Meta card */}
            <div className='bg-bg-card border border-border rounded-xl p-6 flex flex-col gap-5'>
              {[72, 56, 40].map((w, i) => (
                <div key={i} className='flex flex-col gap-1.5'>
                  <Skeleton className='h-3 w-16' />
                  <Skeleton className='h-4' style={{ width: `${w}px` }} />
                </div>
              ))}
            </div>

            {/* Tools card */}
            <div className='bg-bg-card border border-border rounded-xl p-6'>
              <Skeleton className='h-3 w-20 mb-4' />
              <div className='flex flex-wrap gap-2'>
                {[60, 72, 48, 64, 56].map((w, i) => (
                  <Skeleton
                    key={i}
                    className='h-7 rounded-sm'
                    style={{ width: `${w}px` }}
                  />
                ))}
              </div>
            </div>

            {/* Links card */}
            <div className='bg-bg-card border border-border rounded-xl p-6 flex flex-col gap-3'>
              <Skeleton className='h-3 w-12 mb-1' />
              <Skeleton className='h-11 w-full rounded-md' />
              <Skeleton className='h-11 w-full rounded-md' />
            </div>
          </div>
        </div>

        {/* ── About section skeleton ── */}
        <div className='border-t border-border pt-14 mb-16'>
          <div className='flex items-center gap-3 mb-8'>
            <Skeleton className='w-8 h-px' />
            <Skeleton className='w-36 h-3' />
          </div>
          <div className='max-w-3xl flex flex-col gap-4'>
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-4 w-11/12' />
            <Skeleton className='h-4 w-4/5' />
            <div className='pt-2' />
            <Skeleton className='h-4 w-full' />
            <Skeleton className='h-4 w-10/12' />
            <Skeleton className='h-4 w-3/4' />
          </div>
        </div>

        {/* ── Prev / Next skeleton ── */}
        <div className='border-t border-border pt-10'>
          <Skeleton className='h-3 w-24 mx-auto mb-6' />
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <Skeleton className='h-[68px] rounded-lg' />
            <Skeleton className='h-[68px] rounded-lg' />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes skeletonShimmer {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(100%);  }
        }
      `}</style>
    </div>
  );
}
