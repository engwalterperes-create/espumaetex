import { Header } from './header';
import { BottomNav } from './bottom-nav';

/**
 * Wrapper padrão de página: viewport "mobile" centralizado no desktop,
 * com Header sticky no topo e BottomNav sticky na base.
 */
export function PageShell({
  children,
  withBottomNav = true,
  withHeader = true,
}: {
  children: React.ReactNode;
  withBottomNav?: boolean;
  withHeader?: boolean;
}) {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-mobile flex-col bg-bg shadow-[0_0_0_1px_rgba(0,0,0,0.04)] md:my-6 md:min-h-[calc(100dvh-3rem)] md:rounded-2xl md:overflow-hidden">
      {withHeader && <Header />}
      <main className="flex-1">{children}</main>
      {withBottomNav && <BottomNav />}
    </div>
  );
}
