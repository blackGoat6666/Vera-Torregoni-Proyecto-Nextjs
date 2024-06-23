import Link from 'next/link';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
 
export default function NotFound() {
  return (
    <main className="flex w-full h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>El producto no se encontro.</p>
      <Link
        href="/admin/productos"
        className="mt-4 rounded-lg bg-green-500 px-4 py-2 text-sm text-white transition-colors hover:bg-green-400"
      >
        Volver
      </Link>
    </main>
  );
}