// app/components/Producto.tsx

"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Product } from '@/app/lib/definitions';
import MercadoPagoButton from '../MercadoPagoButton';
// import { formatNumber } from '../utils/formatNumber'; // Asegúrate de importar formatNumber si lo necesitas

interface NotificationType {
  isOpen: boolean;
  type: "approved" | "failure" | null;
  content: string;
}

const Producto = () => {
  const initialProduct: Product = {
    id: 1,
    name: "Black Friday Product",
    price: 100,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image_src: "/path/to/image.jpg",
    image_alt: "Product Image"
  };

  const [product, setProduct] = useState<Product>(initialProduct);
  const [notification, setNotification] = useState<NotificationType>({
    isOpen: false,
    type: null,
    content: "",
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("status");

    if (status === "approved") {
      setNotification({
        content: "Pago aprobado",
        isOpen: true,
        type: "approved"
      });
    } else if (status === "failure") {
      setNotification({
        content: "Pago fallido",
        isOpen: true,
        type: "failure"
      });
    }

    setTimeout(() => {
      setNotification({
        isOpen: false,
        type: null,
        content: ""
      });
    }, 5000);
  }, []);

  return (
    <main>
      <div>
        <Image src={product.image_src} alt={product.image_alt} width={360} height={450} />
      </div>
      <div>
        <h2>{product.name}</h2>
        <h3>{(product.price)}</h3>
      </div>
      <div>
        <span>Lo que tienes que saber de este producto:</span>
        <ul>
          {product.description.split('.').map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <MercadoPagoButton product={product} />
      </div>
      {notification.isOpen && (
        <div className="">
          <div
            className=""
            style={{
              backgroundColor: notification.type === "approved" ? "#00cc99" : "#ee4646",
            }}
          >
            <p>{notification.type}</p>
          </div>
          <p>{notification.content}</p>
        </div>
      )}
    </main>
  );
}

export default Producto;
