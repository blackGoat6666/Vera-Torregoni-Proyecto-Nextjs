import CustomSideNav from '@/app/ui/customers/customersidenav';
import Header from '@/app/ui/header';
import ProductsGrid from '@/app/ui/products/products-grid';
import SideNav from '../ui/dashboard/sidenav';



export default function Page() {
  return (
    <div className='flex w-full'>
          <ProductsGrid />
    </div>
  );
}
