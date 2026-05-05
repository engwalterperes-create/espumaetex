import Link from 'next/link';
import { Receipt, MapPin, User, Heart, LogOut } from 'lucide-react';
import { PageShell } from '../../components/shell/page-shell';

export const metadata = { title: 'Conta' };

const ITEMS = [
  { href: '/conta?tab=pedidos', icon: Receipt, label: 'Meus pedidos', sub: 'Acompanhar entregas' },
  { href: '/conta?tab=enderecos', icon: MapPin, label: 'Endereços', sub: 'Gerenciar locais de entrega' },
  { href: '/conta?tab=dados', icon: User, label: 'Dados pessoais', sub: 'Nome, e-mail, CPF' },
  { href: '/conta?tab=favoritos', icon: Heart, label: 'Favoritos', sub: 'Materiais salvos' },
];

export default function AccountPage() {
  return (
    <PageShell>
      <div className="px-5 pt-3">
        <div className="eyebrow mb-1">Você</div>
        <h1 className="font-serif text-[36px] font-normal italic leading-none tracking-tighter">
          Conta
        </h1>
        <p className="mt-2 font-mono text-[11px] text-ink-muted">
          Esboço · login real chega na próxima fase
        </p>
      </div>

      <div className="mt-6 px-5">
        <div className="rounded-editorial border border-border bg-surface p-4">
          <div className="font-serif text-[20px] font-medium tracking-tighter">
            Olá, visitante
          </div>
          <p className="mt-1 text-[13px] text-ink-soft">
            Entre ou crie sua conta para acompanhar seus pedidos.
          </p>
          <div className="mt-3 flex gap-2">
            <button className="btn-primary flex-1">Entrar</button>
            <button className="btn-secondary flex-1">Criar conta</button>
          </div>
        </div>
      </div>

      <ul className="mt-4 px-5">
        {ITEMS.map(({ href, icon: Icon, label, sub }) => (
          <li key={href}>
            <Link
              href={href}
              className="flex items-center gap-3 border-t border-border py-4 first:border-t-0"
            >
              <Icon className="h-[18px] w-[18px] text-ink-soft" />
              <div className="flex-1">
                <div className="text-[14px] font-medium text-ink">{label}</div>
                <div className="text-[11px] text-ink-muted">{sub}</div>
              </div>
            </Link>
          </li>
        ))}

        <li>
          <button className="flex w-full items-center gap-3 border-t border-border py-4 text-left text-[14px] text-ink-soft hover:text-ink">
            <LogOut className="h-[18px] w-[18px]" />
            Sair
          </button>
        </li>
      </ul>

      <div className="px-5 pb-8 pt-6">
        <p className="font-mono text-[10px] text-ink-muted">
          Espuma<span className="text-accent">tex</span> · v0.1 · Editorial Warm
        </p>
      </div>
    </PageShell>
  );
}
