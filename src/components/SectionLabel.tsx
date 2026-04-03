// components/SectionLabel.tsx

interface SectionLabelProps {
  number: string;
  title: string;
}

export default function SectionLabel({ number, title }: SectionLabelProps) {
  return (
    <div className='flex items-center gap-3 mb-6'>
      <span className='w-8 h-px bg-accent' />
      <span className='font-mono text-accent text-xs uppercase tracking-[0.15em]'>
        {number} — {title}
      </span>
    </div>
  );
}
