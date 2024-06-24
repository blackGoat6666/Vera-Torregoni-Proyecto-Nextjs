import Image from 'next/image';
import { lusitana } from '../fonts';
import { fetchFilteredProducts } from '@/app/lib/data';
import MercadoPagoButton from '../MercadoPagoButton';



  export default async function ProductsGrid({
    query,
    currentPage,
  }: {
    query: string;
    currentPage: number;
  })  {
    const products = await fetchFilteredProducts(query, currentPage);
    return (   
      <div style={{ marginRight: '95px',  marginLeft: '20px' }}>
        {/* <div className="flex rounded-lg p-3 md:overflow-y-auto md:p-6 w-full bg-gradient-to-r from-lime-400 to-pastelGreen justify-center hover:from-lime-300 hover:to-pastelGreen transition-all duration-300">
          <h2 className={`${lusitana.className} text-5xl font-bold tracking-tight text-center text-white`}>
            Productos
          </h2>
        </div> */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 p-2 pt-8">
          {products.map((product) => (
            <a key={product.id} href="" className="group p-5 bg-gray-100 rounded-lg ">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  style={{ height: '300px' }}
                  className='p-10'
                  src={product.image_src}
                  alt={product.image_alt}
                  width={500}
                  height={300}
                />
              </div>
              <h3 style={{fontWeight: 'bold'}} className="mt-4 text-lg text-bold ">{product.name}</h3>
              <p className="mt-1 text-lg text-gray-900">Precio: ${product.price}</p>
              <p style={{height: '100px',textAlign: 'justify'}} className="text-justify mt-1 text-lg text-gray-600">{product.description}</p>
              <MercadoPagoButton product={product} />
            </a>
          ))}
        </div>
      </div>
    )
  }
