import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware, notificationHandlerMiddleware } from 'server/middlewares';
import { pizzaShopValidationSchema } from 'validationSchema/pizza-shops';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  const allowed = await prisma.pizza_shop
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  if (!allowed) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  switch (req.method) {
    case 'GET':
      return getPizzaShopById();
    case 'PUT':
      return updatePizzaShopById();
    case 'DELETE':
      return deletePizzaShopById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getPizzaShopById() {
    const data = await prisma.pizza_shop.findFirst(convertQueryToPrismaUtil(req.query, 'pizza_shop'));
    return res.status(200).json(data);
  }

  async function updatePizzaShopById() {
    await pizzaShopValidationSchema.validate(req.body);
    const data = await prisma.pizza_shop.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });
    if (req.body.name) {
      await roqClient.asUser(roqUserId).updateTenant({ id: user.tenantId, tenant: { name: req.body.name } });
    }
    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
  async function deletePizzaShopById() {
    await notificationHandlerMiddleware(req, req.query.id as string);
    const data = await prisma.pizza_shop.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
