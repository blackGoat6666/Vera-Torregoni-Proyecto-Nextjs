import { PowerIcon, UserIcon, ShoppingCartIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

import { signOut } from '@/auth';
import NavLinks from './nav-links';

export default function CustomSideNav() {
  return (
    <div className="fixed grow-0 right-0 h-full w-1/12 flex flex-col space-y-10 py-10">
        <NavLinks/>
  
    </div>
  );
}
