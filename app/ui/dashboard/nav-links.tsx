'use client';
import {
  UserGroupIcon,
  HomeIcon,
  ChartBarIcon,
  DocumentDuplicateIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard/home', icon: HomeIcon },
  { name: 'Dashboard', href: '/dashboard', icon: ChartBarIcon },
  {
    name: 'Facturas',
    href: '/dashboard/facturas',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Clientes', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Productos', href: '/dashboard/products', icon:ShoppingCartIcon },
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
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-pastelGreen-dark md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-pastelGreen-dark': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
