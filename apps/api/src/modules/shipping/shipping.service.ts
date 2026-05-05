import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ShippingService {
  constructor(private readonly prisma: PrismaService) {}

  // TODO: implementar validar CEP em ShippingZone, cotar frete via Melhor Envio, gerar etiqueta, rastreio
}
