'use client';

import { useMemo } from 'react';

/**
 * QR code visual mockado: grid 23×23 derivado de hash do payload.
 * Para o protótipo é suficiente — quando integrar com gateway real
 * (Mercado Pago, Asaas), troque por uma lib (qrcode-react, etc.)
 * recebendo `pixQrCode` do backend.
 */
export function PixQrCode({ value, size = 180 }: { value: string; size?: number }) {
  const grid = useMemo(() => {
    const cells = 23;
    const arr: boolean[][] = [];
    let h = 0;
    for (let i = 0; i < value.length; i++) {
      h = (h * 31 + value.charCodeAt(i)) | 0;
    }
    for (let y = 0; y < cells; y++) {
      const row: boolean[] = [];
      for (let x = 0; x < cells; x++) {
        // hash mistura coordenadas + valor pra determinístico mas pseudo-aleatório
        const v = (h ^ (x * 73856093) ^ (y * 19349663)) | 0;
        row.push((v & 7) > 3);
      }
      arr.push(row);
    }
    // Desenha 3 cantos (finder patterns)
    function paintFinder(rows: boolean[][], x0: number, y0: number) {
      for (let y = 0; y < 7; y++) {
        for (let x = 0; x < 7; x++) {
          const onBorder = x === 0 || y === 0 || x === 6 || y === 6;
          const onCenter = x >= 2 && x <= 4 && y >= 2 && y <= 4;
          rows[y0 + y][x0 + x] = onBorder || onCenter;
        }
      }
    }
    paintFinder(arr, 0, 0);
    paintFinder(arr, cells - 7, 0);
    paintFinder(arr, 0, cells - 7);
    return arr;
  }, [value]);

  const cell = size / grid.length;

  return (
    <div
      className="rounded-md border border-border bg-white p-2.5"
      style={{ width: size + 20, height: size + 20 }}
      role="img"
      aria-label="QR code Pix"
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {grid.map((row, y) =>
          row.map(
            (on, x) =>
              on && (
                <rect
                  key={`${x}-${y}`}
                  x={x * cell}
                  y={y * cell}
                  width={cell}
                  height={cell}
                  fill="#1F1B16"
                />
              ),
          ),
        )}
      </svg>
    </div>
  );
}
