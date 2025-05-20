// === server/api/orders/[id]/route.ts ===
import { NextRequest, NextResponse } from 'next/server';

const dummyOrders = [
    {
        id: 1012,
        customerName: 'Иванов И.И.',
        phone: '+7 707 000 0000',
        address: 'ул. Абая 12',
        status: 'pending',
        total: 12000,
        items: [
            { name: 'Наушники Xiaomi', quantity: 2, price: 6000 },
        ],
        createdAt: '2025-05-14T08:30:00Z'
    }
];

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const order = dummyOrders.find((o) => o.id.toString() === params.id);
    if (!order) return NextResponse.json({ error: 'Не найдено' }, { status: 404 });
    return NextResponse.json(order);
}
