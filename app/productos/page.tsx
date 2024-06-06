import HolaVegan from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { inter, lusitana } from '@/app/ui/fonts';
import CustomSideNav from '@/app/ui/customers/customersidenav';
import Header from '@/app/ui/header';
import ProductsGrid from '@/app/ui/products/products-grid';



export default function Page() {
  return (
    <div className="flex flex-row">
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 basis-10/12">
        <Header />
        <ProductsGrid />
      </div>
      <div className='basis-1/12'>
        <CustomSideNav />
      </div>
    </div>
  );
}
