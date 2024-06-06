import { inter, lusitana } from '@/app/ui/fonts';

export default function Header() {
  return (
    <div className="flex rounded-lg p-6 md:overflow-y-auto md:p-12 w-full bg-gradient-to-r from-lime-400 to-pastelGreen justify-center hover:from-lime-300 hover:to-pastelGreen transition-all duration-300">
      <h2 className={`${lusitana.className} text-5xl font-bold tracking-tight text-center text-white`}>
        Products
      </h2>
    </div>
  );
}
