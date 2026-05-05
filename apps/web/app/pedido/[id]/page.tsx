import { OrderConfirmation } from './confirmation-view';
import { PageShell } from '../../../components/shell/page-shell';

export const metadata = {
  title: 'Pedido confirmado',
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function OrderPage({ params }: PageProps) {
  const { id } = await params;
  return (
    <PageShell withBottomNav={false}>
      <OrderConfirmation orderId={id} />
    </PageShell>
  );
}
