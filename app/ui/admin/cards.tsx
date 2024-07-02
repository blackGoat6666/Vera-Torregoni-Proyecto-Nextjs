import {
  HeartIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchProducts } from '@/app/lib/data';

const iconMap = {
  info: InboxIcon,
  product: HeartIcon,
};

export default async function CardWrapper() {
  const productos = await fetchProducts();
 
  return (
    <>
      <Card title="cantidad de productos" value={productos.length} type="info" />
      <Card title="cantidad de facturas" value={20} type="info" />
      <Card title="Algunos productos" value={productos[0].name} type="product" />
      <Card title="Algunos productos" value={productos[1].name} type="product" />
    </>
  );
}


export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: 'product' | 'info';
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
