
"use client";
// components/MercadoPagoButton.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from '@/app/lib/definitions';

interface MercadoPagoButtonProps {
    product: Product;
}

const MercadoPagoButton = ({ product }: MercadoPagoButtonProps) => {
    const [url, setUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const generateLink = async () => {
            setLoading(true);

            try {
                // Validación y transformación del precio del producto
                let price = parseFloat(product.price.replace('$', ''));

                if (isNaN(price)) {
                    throw new Error('El precio del producto no es válido.');
                }

                const { data } = await axios.post("/api/checkout", {
                    product: {
                        ...product,
                        price: price
                    },
                });

                setUrl(data.url);
            } catch (error) {
                console.error(error);
                // Manejo del error aquí (por ejemplo, mostrar un mensaje al usuario)
            }

            setLoading(false);
        };

        generateLink();
    }, [product]);

    return (
        <div className="flex justify-center" style={{ marginTop: "10px" }}>
            {loading ? (
                <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300">
                    Cargando...
                </button>
            ) : (
                <a
                    href={url || '#'}  // Evita el error de intentar abrir una URL nula
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300 margin-top: 5px"
                >
                    Comprar ahora
                </a>
            )}
        </div>
    );
};

export default MercadoPagoButton;
