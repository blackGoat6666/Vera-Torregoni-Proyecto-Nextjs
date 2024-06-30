import { fetchFilteredProducts } from '@/app/lib/data';
import ProductCard from './productCard';
import React from 'react';




  export default async function ProductsGrid({
    query,
    currentPage,
  }: {
    query: string;
    currentPage: number;
  }) {
    const products = await fetchFilteredProducts(query, currentPage);
    return (   
      <div style={{ marginRight: '95px',  marginLeft: '20px' }}>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 p-2 pt-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }