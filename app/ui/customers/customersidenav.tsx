import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import { HomeIcon, UserIcon, CogIcon } from '@heroicons/react/24/outline'; // Importa íconos válidos

export default function CustomSideNav() {
  return (
    <div className="fixed right-0 top-0 h-full w-1/12 flex flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <div className="flex flex-col space-y-4">
          <button className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-50 hover:bg-sky-100 hover:text-blue-600">
            <HomeIcon className="w-6" />
          </button>
          <button className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-50 hover:bg-sky-100 hover:text-blue-600">
            <UserIcon className="w-6" />
          </button>
          <button className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-50 hover:bg-sky-100 hover:text-blue-600">
            <CogIcon className="w-6" />
          </button>
        </div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
