'use server';
 
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import fs from 'fs';
import path from 'path';

 
const FormSchemaProduct = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.coerce.number(),
  image: z.any(), //
  imageAlt: z.string(),
});
 
const CreateProduct = FormSchemaProduct.omit({ id: true,});

  
export async function createProduct(formData: FormData) {
  const { name, description, price, image, imageAlt } = CreateProduct.parse({
    name: formData.get('name'),
    description: formData.get('description'),
    price: formData.get('price'),
    image: formData.get('image'),
    imageAlt: formData.get('imageAlt'),
  });

  let imageUrl = '';

  // Save the image locally
  if (image && typeof image !== 'string') {
    const imagePath = path.join(process.cwd(), 'public', 'uploads', image.name);
    const buffer = await image.arrayBuffer();
    fs.writeFileSync(imagePath, Buffer.from(buffer));
    imageUrl = `/uploads/${image.name}`;
  }

  try {
    await sql`
      INSERT INTO products (name, description, price, image_src, image_alt)
      VALUES (${name}, ${description}, ${price}, ${imageUrl}, ${imageAlt})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Product.',
    };
  }
  revalidatePath('/admin/productos');
  redirect('/admin/productos');
}

  export async function updateProduct(id: string, formData: FormData) {
    const { name, description, price, image, imageAlt } = CreateProduct.parse({
      name: formData.get('name'),
      description: formData.get('description'),
      price: formData.get('price'),
      image: formData.get('image'),
      imageAlt: formData.get('imageAlt'),
    });
   
   
    try {
      await sql`
          UPDATE products
          SET name = ${name}, description = ${description}, price = ${price}, image_src = ${image}, image_alt =  ${imageAlt}
          WHERE id = ${id}
        `;
    } catch (error) {
      return { message: 'Database Error: Failed to Update Invoice.' };
    }
   
    revalidatePath('/admin/productos');
    redirect('/admin/productos');
  }

  export async function deleteProduct(id: string) {
    try {
      await sql`DELETE FROM products WHERE id = ${id}`;
      revalidatePath('/admin/productos');
      return { message: 'Deleted Invoice.' };
    } catch (error) {
      return { message: 'Database Error: Failed to Delete Invoice.' };
    }
  }

  export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
      await signIn('credentials', formData);
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    } finally {
      revalidatePath('/admin/dashboard');
      redirect('/admin/dashboard');
    }
  }