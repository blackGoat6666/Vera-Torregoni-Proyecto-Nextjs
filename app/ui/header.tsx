import { inter, lusitana } from '@/app/ui/fonts';

export default function Header() {
  return (
    <div className="flex y-0 p-6 mb-6 md:overflow-y-auto w-full bg-gradient-to-r from-gray-800 to-black justify-center">
      <h2 className={`${lusitana.className} text-green-900 text-3xl font-bold tracking-tight text-center text-white `}>
        Hola Vegan
      </h2>
    </div>
  );
}
