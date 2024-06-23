
"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { Product } from '@/app/lib/definitions';

interface MercadoPagoButtonProps {
    product: Product;
}

const MercadoPagoButton = ({ product }: MercadoPagoButtonProps) => {
    const [quantity, setQuantity] = useState<number>(1); // Estado para la cantidad de productos

    // Función para manejar el incremento de la cantidad
    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    // Función para manejar la resta de la cantidad
    const decrementQuantity = () => {
        if (quantity > 1) { // Asegura que la cantidad no sea menor que 1
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    // Calcula el precio total basado en la cantidad seleccionada
    const totalPrice = () => {
        let price = parseFloat(product.price.replace('$', ''));
        if (isNaN(price)) {
            throw new Error('El precio del producto no es válido.');
        }
        return price * quantity;
    };

    // Función para generar el enlace de pago
    const generateLink = async () => {
        try {
            const { data } = await axios.post("/api/checkout", {
                product: {
                    ...product,
                    price: totalPrice(),
                    quantity: quantity
                },
            });

            window.open(data.url, '_blank'); // Abre el enlace en una nueva pestaña
        } catch (error) {
            console.error(error);
            // Manejo del error aquí (por ejemplo, mostrar un mensaje al usuario)
        }
    };

    return (
        <div className="flex flex-col items-center justify-center" style={{ marginTop: "10px" }}>
            <div className="flex items-center mb-4">
            <button
             onClick={decrementQuantity}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors duration-300 mr-2"
            >
                 -
            </button>
            <span className="text-xl font-bold">{quantity}</span>
            <button
            onClick={incrementQuantity}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors duration-300 ml-2"
            >
                +
            </button>

            </div>
            <button
                onClick={generateLink}
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
                {`Comprar ahora ($${totalPrice()})`}
            </button>
        </div>
    );
};

export default MercadoPagoButton;
