import NavLinks from './nav-links';

export default function SideNav() {
  return (
    <aside className="h-full bg-gray-50 p-4">
      <h2 className="mb-4 text-xl font-bold">Menú</h2>
      <NavLinks />
    </aside>
  );
}
