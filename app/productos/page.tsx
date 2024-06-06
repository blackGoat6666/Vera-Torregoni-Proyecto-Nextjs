import HolaVegan from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { inter, lusitana } from '@/app/ui/fonts';
import CustomSideNav from '@/app/ui/customers/customersidenav';
import Header from '@/app/ui/header';
import ProductsGrid from '@/app/ui/products/products-grid';
import SideNav from '../ui/dashboard/sidenav';



export default function Page() {
  return (
    <div className='flex flex-col'>
      <Header />
      <div className="flex flex-row">
        <div className="flex flex-grow-0 basis-2/24">
          <SideNav />
        </div>
        <div className="flex basis-20/24">
          <ProductsGrid />
        </div>
        <div className='flex flex-grow-0 basis-1/24'>
          <CustomSideNav />
        </div>
    </div>
    </div>
  );
}
