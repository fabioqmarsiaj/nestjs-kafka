import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma/prisma.service';
import { OrderDto } from './order.dto';
import { OrderStatus } from '.prisma/client/orders';

@Injectable()
export class OrdersService {
  constructor(private prismaService: PrismaService) {}

  all() {
    return this.prismaService.order.findMany();
  }

  create(data: OrderDto) {
    return this.prismaService.order.create({
      data: {
        ...data,
        status: OrderStatus.PENDING,
      },
    });
  }
}
