import { deleteProduct } from "@/app/lib/actions";
import { TrashIcon } from "@heroicons/react/20/solid";

export function DeleteProduct({ id }: { id: string }) {
    const deleteProductWithId = deleteProduct.bind(null, id);
   
    return (
      <form action={deleteProductWithId}>
        <button className="flex items-center justify-center h-12 w-12 mx-auto rounded-full bg-gray-50 hover:bg-sky-100 hover:text-green-600">
              <TrashIcon className="w-6" />
            </button>
      </form>
    );
  }