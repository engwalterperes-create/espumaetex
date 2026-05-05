/**
 * Seed inicial — dados de exemplo para desenvolvimento
 * Roda com: pnpm db:seed
 *
 * Mantém paridade com lib/catalog.ts do app web (mesmos slugs/SKUs).
 */
import { PrismaClient, UnitOfMeasure, FiscalOrigin } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

interface SeedProduct {
  sku: string;
  name: string;
  slug: string;
  description: string;
  shortDesc: string;
  categorySlug: string;
  unit: 'M' | 'M2' | 'M3' | 'UNIT';
  basePrice: string;
  costPrice?: string;
  minQuantity: string;
  sellStep: string;
  composition?: string;
  ncm: string;
  featured?: boolean;
  variant: {
    sku: string;
    name: string;
    color?: string;
    colorHex?: string;
    density?: string;
    thicknessCm?: string;
    widthM?: string;
    grammage?: number;
    abrasionCycles?: number;
    stockQuantity: string;
    unitWeightKg: string;
    unitLengthCm: number;
    unitWidthCm: number;
    unitHeightCm: number;
  };
}

const PRODUCTS: SeedProduct[] = [
  // ===== ESPUMAS =====
  {
    sku: 'ESP-D33-10', name: 'Espuma D33 — 10cm', slug: 'espuma-d33-10cm',
    description: 'Espuma de poliuretano densidade média-alta (D33), espessura 10cm. Ideal para assento de sofá, cabeceira reforçada e estofamento residencial. Largura padrão de 1,40m.',
    shortDesc: 'Densidade média-alta. Ideal para assento de sofá e estofamento residencial.',
    categorySlug: 'espumas', unit: 'M2', basePrice: '89.90', costPrice: '48.00',
    minQuantity: '0.5', sellStep: '0.5', composition: 'Poliuretano D33', ncm: '39263000', featured: true,
    variant: { sku: 'ESP-D33-10-V1', name: 'Padrão · 10cm · 1,40m', density: 'D33', thicknessCm: '10', widthM: '1.40', color: 'Bege', colorHex: '#D9C89A', stockQuantity: '120', unitWeightKg: '1.4', unitLengthCm: 100, unitWidthCm: 140, unitHeightCm: 10 },
  },
  {
    sku: 'ESP-D45-05', name: 'Espuma D45 — 5cm', slug: 'espuma-d45-5cm',
    description: 'Espuma D45 de alta densidade, espessura 5cm. Cabeceiras, encostos firmes e restauração de sofás antigos.',
    shortDesc: 'Alta densidade. Cabeceiras, encostos firmes, restauração.',
    categorySlug: 'espumas', unit: 'M2', basePrice: '64.50', costPrice: '36.00',
    minQuantity: '0.5', sellStep: '0.5', composition: 'Poliuretano D45', ncm: '39263000',
    variant: { sku: 'ESP-D45-05-V1', name: 'Padrão · 5cm · 1,40m', density: 'D45', thicknessCm: '5', widthM: '1.40', color: 'Bege escuro', colorHex: '#C9B48A', stockQuantity: '90', unitWeightKg: '0.95', unitLengthCm: 100, unitWidthCm: 140, unitHeightCm: 5 },
  },
  {
    sku: 'ESP-D20-03', name: 'Espuma D20 — 3cm', slug: 'espuma-d20-3cm',
    description: 'Espuma D20 baixa densidade, espessura 3cm. Almofadas decorativas, capas, projetos de artesanato.',
    shortDesc: 'Baixa densidade. Almofadas decorativas, capas, artesanato.',
    categorySlug: 'espumas', unit: 'M2', basePrice: '32.40', costPrice: '17.00',
    minQuantity: '0.5', sellStep: '0.5', composition: 'Poliuretano D20', ncm: '39263000',
    variant: { sku: 'ESP-D20-03-V1', name: 'Padrão · 3cm · 1,40m', density: 'D20', thicknessCm: '3', widthM: '1.40', color: 'Bege claro', colorHex: '#DDC89E', stockQuantity: '200', unitWeightKg: '0.42', unitLengthCm: 100, unitWidthCm: 140, unitHeightCm: 3 },
  },
  {
    sku: 'ESP-D28-08', name: 'Espuma D28 — 8cm', slug: 'espuma-d28-8cm',
    description: 'Espuma D28 densidade média, espessura 8cm. Conforto equilibrado para uso diário.',
    shortDesc: 'Densidade média. Conforto equilibrado, uso diário.',
    categorySlug: 'espumas', unit: 'M2', basePrice: '71.00', costPrice: '38.00',
    minQuantity: '0.5', sellStep: '0.5', composition: 'Poliuretano D28', ncm: '39263000',
    variant: { sku: 'ESP-D28-08-V1', name: 'Padrão · 8cm · 1,40m', density: 'D28', thicknessCm: '8', widthM: '1.40', color: 'Bege médio', colorHex: '#D4C094', stockQuantity: '85', unitWeightKg: '1.12', unitLengthCm: 100, unitWidthCm: 140, unitHeightCm: 8 },
  },
  {
    sku: 'ESP-D33-15', name: 'Espuma D33 — 15cm', slug: 'espuma-d33-15cm',
    description: 'D33 reforçada em espessura 15cm. Sofás profundos e bancos comerciais de uso intenso.',
    shortDesc: 'Mesma D33 em espessura reforçada. Sofás profundos e bancos comerciais.',
    categorySlug: 'espumas', unit: 'M2', basePrice: '124.00', costPrice: '70.00',
    minQuantity: '0.5', sellStep: '0.5', composition: 'Poliuretano D33', ncm: '39263000',
    variant: { sku: 'ESP-D33-15-V1', name: 'Padrão · 15cm · 1,40m', density: 'D33', thicknessCm: '15', widthM: '1.40', color: 'Bege', colorHex: '#D9C89A', stockQuantity: '40', unitWeightKg: '2.10', unitLengthCm: 100, unitWidthCm: 140, unitHeightCm: 15 },
  },
  {
    sku: 'ESP-D23-05', name: 'Espuma D23 — 5cm', slug: 'espuma-d23-5cm',
    description: 'Densidade leve para almofadas, encostos macios e decoração.',
    shortDesc: 'Densidade leve. Almofadas, encostos macios, decoração.',
    categorySlug: 'espumas', unit: 'M2', basePrice: '41.80', costPrice: '22.00',
    minQuantity: '0.5', sellStep: '0.5', composition: 'Poliuretano D23', ncm: '39263000',
    variant: { sku: 'ESP-D23-05-V1', name: 'Padrão · 5cm · 1,40m', density: 'D23', thicknessCm: '5', widthM: '1.40', color: 'Bege', colorHex: '#E0CB9A', stockQuantity: '110', unitWeightKg: '0.78', unitLengthCm: 100, unitWidthCm: 140, unitHeightCm: 5 },
  },
  {
    sku: 'ESP-D45-10', name: 'Espuma D45 — 10cm', slug: 'espuma-d45-10cm',
    description: 'D45 reforçada em espessura 10cm. Cabeceiras altas e estofados de uso intenso.',
    shortDesc: 'D45 reforçada. Cabeceiras altas e estofados de uso intenso.',
    categorySlug: 'espumas', unit: 'M2', basePrice: '119.90', costPrice: '64.00',
    minQuantity: '0.5', sellStep: '0.5', composition: 'Poliuretano D45', ncm: '39263000',
    variant: { sku: 'ESP-D45-10-V1', name: 'Padrão · 10cm · 1,40m', density: 'D45', thicknessCm: '10', widthM: '1.40', color: 'Bege escuro', colorHex: '#C9B48A', stockQuantity: '55', unitWeightKg: '1.90', unitLengthCm: 100, unitWidthCm: 140, unitHeightCm: 10 },
  },

  // ===== TECIDOS =====
  {
    sku: 'TEC-LIN-AREIA', name: 'Linho Belga — Areia', slug: 'linho-belga-areia',
    description: 'Linho 100%, gramatura 280g/m². Trama aberta e toque natural. Largura 1,50m.',
    shortDesc: 'Linho 100%, gramatura 280g/m². Trama aberta, toque natural.',
    categorySlug: 'tecidos', unit: 'M', basePrice: '78.00', costPrice: '42.00',
    minQuantity: '1', sellStep: '0.5', composition: '100% Linho', ncm: '53091000',
    variant: { sku: 'TEC-LIN-AREIA-V1', name: 'Areia · 1,50m', color: 'Areia', colorHex: '#D6C9A6', grammage: 280, widthM: '1.50', stockQuantity: '60', unitWeightKg: '0.42', unitLengthCm: 100, unitWidthCm: 150, unitHeightCm: 1 },
  },
  {
    sku: 'TEC-VEL-GRA', name: 'Veludo Premium — Grafite', slug: 'veludo-premium-grafite',
    description: 'Veludo premium 100% poliéster, 340g/m². Resistência à abrasão de 50.000 ciclos Martindale. Ideal para sofás de uso intenso e cabeceiras.',
    shortDesc: 'Veludo de poliéster 340g/m². Resistência abrasão 50.000 ciclos.',
    categorySlug: 'tecidos', unit: 'M', basePrice: '92.00', costPrice: '52.00',
    minQuantity: '1', sellStep: '0.5', composition: '100% Poliéster', ncm: '60019200', featured: true,
    variant: { sku: 'TEC-VEL-GRA-V1', name: 'Grafite · 1,40m', color: 'Grafite', colorHex: '#3A3A40', grammage: 340, widthM: '1.40', abrasionCycles: 50000, stockQuantity: '80', unitWeightKg: '0.476', unitLengthCm: 100, unitWidthCm: 140, unitHeightCm: 1 },
  },
  {
    sku: 'TEC-CHE-BOU', name: 'Chenille — Bouclé creme', slug: 'chenille-boucle-creme',
    description: 'Tramado bouclé, toque macio, alta resistência.',
    shortDesc: 'Tramado bouclé, toque macio, alta resistência.',
    categorySlug: 'tecidos', unit: 'M', basePrice: '58.00', costPrice: '30.00',
    minQuantity: '1', sellStep: '0.5', composition: 'Acrílico + Poliéster', ncm: '60019200',
    variant: { sku: 'TEC-CHE-BOU-V1', name: 'Creme · 1,40m', color: 'Creme', colorHex: '#E2D6BC', grammage: 320, widthM: '1.40', stockQuantity: '70', unitWeightKg: '0.448', unitLengthCm: 100, unitWidthCm: 140, unitHeightCm: 1 },
  },
  {
    sku: 'TEC-VEL-VER', name: 'Veludo Premium — Verde musgo', slug: 'veludo-premium-verde-musgo',
    description: 'Mesma base do veludo grafite em verde musgo profundo. 340g/m², 50.000 ciclos.',
    shortDesc: 'Mesma base do veludo grafite em verde musgo profundo.',
    categorySlug: 'tecidos', unit: 'M', basePrice: '92.00', costPrice: '52.00',
    minQuantity: '1', sellStep: '0.5', composition: '100% Poliéster', ncm: '60019200',
    variant: { sku: 'TEC-VEL-VER-V1', name: 'Verde musgo · 1,40m', color: 'Verde musgo', colorHex: '#3D4A2F', grammage: 340, widthM: '1.40', abrasionCycles: 50000, stockQuantity: '45', unitWeightKg: '0.476', unitLengthCm: 100, unitWidthCm: 140, unitHeightCm: 1 },
  },
  {
    sku: 'TEC-SUE-CAR', name: 'Suede amassado — Caramelo', slug: 'suede-amassado-caramelo',
    description: 'Suede com efeito amassado, toque aveludado, fácil limpeza.',
    shortDesc: 'Suede com efeito amassado, toque aveludado, fácil limpeza.',
    categorySlug: 'tecidos', unit: 'M', basePrice: '64.00', costPrice: '34.00',
    minQuantity: '1', sellStep: '0.5', composition: '100% Poliéster', ncm: '60019200',
    variant: { sku: 'TEC-SUE-CAR-V1', name: 'Caramelo · 1,40m', color: 'Caramelo', colorHex: '#9A6E40', grammage: 240, widthM: '1.40', stockQuantity: '75', unitWeightKg: '0.336', unitLengthCm: 100, unitWidthCm: 140, unitHeightCm: 1 },
  },
  {
    sku: 'TEC-LIN-FUM', name: 'Linho misto — Fumê', slug: 'linho-misto-fume',
    description: 'Linho misto, queda firme. Cortinas e capas.',
    shortDesc: 'Linho misto, queda firme. Cortinas e capas.',
    categorySlug: 'tecidos', unit: 'M', basePrice: '54.50', costPrice: '28.00',
    minQuantity: '1', sellStep: '0.5', composition: 'Linho 60% / Algodão 40%', ncm: '53091000',
    variant: { sku: 'TEC-LIN-FUM-V1', name: 'Fumê · 1,50m', color: 'Fumê', colorHex: '#74746C', grammage: 220, widthM: '1.50', stockQuantity: '50', unitWeightKg: '0.330', unitLengthCm: 100, unitWidthCm: 150, unitHeightCm: 1 },
  },

  // ===== MANTA ACRÍLICA =====
  {
    sku: 'MAN-100', name: 'Manta acrílica 100g', slug: 'manta-acrilica-100g',
    description: 'Manta de fibra acrílica para almofadas e edredons.',
    shortDesc: 'Manta de fibra acrílica para almofadas e edredons.',
    categorySlug: 'manta-acrilica', unit: 'M', basePrice: '18.50', costPrice: '8.00',
    minQuantity: '1', sellStep: '0.5', composition: '100% Acrílico', ncm: '55079000',
    variant: { sku: 'MAN-100-V1', name: '100g · 1,50m', color: 'Branco', colorHex: '#F0EBDF', grammage: 100, widthM: '1.50', stockQuantity: '150', unitWeightKg: '0.150', unitLengthCm: 100, unitWidthCm: 150, unitHeightCm: 1 },
  },
  {
    sku: 'MAN-150', name: 'Manta acrílica 150g', slug: 'manta-acrilica-150g',
    description: 'Manta intermediária. Estofados, edredons mais quentes.',
    shortDesc: 'Manta intermediária. Estofados, edredons mais quentes.',
    categorySlug: 'manta-acrilica', unit: 'M', basePrice: '24.90', costPrice: '11.00',
    minQuantity: '1', sellStep: '0.5', composition: '100% Acrílico', ncm: '55079000',
    variant: { sku: 'MAN-150-V1', name: '150g · 1,50m', color: 'Branco', colorHex: '#EAE4D6', grammage: 150, widthM: '1.50', stockQuantity: '100', unitWeightKg: '0.225', unitLengthCm: 100, unitWidthCm: 150, unitHeightCm: 1 },
  },
  {
    sku: 'MAN-200', name: 'Manta acrílica 200g', slug: 'manta-acrilica-200g',
    description: 'Manta encorpada para inverno e isolamento térmico.',
    shortDesc: 'Manta encorpada para inverno e isolamento térmico.',
    categorySlug: 'manta-acrilica', unit: 'M', basePrice: '32.00', costPrice: '14.00',
    minQuantity: '1', sellStep: '0.5', composition: '100% Acrílico', ncm: '55079000',
    variant: { sku: 'MAN-200-V1', name: '200g · 1,50m', color: 'Branco', colorHex: '#E2DCC8', grammage: 200, widthM: '1.50', stockQuantity: '70', unitWeightKg: '0.300', unitLengthCm: 100, unitWidthCm: 150, unitHeightCm: 1 },
  },

  // ===== FIBRAS =====
  {
    sku: 'FIB-SIL-1KG', name: 'Fibra siliconada — 1 kg', slug: 'fibra-siliconada-1kg',
    description: 'Fibra para enchimento de almofadas e travesseiros. Pacote de 1 kg.',
    shortDesc: 'Fibra para enchimento de almofadas e travesseiros.',
    categorySlug: 'fibras', unit: 'UNIT', basePrice: '28.90', costPrice: '14.00',
    minQuantity: '1', sellStep: '1', composition: '100% Poliéster siliconado', ncm: '55061010',
    variant: { sku: 'FIB-SIL-1KG-V1', name: 'Pacote 1 kg', color: 'Branco', colorHex: '#FAF8F2', stockQuantity: '200', unitWeightKg: '1.0', unitLengthCm: 40, unitWidthCm: 30, unitHeightCm: 20 },
  },
  {
    sku: 'FIB-SIL-5KG', name: 'Fibra siliconada — pacote 5 kg', slug: 'fibra-siliconada-5kg',
    description: 'Pacote econômico de fibra siliconada para grandes volumes.',
    shortDesc: 'Pacote econômico de fibra siliconada para grandes volumes.',
    categorySlug: 'fibras', unit: 'UNIT', basePrice: '119.00', costPrice: '60.00',
    minQuantity: '1', sellStep: '1', composition: '100% Poliéster siliconado', ncm: '55061010',
    variant: { sku: 'FIB-SIL-5KG-V1', name: 'Pacote 5 kg', color: 'Branco', colorHex: '#F4F0E6', stockQuantity: '90', unitWeightKg: '5.0', unitLengthCm: 60, unitWidthCm: 45, unitHeightCm: 35 },
  },

  // ===== ACESSÓRIOS =====
  {
    sku: 'ACC-LIN-100', name: 'Linha de poliéster — cone 100g', slug: 'linha-poliester-cone-100g',
    description: 'Linha resistente para costura de estofado.',
    shortDesc: 'Linha resistente para costura de estofado.',
    categorySlug: 'acessorios', unit: 'UNIT', basePrice: '12.50', costPrice: '5.00',
    minQuantity: '1', sellStep: '1', composition: '100% Poliéster', ncm: '54021900',
    variant: { sku: 'ACC-LIN-100-V1', name: 'Cone 100g', color: 'Branco', colorHex: '#F0F0F0', stockQuantity: '500', unitWeightKg: '0.1', unitLengthCm: 8, unitWidthCm: 8, unitHeightCm: 10 },
  },
  {
    sku: 'ACC-ZIP-INV', name: 'Zíper invisível — 50cm', slug: 'ziper-invisivel-50cm',
    description: 'Zíper invisível para almofadas e capas.',
    shortDesc: 'Zíper invisível para almofadas e capas.',
    categorySlug: 'acessorios', unit: 'UNIT', basePrice: '6.90', costPrice: '2.50',
    minQuantity: '1', sellStep: '1', composition: 'Poliéster + metal', ncm: '96071100',
    variant: { sku: 'ACC-ZIP-INV-V1', name: '50cm', color: 'Cinza', colorHex: '#BBBBBB', stockQuantity: '800', unitWeightKg: '0.02', unitLengthCm: 52, unitWidthCm: 3, unitHeightCm: 1 },
  },
];

async function main() {
  console.log('🌱 Iniciando seed...');

  // ----- Categorias -----
  const cats = [
    { slug: 'espumas', name: 'Espumas', position: 1, metaTitle: 'Espumas D20, D28, D33, D45 — corte sob medida', metaDescription: 'Espumas de poliuretano em diversas densidades e espessuras. Corte sob medida.' },
    { slug: 'tecidos', name: 'Tecidos', position: 2, metaTitle: 'Tecidos para estofamento — linho, veludo, chenille', metaDescription: 'Tecidos premium para estofamento e decoração.' },
    { slug: 'manta-acrilica', name: 'Manta acrílica', position: 3 },
    { slug: 'fibras', name: 'Fibras siliconadas', position: 4 },
    { slug: 'acessorios', name: 'Acessórios', position: 5 },
  ];

  const categoriesById: Record<string, string> = {};
  for (const c of cats) {
    const cat = await prisma.category.upsert({
      where: { slug: c.slug },
      update: {},
      create: { name: c.name, slug: c.slug, position: c.position, metaTitle: c.metaTitle, metaDescription: c.metaDescription },
    });
    categoriesById[c.slug] = cat.id;
  }

  // ----- Zona de frete: SP padrão -----
  await prisma.shippingZone.upsert({
    where: { id: 'sp-default' },
    update: {},
    create: {
      id: 'sp-default',
      name: 'São Paulo (estado)',
      states: ['SP'],
      estimatedDays: 5,
      baseCost: new Decimal(0),
      freeShippingMin: new Decimal(350),
      allowedCarriers: ['correios-pac', 'correios-sedex', 'jadlog-package'],
    },
  });

  // ----- Cupons mock -----
  const coupons = [
    { code: 'ESPUMA10', type: 'PERCENT' as const, value: '10', minOrderValue: '100' },
    { code: 'ESTOFADOR15', type: 'PERCENT' as const, value: '15', minOrderValue: '300' },
  ];
  for (const c of coupons) {
    await prisma.coupon.upsert({
      where: { code: c.code },
      update: {},
      create: {
        code: c.code,
        type: c.type,
        value: new Decimal(c.value),
        minOrderValue: new Decimal(c.minOrderValue),
        active: true,
      },
    });
  }

  // ----- Produtos + variantes -----
  let created = 0;
  for (const p of PRODUCTS) {
    const v = p.variant;
    await prisma.product.upsert({
      where: { sku: p.sku },
      update: {},
      create: {
        sku: p.sku,
        name: p.name,
        slug: p.slug,
        description: p.description,
        shortDesc: p.shortDesc,
        categoryId: categoriesById[p.categorySlug],
        unitOfMeasure: p.unit as UnitOfMeasure,
        basePrice: new Decimal(p.basePrice),
        costPrice: p.costPrice ? new Decimal(p.costPrice) : null,
        minQuantity: new Decimal(p.minQuantity),
        sellStep: new Decimal(p.sellStep),
        composition: p.composition,
        origin: 'Nacional',
        ncm: p.ncm,
        cfop: '5102',
        fiscalOrigin: FiscalOrigin.NACIONAL,
        featured: !!p.featured,
        variants: {
          create: [
            {
              sku: v.sku,
              name: v.name,
              color: v.color,
              colorHex: v.colorHex,
              density: v.density,
              thicknessCm: v.thicknessCm ? new Decimal(v.thicknessCm) : null,
              widthM: v.widthM ? new Decimal(v.widthM) : null,
              grammage: v.grammage,
              abrasionCycles: v.abrasionCycles,
              stockQuantity: new Decimal(v.stockQuantity),
              unitWeightKg: new Decimal(v.unitWeightKg),
              unitLengthCm: v.unitLengthCm,
              unitWidthCm: v.unitWidthCm,
              unitHeightCm: v.unitHeightCm,
            },
          ],
        },
      },
    });
    created++;
  }

  console.log('✅ Seed concluído!');
  console.log(`   Categorias: ${await prisma.category.count()}`);
  console.log(`   Produtos: ${await prisma.product.count()} (criados nesta execução: ${created})`);
  console.log(`   Variantes: ${await prisma.variant.count()}`);
  console.log(`   Cupons: ${await prisma.coupon.count()}`);
  console.log(`   Zonas de frete: ${await prisma.shippingZone.count()}`);
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
