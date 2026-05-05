import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CheckoutService {
  constructor(private readonly prisma: PrismaService) {}

  // TODO: implementar validar carrinho, calcular frete (Melhor Envio), criar pedido + preference Mercado Pago
}
