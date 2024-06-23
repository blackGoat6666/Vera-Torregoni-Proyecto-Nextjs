import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    nombre: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json( {nombre: 'John Doe'});
}