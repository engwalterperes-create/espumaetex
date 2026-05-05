# Protótipo Espumatex

Esta pasta guarda o **protótipo HTML/JSX original** que serviu como ponto de partida pro projeto.

## O que tem aqui

- **`Espumatex.html`** — design canvas com as 3 direções de marca (A · Tech Neutral, B · Editorial Warm, C · Industrial Dark) e protótipo mobile navegável (home → listagem → produto → carrinho → checkout).
- **`design-canvas.jsx`** — componentes do canvas (DCSection, DCArtboard, DCPostIt).
- **`components/`** — todos os componentes do protótipo: design tokens (`dir-a`, `dir-b`, `dir-c`), telas (`screen-listing`, `screen-product`, `screens-cart`, `screens-cart-checkout`), shells (`phone-shell`, `phone-app`), data mock (`data.jsx`), ícones, etc.
- **`components-all.jsx`** — versão consolidada (legado).

## Como abrir

Abra `Espumatex.html` direto no navegador. Não precisa de servidor — usa React via CDN com Babel standalone.

## Status

**A Direção A foi escolhida** como identidade oficial. O storefront em `apps/web` aplica os tokens dessa direção via Tailwind config.

Os arquivos aqui ficam como referência histórica e como base visual ao migrar telas restantes (configurador de corte, filtros laterais, etc.) pro Next.js.
