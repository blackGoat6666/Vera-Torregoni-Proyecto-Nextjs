import CustomSideNav from '@/app/ui/customers/customersidenav';
import SideNav from '@/app/ui/dashboard/sidenav';
import Header from '@/app/ui/header';
import AdminProductsGrid from '@/app/ui/products/admin-products-grid';
import ProductsGrid from '@/app/ui/products/products-grid';



export default function Page() {
  return (
    <div className='flex w-full'>
        <SideNav />
        <AdminProductsGrid />
    </div>
  );
}
