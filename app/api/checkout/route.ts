// app/api/checkout/route.ts

import mercadopago from "mercadopago";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import { NextRequest } from "next/server";

// Configura MercadoPago con tu access token
mercadopago.configure({
    access_token: 'TEST-656420612955807-062118-985a7a80cbc6f8e982d20314d999863f-311684220', // Aquí debes colocar tu access token real
});

const URL = "https://tuweb.vercel.app"; // Reemplaza con tu URL de producción

export async function POST(req: NextRequest) {
    try {
        const { product } = await req.json();
        // Asegurarse de que product.price sea un número
        if (typeof product.price !== 'number') {
            throw new Error('El precio del producto no es válido.');
        }

        const preference: CreatePreferencePayload = {
            items: [
                {
                    title: product.name,
                    unit_price: Number(product.price), // Convertir a número si es necesario
                    quantity: 1,
                },
            ],
            auto_return: "approved",
            back_urls: {
                success: `${URL}`,
                failure: `${URL}`,
            },
            notification_url: `${URL}/api/notify`,
        };

        const response = await mercadopago.preferences.create(preference);

        return new Response(JSON.stringify({ url: response.body.init_point }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({
                message: "Internal Server Error",
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
}
