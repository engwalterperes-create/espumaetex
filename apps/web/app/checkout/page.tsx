import { CheckoutView } from './checkout-view';
import { PageShell } from '../../components/shell/page-shell';

export const metadata = {
  title: 'Pagamento',
};

export default function CheckoutPage() {
  return (
    <PageShell withBottomNav={false}>
      <CheckoutView />
    </PageShell>
  );
}
