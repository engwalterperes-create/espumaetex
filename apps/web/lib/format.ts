/**
 * Formatadores comuns: moeda BRL, métrica, CEP, etc.
 */

export function formatBRL(value: number | string | null | undefined): string {
  if (value == null) return '—';
  const n = typeof value === 'string' ? parseFloat(value) : value;
  return n.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export function formatUnit(unit: 'M' | 'M2' | 'M3' | 'UNIT'): string {
  switch (unit) {
    case 'M':
      return 'm';
    case 'M2':
      return 'm²';
    case 'M3':
      return 'm³';
    case 'UNIT':
      return 'un';
  }
}

export function formatPricePerUnit(
  price: number | string,
  unit: 'M' | 'M2' | 'M3' | 'UNIT',
): string {
  return `${formatBRL(price)}/${formatUnit(unit)}`;
}

export function formatCep(cep: string): string {
  const clean = cep.replace(/\D/g, '');
  if (clean.length !== 8) return cep;
  return `${clean.slice(0, 5)}-${clean.slice(5)}`;
}
