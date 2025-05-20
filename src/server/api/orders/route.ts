// === server/api/orders/route.ts ===
// Note: This is a simplified API route using Next.js 13+ App Router handler
import { NextResponse } from 'next/server';

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

export async function GET() {
    return NextResponse.json(dummyOrders);
}
