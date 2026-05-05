import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ShippingService } from './shipping.service';

@ApiTags('shipping')
@Controller('shipping')
export class ShippingController {
  constructor(private readonly service: ShippingService) {}

  // TODO: rotas de validar CEP em ShippingZone, cotar frete via Melhor Envio, gerar etiqueta, rastreio
}
