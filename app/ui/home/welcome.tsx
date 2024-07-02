// components/VeganBanner.tsx
import React from 'react';

export default function Welcome() {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/animalitos.jpeg')" }}>
      <div className="flex items-center justify-center h-full bg-white bg-opacity-70 p-6 rounded-lg shadow-lg max-w-lg mx-auto text-center">
        <div>
          <h1 className="text-3xl font-bold mb-4">Come vegano, come sano</h1>
          <p className="text-xl">Bienvenido a tienda naturista Hola Vegan</p>
        </div>
      </div>
    </div>
  );
};

