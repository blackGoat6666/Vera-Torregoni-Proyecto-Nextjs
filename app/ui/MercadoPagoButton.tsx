"use client";
import React from 'react';
import axios from 'axios';

interface MercadoPagoButtonProps {
    price: number;
}

const MercadoPagoButton = ({ price }: MercadoPagoButtonProps) => {
    // Función para generar el enlace de pago
    const generateLink = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault(); // Previene el comportamiento predeterminado del botón
        try {
            const { data } = await axios.post("/api/checkout", {
                price: price,
            });

            window.open(data.url, '_blank'); // Abre el enlace en una nueva pestaña
        } catch (error) {
            console.error(error);
            // Manejo del error aquí (por ejemplo, mostrar un mensaje al usuario)
        }
    };

    return (
        <div className="flex flex-col items-center justify-center" style={{ marginTop: "10px" }}>
            <div className="price text-xl font-bold mb-4">
                Precio: ${price}
            </div>
            <button
                onClick={generateLink}
                className="bg-pastelGreen text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
                Comprar ahora
            </button>
        </div>
    );
};

export default MercadoPagoButton;
