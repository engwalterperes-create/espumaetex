/**
 * Catálogo inicial — base do storefront enquanto a API não está conectada.
 * Para adicionar produto: copie um item, mude id/sku/slug e ajuste os campos.
 * Quando o backend estiver populado, este arquivo vai ser substituído por
 * chamadas a /api/products (ver lib/api.ts).
 */

export type CategorySlug =
  | 'espumas'
  | 'tecidos'
  | 'manta-acrilica'
  | 'fibras'
  | 'acessorios';

export type UnitOfMeasure = 'M' | 'M2' | 'M3' | 'UNIT';

export interface Product {
  id: string;
  sku: string;
  slug: string;
  name: string;
  shortDesc: string;
  category: CategorySlug;
  unit: UnitOfMeasure;
  basePrice: number;
  /** rótulos: 'Mais vendido', 'Novo', 'Promo', etc. */
  badge?: string;
  /** swatch CSS — gradiente que substitui a foto enquanto não há imagem */
  swatch: string;

  // ---- atributos (espuma) ----
  density?: 'D20' | 'D23' | 'D28' | 'D33' | 'D45';
  thicknessCm?: number;

  // ---- atributos (tecido) ----
  grammage?: number; // g/m²
  composition?: string; // "100% poliéster"
  abrasionCycles?: number;

  // ---- comum ----
  widthM?: number; // largura do rolo em metros
  rating?: number;
  reviewsCount?: number;
}

export const products: Product[] = [
  // ============== ESPUMAS ==============
  {
    id: 'p1',
    sku: 'ESP-D33-10',
    slug: 'espuma-d33-10cm',
    name: 'Espuma D33 — 10cm',
    shortDesc: 'Densidade média-alta. Ideal para assento de sofá e estofamento residencial.',
    category: 'espumas',
    unit: 'M2',
    basePrice: 89.9,
    badge: 'Mais vendido',
    swatch: 'linear-gradient(135deg, #d9c89a 0%, #b59c6a 100%)',
    density: 'D33',
    thicknessCm: 10,
    widthM: 1.4,
    rating: 4.8,
    reviewsCount: 312,
  },
  {
    id: 'p2',
    sku: 'ESP-D45-05',
    slug: 'espuma-d45-5cm',
    name: 'Espuma D45 — 5cm',
    shortDesc: 'Alta densidade. Cabeceiras, encostos firmes, restauração.',
    category: 'espumas',
    unit: 'M2',
    basePrice: 64.5,
    swatch: 'linear-gradient(135deg, #c9b48a 0%, #9d8458 100%)',
    density: 'D45',
    thicknessCm: 5,
    widthM: 1.4,
    rating: 4.9,
    reviewsCount: 187,
  },
  {
    id: 'p3',
    sku: 'ESP-D20-03',
    slug: 'espuma-d20-3cm',
    name: 'Espuma D20 — 3cm',
    shortDesc: 'Baixa densidade. Almofadas decorativas, capas, artesanato.',
    category: 'espumas',
    unit: 'M2',
    basePrice: 32.4,
    swatch: 'linear-gradient(135deg, #ddc89e 0%, #b89c6e 100%)',
    density: 'D20',
    thicknessCm: 3,
    widthM: 1.4,
    rating: 4.6,
    reviewsCount: 256,
  },
  {
    id: 'p4',
    sku: 'ESP-D28-08',
    slug: 'espuma-d28-8cm',
    name: 'Espuma D28 — 8cm',
    shortDesc: 'Densidade média. Conforto equilibrado, uso diário.',
    category: 'espumas',
    unit: 'M2',
    basePrice: 71.0,
    swatch: 'linear-gradient(135deg, #d4c094 0%, #ad9460 100%)',
    density: 'D28',
    thicknessCm: 8,
    widthM: 1.4,
    rating: 4.7,
    reviewsCount: 203,
  },
  {
    id: 'p5',
    sku: 'ESP-D33-15',
    slug: 'espuma-d33-15cm',
    name: 'Espuma D33 — 15cm',
    shortDesc: 'Mesma D33 em espessura reforçada. Sofás profundos e bancos comerciais.',
    category: 'espumas',
    unit: 'M2',
    basePrice: 124.0,
    swatch: 'linear-gradient(135deg, #d9c89a 0%, #a18664 100%)',
    density: 'D33',
    thicknessCm: 15,
    widthM: 1.4,
    rating: 4.8,
    reviewsCount: 98,
  },
  {
    id: 'p6',
    sku: 'ESP-D23-05',
    slug: 'espuma-d23-5cm',
    name: 'Espuma D23 — 5cm',
    shortDesc: 'Densidade leve. Almofadas, encostos macios, decoração.',
    category: 'espumas',
    unit: 'M2',
    basePrice: 41.8,
    badge: 'Promo',
    swatch: 'linear-gradient(135deg, #e0cb9a 0%, #b69968 100%)',
    density: 'D23',
    thicknessCm: 5,
    widthM: 1.4,
    rating: 4.6,
    reviewsCount: 141,
  },
  {
    id: 'p7',
    sku: 'ESP-D45-10',
    slug: 'espuma-d45-10cm',
    name: 'Espuma D45 — 10cm',
    shortDesc: 'D45 reforçada. Cabeceiras altas e estofados de uso intenso.',
    category: 'espumas',
    unit: 'M2',
    basePrice: 119.9,
    swatch: 'linear-gradient(135deg, #c9b48a 0%, #8a734f 100%)',
    density: 'D45',
    thicknessCm: 10,
    widthM: 1.4,
    rating: 4.9,
    reviewsCount: 76,
  },

  // ============== TECIDOS ==============
  {
    id: 'p8',
    sku: 'TEC-LIN-AREIA',
    slug: 'linho-belga-areia',
    name: 'Linho Belga — Areia',
    shortDesc: 'Linho 100%, gramatura 280g/m². Trama aberta, toque natural.',
    category: 'tecidos',
    unit: 'M',
    basePrice: 78.0,
    badge: 'Novo',
    swatch: 'linear-gradient(135deg, #e6dcc6 0%, #c9b896 100%)',
    grammage: 280,
    composition: '100% Linho',
    widthM: 1.5,
    rating: 4.7,
    reviewsCount: 94,
  },
  {
    id: 'p9',
    sku: 'TEC-VEL-GRA',
    slug: 'veludo-premium-grafite',
    name: 'Veludo Premium — Grafite',
    shortDesc: 'Veludo de poliéster 340g/m². Resistência abrasão 50.000 ciclos.',
    category: 'tecidos',
    unit: 'M',
    basePrice: 92.0,
    swatch: 'linear-gradient(135deg, #4a4a52 0%, #2a2a30 100%)',
    grammage: 340,
    composition: '100% Poliéster',
    abrasionCycles: 50000,
    widthM: 1.4,
    rating: 4.9,
    reviewsCount: 421,
  },
  {
    id: 'p10',
    sku: 'TEC-CHE-BOU',
    slug: 'chenille-boucle-creme',
    name: 'Chenille — Bouclé creme',
    shortDesc: 'Tramado bouclé, toque macio, alta resistência.',
    category: 'tecidos',
    unit: 'M',
    basePrice: 58.0,
    badge: 'Promo',
    swatch: 'linear-gradient(135deg, #ede4d0 0%, #d4c5a8 100%)',
    grammage: 320,
    composition: 'Acrílico + Poliéster',
    widthM: 1.4,
    rating: 4.8,
    reviewsCount: 178,
  },
  {
    id: 'p11',
    sku: 'TEC-VEL-VER',
    slug: 'veludo-premium-verde-musgo',
    name: 'Veludo Premium — Verde musgo',
    shortDesc: 'Mesma base do veludo grafite em verde musgo profundo.',
    category: 'tecidos',
    unit: 'M',
    basePrice: 92.0,
    swatch: 'linear-gradient(135deg, #4a5a3e 0%, #2c3624 100%)',
    grammage: 340,
    composition: '100% Poliéster',
    abrasionCycles: 50000,
    widthM: 1.4,
    rating: 4.9,
    reviewsCount: 134,
  },
  {
    id: 'p12',
    sku: 'TEC-SUE-CAR',
    slug: 'suede-amassado-caramelo',
    name: 'Suede amassado — Caramelo',
    shortDesc: 'Suede com efeito amassado, toque aveludado, fácil limpeza.',
    category: 'tecidos',
    unit: 'M',
    basePrice: 64.0,
    swatch: 'linear-gradient(135deg, #b88550 0%, #7d5a32 100%)',
    grammage: 240,
    composition: '100% Poliéster',
    widthM: 1.4,
    rating: 4.7,
    reviewsCount: 89,
  },
  {
    id: 'p13',
    sku: 'TEC-LIN-FUM',
    slug: 'linho-misto-fume',
    name: 'Linho misto — Fumê',
    shortDesc: 'Linho misto, queda firme. Cortinas e capas.',
    category: 'tecidos',
    unit: 'M',
    basePrice: 54.5,
    swatch: 'linear-gradient(135deg, #8a8a82 0%, #5e5e58 100%)',
    grammage: 220,
    composition: 'Linho 60% / Algodão 40%',
    widthM: 1.5,
    rating: 4.6,
    reviewsCount: 62,
  },

  // ============== MANTA ACRÍLICA ==============
  {
    id: 'p14',
    sku: 'MAN-100',
    slug: 'manta-acrilica-100g',
    name: 'Manta acrílica 100g',
    shortDesc: 'Manta de fibra acrílica para almofadas e edredons.',
    category: 'manta-acrilica',
    unit: 'M',
    basePrice: 18.5,
    swatch: 'linear-gradient(135deg, #f4f0e8 0%, #d8d2c2 100%)',
    grammage: 100,
    widthM: 1.5,
    rating: 4.7,
    reviewsCount: 142,
  },
  {
    id: 'p15',
    sku: 'MAN-150',
    slug: 'manta-acrilica-150g',
    name: 'Manta acrílica 150g',
    shortDesc: 'Manta intermediária. Estofados, edredons mais quentes.',
    category: 'manta-acrilica',
    unit: 'M',
    basePrice: 24.9,
    swatch: 'linear-gradient(135deg, #f0ebe0 0%, #c9c2af 100%)',
    grammage: 150,
    widthM: 1.5,
    rating: 4.6,
    reviewsCount: 88,
  },
  {
    id: 'p16',
    sku: 'MAN-200',
    slug: 'manta-acrilica-200g',
    name: 'Manta acrílica 200g',
    shortDesc: 'Manta encorpada para inverno e isolamento térmico.',
    category: 'manta-acrilica',
    unit: 'M',
    basePrice: 32.0,
    swatch: 'linear-gradient(135deg, #ece6d6 0%, #b8b09a 100%)',
    grammage: 200,
    widthM: 1.5,
    rating: 4.7,
    reviewsCount: 71,
  },

  // ============== FIBRAS ==============
  {
    id: 'p17',
    sku: 'FIB-SIL-1KG',
    slug: 'fibra-siliconada-1kg',
    name: 'Fibra siliconada — 1 kg',
    shortDesc: 'Fibra para enchimento de almofadas e travesseiros.',
    category: 'fibras',
    unit: 'UNIT',
    basePrice: 28.9,
    swatch: 'linear-gradient(135deg, #ffffff 0%, #e0ddd4 100%)',
    rating: 4.8,
    reviewsCount: 215,
  },
  {
    id: 'p18',
    sku: 'FIB-SIL-5KG',
    slug: 'fibra-siliconada-5kg',
    name: 'Fibra siliconada — pacote 5 kg',
    shortDesc: 'Pacote econômico de fibra siliconada para grandes volumes.',
    category: 'fibras',
    unit: 'UNIT',
    basePrice: 119.0,
    badge: 'Promo',
    swatch: 'linear-gradient(135deg, #f4f2ea 0%, #cac6b8 100%)',
    rating: 4.9,
    reviewsCount: 102,
  },

  // ============== ACESSÓRIOS ==============
  {
    id: 'p19',
    sku: 'ACC-LIN-100',
    slug: 'linha-poliester-cone-100g',
    name: 'Linha de poliéster — cone 100g',
    shortDesc: 'Linha resistente para costura de estofado.',
    category: 'acessorios',
    unit: 'UNIT',
    basePrice: 12.5,
    swatch: 'linear-gradient(135deg, #f5f5f5 0%, #d5d5d5 100%)',
    rating: 4.6,
    reviewsCount: 54,
  },
  {
    id: 'p20',
    sku: 'ACC-ZIP-INV',
    slug: 'ziper-invisivel-50cm',
    name: 'Zíper invisível — 50cm',
    shortDesc: 'Zíper invisível para almofadas e capas.',
    category: 'acessorios',
    unit: 'UNIT',
    basePrice: 6.9,
    swatch: 'linear-gradient(135deg, #ddd 0%, #aaa 100%)',
    rating: 4.7,
    reviewsCount: 121,
  },
];

export const categories: Array<{
  slug: CategorySlug;
  name: string;
  hint: string;
}> = [
  { slug: 'espumas', name: 'Espumas', hint: 'D20 · D23 · D28 · D33 · D45' },
  { slug: 'tecidos', name: 'Tecidos', hint: 'Veludo · Linho · Chenille · Suede' },
  { slug: 'manta-acrilica', name: 'Manta acrílica', hint: '100g · 150g · 200g' },
  { slug: 'fibras', name: 'Fibras siliconadas', hint: 'Almofadas · Travesseiros' },
  { slug: 'acessorios', name: 'Acessórios', hint: 'Linhas · Zíperes · Cola' },
];

// ---- helpers ----

export function getProductsByCategory(slug: CategorySlug): Product[] {
  return products.filter((p) => p.category === slug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function categoryCount(slug: CategorySlug): number {
  return products.filter((p) => p.category === slug).length;
}

export function categoryLabel(slug: CategorySlug): string {
  return categories.find((c) => c.slug === slug)?.name ?? slug;
}
