import { fetchProductsPages } from '@/app/lib/data';
import AdminProductsGrid from '@/app/ui/admin/admin-products-grid';
import Pagination from '@/app/ui/pagination';
import Search from '@/app/ui/search';



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
          <AdminProductsGrid  query={query} currentPage={currentPage} />
          <div className="mt-5 flex w-full justify-center p-10">
            <Pagination totalPages={totalPages} />
          </div>
    </div>
  );
}