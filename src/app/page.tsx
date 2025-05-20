// === app/page.tsx ===
'use client';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <p className="p-4">Загрузка...</p>;
  }

  if (status === 'unauthenticated') {
    router.push('/login');
    return null;
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        Добро пожаловать, {session?.user?.name ?? 'Гость'}!
      </h1>
      <p className="mb-4">Выберите раздел для начала работы:</p>
      <ul className="space-y-2">
        <li>
          <Link href="/orders" className="text-blue-600 hover:underline">
            📦 Заказы
          </Link>
        </li>
        <li>
          <Link href="/products" className="text-blue-600 hover:underline">
            🛍️ Товары
          </Link>
        </li>
        <li>
          <Link href="/customers" className="text-blue-600 hover:underline">
            👥 Клиенты
          </Link>
        </li>
        <li>
          <Link href="/reports" className="text-blue-600 hover:underline">
            📊 Отчёты
          </Link>
        </li>
        <li>
          <Link href="/settings" className="text-blue-600 hover:underline">
            ⚙️ Настройки
          </Link>
        </li>
      </ul>
      <div className="mt-6">
        <button
          onClick={() => signOut({ callbackUrl: '/login' })}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Выйти
        </button>
      </div>
    </main>
  );
}
