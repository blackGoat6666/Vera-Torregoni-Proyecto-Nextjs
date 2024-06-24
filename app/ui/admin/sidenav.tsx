import Link from 'next/link';
import NavLinks from '@/app/ui/admin/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div style={{width:'70%'}} className="flex h-full flex-col basis-2/24">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        
      </div>
    </div>
  );
}
