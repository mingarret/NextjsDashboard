import { Inter } from 'next/font/google';

export default function InvoicesPage() {
  const invoices = [
    { id: 1, customer: 'Cliente 1', amount: 150, status: 'paid', date: '2024-01-01' },
    { id: 2, customer: 'Cliente 2', amount: 200, status: 'pending', date: '2024-01-05' },
    { id: 3, customer: 'Cliente 3', amount: 300, status: 'paid', date: '2024-01-10' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold">Facturas</h1>
      <table className="mt-4 w-full border-collapse bg-white shadow">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Cliente</th>
            <th className="border px-4 py-2">Monto</th>
            <th className="border px-4 py-2">Estado</th>
            <th className="border px-4 py-2">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td className="border px-4 py-2">{invoice.id}</td>
              <td className="border px-4 py-2">{invoice.customer}</td>
              <td className="border px-4 py-2">${invoice.amount}</td>
              <td className="border px-4 py-2">{invoice.status}</td>
              <td className="border px-4 py-2">{invoice.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
