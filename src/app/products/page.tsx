// === app/products/page.tsx ===
'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const ProductSchema = z.object({
    name: z.string().min(2, 'Введите название'),
    price: z.coerce.number().min(1, 'Цена должна быть положительной'),
});

type ProductFormData = z.infer<typeof ProductSchema>;

export default function ProductsPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ProductFormData>({ resolver: zodResolver(ProductSchema) });

    const onSubmit = (data: ProductFormData) => {
        console.log('Создание товара:', data);
    };

    return (
        <div className="p-6 max-w-xl">
            <h1 className="text-2xl font-bold mb-4">Добавить товар</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block mb-1">Название</label>
                    <input {...register('name')} className="border p-2 w-full" />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                    <label className="block mb-1">Цена (₸)</label>
                    <input type="number" {...register('price')} className="border p-2 w-full" />
                    {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                    Сохранить
                </button>
            </form>
        </div>
    );
}