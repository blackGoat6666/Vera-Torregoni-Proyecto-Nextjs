'use client'
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '@/app/redux/slices/cartSlice';

interface CartItem {
    id: number;
    name: string;
    qty: number;
    price: number;
}

export function Cart() {
    const cartItems = useSelector(selectCartItems) as CartItem[]; // Asegura que cartItems sepa que es un array de CartItem
    const totalPrice = useSelector(selectCartTotal) as number; // Asegura que totalPrice sepa que es un número

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cartItems.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - {item.qty} x ${item.price} = ${item.qty * item.price}
                        </li>
                    ))}
                </ul>
            )}
            <h3>Total: ${totalPrice}</h3>
        </div>
    );
}
