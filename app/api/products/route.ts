import { fetchFirstTwentyProducts } from "@/app/lib/data";


export async function GET() {
  try {
    // Assuming id is the query parameter you want to search for
    const currentPage = 1; 
    const products = await fetchFirstTwentyProducts();

    return new Response(JSON.stringify({ products }), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return new Response('Failed to fetch products', { status: 500 });
  }
}
