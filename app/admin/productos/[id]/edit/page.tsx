import { fetchProductById } from "@/app/lib/data";
import EditProductForm from "@/app/ui/admin/edit-product-form";
import { notFound } from "next/dist/client/components/not-found";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [product] = await Promise.all([
    fetchProductById(id),
  ]);
  if (!product) {
    notFound();
  }
  return (
    <div className='flex w-full'>
      <EditProductForm product={product} />
    </div>
  );
}
