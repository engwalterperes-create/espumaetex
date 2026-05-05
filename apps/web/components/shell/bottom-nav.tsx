'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Receipt, User } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import clsx from 'clsx';

interface Tab {
  href: string;
  label: string;
  Icon: LucideIcon;
  /** regex aplicada ao pathname pra marcar a aba ativa */
  match?: RegExp;
  /** se true, ativa só quando pathname === href */
  exact?: boolean;
}

const tabs: Tab[] = [
  { href: '/', label: 'Início', Icon: Home, exact: true },
  { href: '/categoria/espumas', label: 'Catálogo', Icon: BookOpen, match: /^\/categoria/ },
  { href: '/conta?tab=pedidos', label: 'Pedidos', Icon: Receipt, match: /^\/conta/ },
  { href: '/conta', label: 'Conta', Icon: User, exact: true },
];

/**
 * Bottom nav mobile — fica fixo na base, com 4 abas.
 */
export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 z-30 border-t border-border bg-surface">
      <div className="container-mobile flex h-[68px] items-stretch px-2 pb-2 pt-2">
        {tabs.map(({ href, label, Icon, match, exact }) => {
          const active = exact
            ? pathname === href
            : match
              ? match.test(pathname)
              : pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                'flex flex-1 flex-col items-center justify-center gap-1 transition',
                active ? 'text-accent' : 'text-ink-muted hover:text-ink',
              )}
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={active ? 2 : 1.5} />
              <span className="text-[10px] font-medium tracking-wider">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
