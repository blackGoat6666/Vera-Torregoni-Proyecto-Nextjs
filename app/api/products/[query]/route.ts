import { fetchProductsQueryAPI } from "@/app/lib/data";

export async function GET(request: Request) {
  try {
    const { pathname } = new URL(request.url);
    const query = pathname.split('/').pop();
    console.log(query)

    if (query) {
      const products = await fetchProductsQueryAPI(query);
      return new Response(JSON.stringify({ products }), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      return new Response(JSON.stringify({ message: 'No query parameter provided' }), {
        headers: {
          'Content-Type': 'application/json',
        },
        status: 400,
      });
    }
  } catch (error) {
    console.error('Error fetching products:', error);
    return new Response('Failed to fetch products', { status: 500 });
  }
}
