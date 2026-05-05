import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CartService } from './cart.service';

@ApiTags('cart')
@Controller('cart')
export class CartController {
  constructor(private readonly service: CartService) {}

  // TODO: rotas de criar/atualizar/limpar carrinho, reservar estoque
}
