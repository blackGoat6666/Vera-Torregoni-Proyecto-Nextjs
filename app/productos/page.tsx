import CustomSideNav from '@/app/ui/customers/customersidenav';
import Header from '@/app/ui/header';
import ProductsGrid from '../ui/products/products-grid';
import Search from '../ui/search';
import { fetchProductsPages } from '../lib/data';



export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}){
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchProductsPages(query);
  return (
    <div className='flex flex-col w-full'>
          <div className='w-2/3 p-4 px-10'> <Search placeholder="Search invoices..." /></div>
          <ProductsGrid  query={query} currentPage={currentPage} />
    </div>
  );
}
