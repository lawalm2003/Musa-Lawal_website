import { ProjectImage } from '@/util/projectData';
import Image from 'next/image';
import { useState } from 'react';

// ─── Gallery ─────────────────────────────────────────────────
interface GalleryProps {
  images: ProjectImage[];
  color: string;
  slug: string;
}

export function Gallery({ images, color, slug }: GalleryProps) {
  const [active, setActive] = useState<number>(0);

  return (
    <div className='flex flex-col gap-4'>
      {/* Hero image */}
      <div
        className='relative w-full rounded-xl overflow-hidden border border-border bg-bg-card'
        style={{ aspectRatio: '16/9' }}
      >
        {images[active]?.src ? (
          <Image
            src={images[active].src}
            alt={images[active].alt}
            fill
            className='object-contain transition-opacity duration-300'
            sizes='(max-width: 768px) 100vw, 70vw'
          />
        ) : (
          <div className='absolute inset-0 flex flex-col items-center justify-center gap-3'>
            <div
              className='w-16 h-16 rounded-full flex items-center justify-center'
              style={{
                background: `${color}15`,
                border: `1px dashed ${color}60`,
              }}
            >
              <svg
                width='28'
                height='28'
                viewBox='0 0 24 24'
                fill='none'
                stroke={color}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <rect x='3' y='3' width='18' height='18' rx='2' />
                <circle cx='8.5' cy='8.5' r='1.5' />
                <path d='m21 15-5-5L5 21' />
              </svg>
            </div>
            <p className='font-mono text-xs text-text-muted tracking-widest uppercase'>
              {images[active]?.alt ?? 'Add your screenshot here'}
            </p>
            <p className='font-mono text-[0.65rem] text-text-muted opacity-60'>
              Drop image in /public/projects/{slug}/
            </p>
          </div>
        )}

        {images.length > 1 && (
          <div className='absolute top-3 right-3 font-mono text-[0.65rem] text-text-muted bg-bg/80 backdrop-blur-md border border-border px-2.5 py-1 rounded-full'>
            {active + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className='flex gap-3 overflow-x-auto pb-1'>
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className='relative flex-shrink-0 w-20 rounded-md overflow-hidden border-2 transition-all duration-200'
              style={{
                aspectRatio: '16/9',
                borderColor: i === active ? color : 'rgba(255,255,255,0.07)',
                boxShadow: i === active ? `0 0 12px ${color}50` : 'none',
              }}
            >
              {img.src ? (
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className='object-cover'
                  sizes='80px'
                />
              ) : (
                <div
                  className='absolute inset-0 flex items-center justify-center'
                  style={{ background: `${color}10` }}
                >
                  <svg
                    width='14'
                    height='14'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke={color}
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <rect x='3' y='3' width='18' height='18' rx='2' />
                    <circle cx='8.5' cy='8.5' r='1.5' />
                    <path d='m21 15-5-5L5 21' />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
