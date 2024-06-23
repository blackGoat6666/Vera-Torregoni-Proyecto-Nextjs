import Image from 'next/image';
import { lusitana } from '../fonts';
import { fetchProducts } from '@/app/lib/data';
import { TrashIcon, PencilSquareIcon, PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { DeleteProduct } from './products-buttons';

export default async function AdminProductsGrid() {
  const products = await fetchProducts();
  return (   
    <div>
      {/* <div className="flex rounded-lg p-3 md:overflow-y-auto md:p-6 w-full bg-gradient-to-r from-lime-400 to-pastelGreen justify-center hover:from-lime-300 hover:to-pastelGreen transition-all duration-300">
        <h2 className={`${lusitana.className} text-5xl font-bold tracking-tight text-center text-white`}>
          Productos
        </h2>
      </div> */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 p-2 pt-8">
        <Link href="/admin/productos/create" className="group p-5 bg-gray-100 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-200 transition-all duration-300">
        {/* Tarjeta de Nuevo Producto */}
          <div className="flex flex-col items-center justify-center">
            <PlusIcon className='h-13 w-13 text-gray-600 mb-2'/>
            <span className="text-2xl text-gray-600">Nuevo Producto</span>
          </div>
        </Link>
        
        {products.map((product) => (
          <a key={product.id} className="group p-5 bg-gray-100 rounded-lg">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden xl:aspect-h-8 xl:aspect-w-7">
              <Image
                className='p-10'
                src={product.image_src}
                alt={product.image_alt}
                width={500}
                height={300}
              />
            </div>
            <h3 className="mt-4 text-lg text-bold text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg text-gray-900">Precio: {product.price}</p>
            <p className="mt-1 text-lg text-gray-600">{product.description}</p>
            <DeleteProduct id={product.id}/>
            <Link href={`/admin/productos/${product.id}/edit`} className="flex items-center justify-center h-12 w-12 mx-auto rounded-full bg-gray-50 hover:bg-sky-100 hover:text-green-600">
              <PencilSquareIcon className="w-6" />
            </Link>
          </a>
        ))}
      </div>
    </div>
  );
}
