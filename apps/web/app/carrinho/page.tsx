import { CartView } from './cart-view';
import { PageShell } from '../../components/shell/page-shell';

export const metadata = {
  title: 'Carrinho',
};

export default function CartPage() {
  return (
    <PageShell>
      <CartView />
    </PageShell>
  );
}
