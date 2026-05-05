import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ListProductsDto } from './dto/list-products.dto';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async list(query: ListProductsDto) {
    const {
      categorySlug,
      density,
      color,
      minThickness,
      maxThickness,
      minPrice,
      maxPrice,
      featured,
      search,
      page = 1,
      pageSize = 20,
      sort = 'relevance',
    } = query;

    const where: any = { active: true, deletedAt: null };

    if (categorySlug) where.category = { slug: categorySlug };
    if (featured !== undefined) where.featured = featured;
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
        { sku: { contains: search, mode: 'insensitive' } },
      ];
    }
    if (minPrice || maxPrice) {
      where.basePrice = {};
      if (minPrice) where.basePrice.gte = minPrice;
      if (maxPrice) where.basePrice.lte = maxPrice;
    }

    // Filtros que vivem na variante
    const variantWhere: any = { active: true };
    if (density) variantWhere.density = density;
    if (color) variantWhere.color = color;
    if (minThickness || maxThickness) {
      variantWhere.thicknessCm = {};
      if (minThickness) variantWhere.thicknessCm.gte = minThickness;
      if (maxThickness) variantWhere.thicknessCm.lte = maxThickness;
    }
    if (Object.keys(variantWhere).length > 1) {
      where.variants = { some: variantWhere };
    }

    const orderBy =
      sort === 'price-asc'
        ? { basePrice: 'asc' as const }
        : sort === 'price-desc'
          ? { basePrice: 'desc' as const }
          : sort === 'newest'
            ? { createdAt: 'desc' as const }
            : { featured: 'desc' as const };

    const [items, total] = await this.prisma.$transaction([
      this.prisma.product.findMany({
        where,
        orderBy,
        skip: (page - 1) * pageSize,
        take: pageSize,
        include: {
          category: true,
          images: { orderBy: { position: 'asc' }, take: 1 },
          variants: {
            where: { active: true },
            select: {
              id: true,
              color: true,
              colorHex: true,
              density: true,
              thicknessCm: true,
              widthM: true,
              grammage: true,
              priceDelta: true,
              stockQuantity: true,
            },
          },
        },
      }),
      this.prisma.product.count({ where }),
    ]);

    return {
      items,
      pagination: { page, pageSize, total, totalPages: Math.ceil(total / pageSize) },
    };
  }

  async getBySlug(slug: string) {
    const product = await this.prisma.product.findUnique({
      where: { slug, deletedAt: null },
      include: {
        category: true,
        brand: true,
        images: { orderBy: { position: 'asc' } },
        variants: {
          where: { active: true },
          include: {
            images: { orderBy: { position: 'asc' } },
          },
        },
        reviews: {
          where: { approved: true },
          orderBy: { createdAt: 'desc' },
          take: 10,
          include: { user: { select: { name: true } } },
        },
      },
    });

    if (!product) throw new NotFoundException('Produto não encontrado');
    return product;
  }
}
