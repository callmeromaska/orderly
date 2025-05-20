// === app/login/page.tsx ===
'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export default function LoginPage() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data: any) => {
        const result = await signIn('credentials', {
            redirect: false,
            ...data,
        });
        if (result?.ok) router.push('/');
    };

    return (
        <div className="p-6 max-w-sm mx-auto">
            <h1 className="text-2xl font-bold mb-4">Вход</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label className="block mb-1">Имя пользователя</label>
                    <input {...register('username', { required: true })} className="border p-2 w-full" />
                    {errors.username && <p className="text-red-500 text-sm">Введите имя пользователя</p>}
                </div>
                <div>
                    <label className="block mb-1">Пароль</label>
                    <input type="password" {...register('password', { required: true })} className="border p-2 w-full" />
                    {errors.password && <p className="text-red-500 text-sm">Введите пароль</p>}
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Войти</button>
            </form>
        </div>
    );
}