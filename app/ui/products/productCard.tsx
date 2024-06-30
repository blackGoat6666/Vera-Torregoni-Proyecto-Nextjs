'use client'
import Image from 'next/image';
import MercadoPagoButton from '../MercadoPagoButton';
import { Product } from '@/app/lib/definitions';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectCartItems } from '@/app/redux/slices/cartSlice';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';

export default function ProductCard({ product }: {
  product: Product;
}) {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(product));
  };

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(product));
  };

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
      <h3 style={{ fontWeight: 'bold' }} className="mt-4 text-lg text-bold">{product.name}</h3>
      <p className="mt-1 text-lg text-gray-900">Precio: ${product.price}</p>
      <p style={{ height: '100px', textAlign: 'justify' }} className="text-justify mt-1 text-lg text-gray-600">{product.description}</p>
      <div className='flex items-center justify-between p-3'>
        <div className='flex items-center'>
          <button
            className="w-10 h-10 bg-gray-50 rounded-full text-sm font-medium hover:bg-sky-100 hover:text-green-600"
            onClick={addToCartHandler}>
            <PlusIcon className="w-6 h-6" />
          </button>
          <span className='mx-3'>{}</span>
          <button
            className="w-10 h-10 bg-gray-50 rounded-full text-sm font-medium hover:bg-sky-100 hover:text-green-600"
            onClick={removeFromCartHandler}>
            <MinusIcon className="w-6 h-6" />
          </button>
        </div>
        <MercadoPagoButton product={product} />
      </div>
    </a>
  );
}
