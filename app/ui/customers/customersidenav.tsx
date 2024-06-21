import { PowerIcon, UserIcon, ShoppingCartIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

import { signOut } from '@/auth';
import NavLinks from './nav-links';

export default function CustomSideNav() {
  return (
    <div className="fixed grow-0 right-0 h-full w-1/12 flex flex-col space-y-10 py-10">
        <NavLinks/>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className="flex items-center justify-center h-12 w-12 mx-auto rounded-full bg-gray-50 hover:bg-sky-100 hover:text-green-600">
            <PowerIcon className="w-6" />
          </button>
        </form>
  
    </div>
  );
}
