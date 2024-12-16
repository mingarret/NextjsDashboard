import Link from 'next/link';

const navLinks = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/dashboard/customers', label: 'Clientes' },
  { href: '/dashboard/invoices', label: 'Facturas' },
];

export default function NavLinks() {
  return (
    <nav>
      <ul className="space-y-4">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link href={href}>
              <a className="block rounded px-4 py-2 hover:bg-gray-200">{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
// Compare this snippet from app/ui/dashboard/sidenav.tsx: