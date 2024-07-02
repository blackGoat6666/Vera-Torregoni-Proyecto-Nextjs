'use client'
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '@/app/redux/slices/cartSlice';
import MercadoPagoButton from '../MercadoPagoButton';


interface CartItem {
    id: string;
    name: string;
    qty: number;
    price: number;
}

export function Cart() {
    const cartItems = useSelector(selectCartItems) as CartItem[];
    const totalPrice = useSelector(selectCartTotal) as number;

    // Filtrar los elementos del carrito cuya cantidad sea mayor que cero
    const filteredCartItems = cartItems.filter(item => item.qty > 0);

    return (
        <div className="w-3/4 mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
            {filteredCartItems.length === 0 ? (
                <p className="text-gray-600">El carrito está vacío</p>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {filteredCartItems.map((item) => (
                        <div key={item.id} className="bg-gray-300 rounded-lg p-4 flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <p className="text-gray-600">Cantidad: {item.qty}</p>
                                <p className="text-gray-600">Precio unitario: ${item.price}</p>
                            </div>
                            <p className="text-lg font-bold">${item.qty * item.price}</p>
                        </div>
                    ))}
                </div>
            )}
            {filteredCartItems.length > 0 && (
                <div className="mt-4">
                    <h3 className="text-xl font-semibold">Total: ${totalPrice}</h3>
                    <MercadoPagoButton price={Number(totalPrice)} />
                </div>
            )}
        </div>
    );
}
