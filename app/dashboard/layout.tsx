'use client';
import { usePathname } from 'next/navigation';
import { HomeIcon, UsersIcon, DocumentIcon } from '@heroicons/react/24/outline';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const navItems = [
    { href: '/dashboard', label: 'Inicio', icon: <HomeIcon className="h-5 w-5" /> },
    { href: '/dashboard/customers', label: 'Clientes', icon: <UsersIcon className="h-5 w-5" /> },
    { href: '/dashboard/invoices', label: 'Facturas', icon: <DocumentIcon className="h-5 w-5" /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Barra lateral */}
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-4 text-lg font-bold">Mi Dashboard</div>
        <nav className="mt-4">
          <ul className="space-y-2">
            {navItems.map(({ href, label, icon }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`flex items-center gap-3 rounded px-4 py-2 ${
                    pathname === href
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-200 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {icon}
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Contenido principal */}
      <main className="flex-grow p-6">{children}</main>
    </div>
  );
}
