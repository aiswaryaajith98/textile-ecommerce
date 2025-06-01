import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const orders = await prisma.order.findMany({ include: { orderItems: true } });
    return res.status(200).json(orders);
  }
  if (req.method === 'POST') {
    const { userId, items, total, shippingAddress } = req.body;
    const order = await prisma.order.create({
      data: {
        userId,
        total,
        shippingAddress,
        orderItems: {
          create: items.map((item: any) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: { orderItems: true },
    });
    return res.status(201).json(order);
  }
  res.status(405).json({ error: 'Method not allowed' });
}
