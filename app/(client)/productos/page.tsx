
import ProductsGrid from '../../ui/products/products-grid';
import Search from '../../ui/search';
import { fetchProductsPages } from '../../lib/data';
import Pagination from '../../ui/pagination';



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
          <div className="mt-5 flex w-full justify-center p-10">
            <Pagination totalPages={totalPages} />
          </div>
    </div>
  );
}
