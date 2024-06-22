import mercadopago from 'mercadopago';

mercadopago.configurations.setAccessToken(process.env.MERCADOPAGO_ACCESS_TOKEN);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { product } = req.body;

      const preference = {
        items: [
          {
            title: product.name,
            quantity: 1,
            unit_price: product.price,
          },
        ],
        back_urls: {
          success: 'https://your-success-url.com',
          failure: 'https://your-failure-url.com',
          pending: 'https://your-pending-url.com',
        },
        auto_return: 'approved',
      };

      const response = await mercadopago.preferences.create(preference);
      res.status(200).json({ init_point: response.body.init_point });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
