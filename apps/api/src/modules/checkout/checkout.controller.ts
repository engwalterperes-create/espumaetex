import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CheckoutService } from './checkout.service';

@ApiTags('checkout')
@Controller('checkout')
export class CheckoutController {
  constructor(private readonly service: CheckoutService) {}

  // TODO: rotas de validar carrinho, calcular frete (Melhor Envio), criar pedido + preference Mercado Pago
}
