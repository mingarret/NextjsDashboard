'use client';

import { useState } from 'react';
import { customers } from '@/app/lib/placeholder-data';

export default function CustomersPage() {
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '' });
  const [customerList, setCustomerList] = useState(customers);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCustomer.name && newCustomer.email) {
      setCustomerList([...customerList, { ...newCustomer, id: String(customerList.length + 1), image_url: '/customers/default.png' }]);
      setNewCustomer({ name: '', email: '' });
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Clientes</h1>
      <form onSubmit={handleSubmit} className="my-4">
        <input
          type="text"
          placeholder="Nombre"
          value={newCustomer.name}
          onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
          className="border p-2"
        />
        <input
          type="email"
          placeholder="Correo"
          value={newCustomer.email}
          onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
          className="border p-2 ml-2"
        />
        <button type="submit" className="ml-2 bg-blue-500 text-white p-2">Agregar</button>
      </form>
      <ul className="mt-4 space-y-2">
        {customerList.map((customer) => (
          <li key={customer.id} className="border-b p-2">
            <p>{customer.name}</p>
            <p className="text-sm text-gray-600">{customer.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
