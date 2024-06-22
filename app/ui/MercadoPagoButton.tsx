"use client";

import React, { useState, useEffect } from 'react'
import { Product } from '@/app/lib/definitions';

import axios from 'axios';

interface MercadoPagoButtonProps {
    product: Product;
}

const MercadoPagoButton = ({ product }: MercadoPagoButtonProps) => {
    const [url, setUrl] = useState<null | any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const generateLink = async () => {
            setLoading(true)

            try {
                const { data: preference } = await axios.post("/api/checkout", {
                    product
                });

                setUrl(preference.url)
            } catch (error) {
                console.log(error)
            }
            setLoading(false);
        };

        generateLink();
    }, [product])


    return (
        <div className="flex justify-center" style={{ marginTop: "10px" }}>
        {loading ? (
            <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300">
                Cargando...
            </button>
        ) : (
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300 margin-top: 5px"
            >
                Comprar ahora
            </a>
        )}
        </div>
    )
}

export default MercadoPagoButton