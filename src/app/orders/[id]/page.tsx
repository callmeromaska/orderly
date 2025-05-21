"use client"
import { notFound } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Order } from '@/types/order'
import api from '@/lib/api'

export default function OrderDetails({ params }: { params: { id: string } }) {
    const [order, setOrder] = useState<Order | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        api.get(`/orders/${params.id}`)
            .then((res) => {
                console.log('Данные заказа:', res.data)
                setOrder(res.data)
            })
            .catch((err) => {
                console.error('Ошибка при получении заказа:', err)
                setOrder(null) // Условие для notFound
            })
            .finally(() => setLoading(false))
    }, [params.id])

    if (loading) {
        return <div>Загрузка...</div>
    }

    if (order === null) return notFound()

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Заказ №{order?.id}</h1>
            <p><strong>Клиент:</strong> {order?.customer}</p>
            <p><strong>Статус:</strong> {order?.status}</p>
            <p><strong>Сумма:</strong> {order?.total} ₸</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Товары</h2>
            <ul className="list-disc pl-6">
                {order?.items.map((item, i) => (
                    <li key={i}>
                        {item.name} — {item.quantity} × {item.price} ₸
                    </li>
                ))}
            </ul>
        </div>
    )
}
