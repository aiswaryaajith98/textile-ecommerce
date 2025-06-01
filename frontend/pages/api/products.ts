import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const products = await prisma.product.findMany();
    return res.status(200).json(products);
  }
  if (req.method === 'POST') {
    const { name, description, price, imageUrl, stock } = req.body;
    const product = await prisma.product.create({
      data: { name, description, price, imageUrl, stock },
    });
    return res.status(201).json(product);
  }
  res.status(405).json({ error: 'Method not allowed' });
}
