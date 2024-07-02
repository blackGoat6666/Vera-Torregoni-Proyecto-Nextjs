import CardWrapper from '@/app/ui/admin/cards';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { CardsSkeleton } from '@/app/ui/skeletons';

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-8">
        <div className="bg-gray-100 rounded-lg p-4 hover:bg-blue-200 hover:text-green-500 transition-colors duration-300">
          <p className=" text-xl font-semibold text-center">
            ¡Puedes gestionar todos tus productos en un solo espacio!
            Añade, modifica y elimina tus productos en la tienda virtual.
          </p>
        </div>
      </div>
    </main>
  );
}
