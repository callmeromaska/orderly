// === types/order.ts ===
export interface OrderItem {
    name: string
    price: number
    quantity: number
}

export interface Order {
    id: string
    customer: string
    status: string
    total: number
    items: OrderItem[]
}