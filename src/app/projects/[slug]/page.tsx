import { notFound } from 'next/navigation';
import { getProject, projects } from '@/util/projectData';
import ProjectDetail from './ProjectDetail';

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = true;

interface PageProps {
  params: { slug: string };
}

export default async function ProjectPage({ params }: any) {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) return notFound();

  return <ProjectDetail project={project} />;
}
