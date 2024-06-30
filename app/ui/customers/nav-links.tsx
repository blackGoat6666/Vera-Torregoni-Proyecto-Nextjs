'use client';
import {
  ShoppingCartIcon,
  UserIcon,
  QuestionMarkCircleIcon,
  HomeIcon,
  BuildingStorefrontIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'LogIn', href: '/login', icon: UserIcon },
    { name: 'Home', href: '/', icon:HomeIcon },
    { name: 'Productos', href: '/productos', icon:BuildingStorefrontIcon },
    { name: 'Carrito', href: '/cart', icon: ShoppingCartIcon },
    { name: 'Info', href: '/help', icon: QuestionMarkCircleIcon },

  
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex items-center justify-center h-12 w-12 mx-auto rounded-full bg-gray-50 hover:bg-sky-100 hover:text-green-600',
              {
                '': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
          </Link>
        );
      })}
    </>
  );
}
