import CardWrapper from '@/app/ui/admin/cards';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { CardsSkeleton, } from '@/app/ui/skeletons';
 
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
      <p className='text-3xl font-bold w-full align-center text-gray-500 text-center p-15'>
        Podes gestionar Todos tus productos en un solo espacio!
        Suma, modifica y elimina tus productos en la tienda virtual
      </p>
    </main>
  );
}