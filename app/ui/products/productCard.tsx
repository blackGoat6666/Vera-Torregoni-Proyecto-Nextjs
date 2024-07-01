'use client'
import Image from 'next/image';
import MercadoPagoButton from '../MercadoPagoButton';
import { Product } from '@/app/lib/definitions';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectCartItems } from '@/app/redux/slices/cartSlice';
import { MinusIcon, PlusIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function ProductCard({ product }: { product: Product }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    
    // Obtener la cantidad del producto en el carrito
    const productInCart = cartItems.find((item: { id: string; }) => item.id === product.id);
    const quantity = productInCart ? productInCart.qty : 0;

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
            <div className='bg-white rounded-lg shadow p-4 flex items-center justify-center'>
                <ShoppingCartIcon className="w-10 h-10 text-gray-500" /> {/* Ícono del carrito de compras */}
                <div className='flex items-center justify-center'>
                    <button
                        className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-full text-sm font-medium hover:bg-sky-100 hover:text-green-600"
                        onClick={addToCartHandler}>
                        <PlusIcon className="w-8 h-8" />
                    </button>
                    <span className='mx-5 text-lg font-bold'>{quantity}</span>
                    <button
                        className="flex items-center justify-center w-12 h-12 bg-gray-50 rounded-full text-sm font-medium hover:bg-sky-100 hover:text-green-600"
                        onClick={removeFromCartHandler}>
                        <MinusIcon className="w-8 h-8" />
                    </button>
                </div>
            </div>
        </a>
    );
}
