import LoginForm from '@/app/ui/login-form';
import { HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';// Importa el ícono de Heroicons

export default function LoginPage() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      <LoginForm />
      <div className="absolute top-0 left-0 m-10">
        <Link href="/" className="flex items-center justify-center w-20 h-20 bg-gray-50 rounded-full text-sm font-medium hover:bg-sky-100 hover:text-green-600">
          <HomeIcon className="w-10 h-10" /> {/* Icono de Home */}
        </Link>
      </div>
    </div>
  );
}
