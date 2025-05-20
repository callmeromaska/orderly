// === app/orders/page.tsx ===
'use client';
import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { Order } from '@/types/order';
import Link from 'next/link';

export default function OrdersPage() {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        api.get('/orders').then((res) => setOrders(res.data));
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Заказы</h1>
            <table className="w-full text-left border">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Клиент</th>
                        <th>Статус</th>
                        <th>Сумма</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id} className="border-t">
                            <td>{order.id}</td>
                            <td>{order.customerName}</td>
                            <td>
                                <span className={`px-2 py-1 text-white rounded ${order.status === 'pending' ? 'bg-yellow-500' :
                                        order.status === 'shipped' ? 'bg-green-500' :
                                            'bg-red-500'
                                    }`}>
                                    {order.status}
                                </span>
                            </td>
                            <td>{order.total} ₸</td>
                            <td>
                                <Link href={`/orders/${order.id}`} className="text-blue-600 underline">
                                    Просмотр
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}