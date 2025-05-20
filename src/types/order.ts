// === types/order.ts ===
export interface Order {
    id: number;
    customerName: string;
    phone: string;
    address: string;
    status: 'pending' | 'shipped' | 'cancelled';
    total: number;
    items: { name: string; quantity: number; price: number }[];
    createdAt: string;
}