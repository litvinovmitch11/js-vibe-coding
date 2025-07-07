// src/app/mashups/[id]/page.tsx
import { getMashupById } from '@/entities/mashup/api/mashupService';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { id: string };
}

// Динамическая генерация мета-тегов для SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const mashup = await getMashupById(params.id);
  if (!mashup) {
    return {
      title: 'Mashup Not Found',
    };
  }
  return {
    title: `${mashup.title} by ${mashup.author}`,
    description:
      mashup.description || 'Listen to this mashup on JS Vibe Coding.',
  };
}

export default async function SingleMashupPage({ params }: PageProps) {
  const mashup = await getMashupById(params.id);

  if (!mashup) {
    notFound(); // Показывает страницу 404, если мэшап не найден
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-extrabold">{mashup.title}</h1>
      <p className="text-xl text-gray-500 mt-2 mb-4">By {mashup.author}</p>
      {mashup.isExplicit && (
        <p className="text-red-500 font-bold mb-4">Explicit Content</p>
      )}

      <div className="prose lg:prose-xl mt-8">
        <p>{mashup.description || 'No description provided.'}</p>
      </div>
    </div>
  );
}
