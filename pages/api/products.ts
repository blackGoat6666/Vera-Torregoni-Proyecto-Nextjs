import { NextApiRequest, NextApiResponse } from 'next';
import { fetchProducts } from '../../app/lib/data';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const data = await fetchProducts()
        console.log(data)
        return res.status(200).json(data)
    }
}

export default handler;