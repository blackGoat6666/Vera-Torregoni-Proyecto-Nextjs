import Image from 'next/image';
import { fetchFilteredProducts } from '@/app/lib/data';
import { PencilSquareIcon, PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { DeleteProduct } from './products-buttons';

export default async function AdminProductsGrid({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
})  {
  const products = await fetchFilteredProducts(query, currentPage);

  return (   
    <div style={{ marginRight: '15px', marginLeft:'-55px' }} className="container mx-auto px-4 pt-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
        <Link href="/admin/productos/create" className="group p-5 bg-gray-100 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-all duration-300">
          {/* Tarjeta de Nuevo Producto */}
          <div className="flex flex-col items-center justify-center">
            <PlusIcon className='h-13 w-13 text-gray-600 mb-2'/>
            <span className="text-2xl text-gray-600">Nuevo Producto</span>
          </div>
        </Link>
        
        {products.map((product) => (
          <a key={product.id} className="group p-5 bg-gray-100 rounded-lg flex flex-col items-center justify-between">
            <div className="aspect-w-1 aspect-h-1 w-full">
              <Image
                src={product.image_src}
                alt={product.image_alt}
                layout="responsive"
                width={500}
                height={500}
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col items-center justify-center h-40 sm:h-48">
              <h3 style={{fontWeight: 'bold'}} className="mt-4 text-lg text-bold text-center">{product.name}</h3>
              <p className="mt-1 text-lg text-gray-900 text-center">Precio: ${product.price}</p>
              <p className="mt-1 text-lg text-gray-600 text-center">{product.description}</p>
            </div>
            <div className="flex items-center justify-center space-x-4 mt-4">
              <DeleteProduct id={product.id}/>
              <Link href={`/admin/productos/${product.id}/edit`} className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-50 hover:bg-sky-100 hover:text-green-600">
                <PencilSquareIcon className="w-6" />
              </Link>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
