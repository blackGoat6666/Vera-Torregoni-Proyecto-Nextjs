'use client'
import Image from 'next/image';
import MercadoPagoButton from '../MercadoPagoButton';
import { Product } from '@/app/lib/definitions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addToCart, hideLoading } from '@/app/redux/slices/cartSlice';

export default function ProductCard({ product }: {
    product: Product;
  }) {
    const dispatch = useDispatch()
    const qty = 1
    const addToCartHandler = () => {
      dispatch(addToCart({...product, qty}))
    }
    return (
      <a key={product.id} href="" className="group p-5 bg-gray-100 rounded-lg">
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
        <h3 style={{fontWeight: 'bold'}} className="mt-4 text-lg text-bold">{product.name}</h3>
        <p className="mt-1 text-lg text-gray-900">Precio: ${product.price}</p>
        <p style={{height: '100px', textAlign: 'justify'}} className="text-justify mt-1 text-lg text-gray-600">{product.description}</p>
        <button  
          className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        onClick={addToCartHandler}>
          Añadir al carrito
        </button>
        <MercadoPagoButton product={product} />
      </a>
    );
  }