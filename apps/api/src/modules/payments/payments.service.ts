import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PaymentsService {
  constructor(private readonly prisma: PrismaService) {}

  // TODO: implementar criar pagamento, webhook Mercado Pago (idempotente), reembolso
}
