import Image from 'next/image';
import { lusitana } from '../fonts';

  export default function ProductsGrid() {
    return (   
      <div>
        <div className="flex rounded-lg p-3 md:overflow-y-auto md:p-6 w-full bg-gradient-to-r from-lime-400 to-pastelGreen justify-center hover:from-lime-300 hover:to-pastelGreen transition-all duration-300">
          <h2 className={`${lusitana.className} text-5xl font-bold tracking-tight text-center text-white`}>
            Productos
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 p-2 pt-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={500}
                  height={300}
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div>
    )
  }