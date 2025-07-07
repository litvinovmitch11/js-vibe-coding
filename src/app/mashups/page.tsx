// src/app/mashups/page.tsx
import { getMashups } from '@/entities/mashup/api/mashupService';
import { MashupCard } from '@/entities/mashup/ui/MashupCard';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function MashupsPage() {
  const mashups = await getMashups();

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">All Mashups</h1>
        <Link href="/mashups/create" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Create Mashup
        </Link>
      </div>

      {mashups.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mashups.map((mashup) => (
            <MashupCard key={mashup.id} mashup={mashup} />
          ))}
        </div>
      ) : (
        <p>No mashups found. Create the first one!</p>
      )}
    </div>
  );
}
