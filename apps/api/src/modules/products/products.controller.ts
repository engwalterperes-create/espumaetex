import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { ListProductsDto } from './dto/list-products.dto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly products: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'Listar produtos com filtros e paginação' })
  list(@Query() query: ListProductsDto) {
    return this.products.list(query);
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Obter produto por slug' })
  getBySlug(@Param('slug') slug: string) {
    return this.products.getBySlug(slug);
  }
}
