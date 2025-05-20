// === app/orders/[id]/page.tsx ===
import { notFound } from 'next/navigation';

// 🧪 Временные данные
const MOCK_ORDERS = [
    {
        id: '1', customer: 'Иванов И.И.', total: 5000, status: 'Доставлен', items: [
            { name: 'Ноутбук', quantity: 1, price: 5000 }
        ]
    },
    {
        id: '2', customer: 'Петров П.П.', total: 2000, status: 'В пути', items: [
            { name: 'Мышь', quantity: 2, price: 1000 }
        ]
    }
];

export default function OrderDetails({ params }: { params: { id: string } }) {
    const order = MOCK_ORDERS.find((o) => o.id === params.id);
    if (!order) return notFound();

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Заказ №{order.id}</h1>
            <p><strong>Клиент:</strong> {order.customer}</p>
            <p><strong>Статус:</strong> {order.status}</p>
            <p><strong>Сумма:</strong> {order.total} ₸</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Товары</h2>
            <ul className="list-disc pl-6">
                {order.items.map((item, i) => (
                    <li key={i}>{item.name} — {item.quantity} × {item.price} ₸</li>
                ))}
            </ul>
        </div>
    );
}
