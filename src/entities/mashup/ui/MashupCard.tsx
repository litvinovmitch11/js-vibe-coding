// src/entities/mashup/ui/MashupCard.tsx
import Link from 'next/link';
import type { Mashup } from '../model';

interface MashupCardProps {
  mashup: Mashup;
}

export const MashupCard = ({ mashup }: MashupCardProps) => {
  return (
    <Link href={`/mashups/${mashup.id}`}>
      <div className="block p-4 border rounded-lg hover:bg-gray-100 transition-colors">
        <h3 className="font-bold text-xl">{mashup.title}</h3>
        <p className="text-gray-600">by {mashup.author}</p>
        {mashup.isExplicit && (
          <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full mt-2 inline-block">
            Explicit
          </span>
        )}
      </div>
    </Link>
  );
};
