// components/Header.tsx
'use client'
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl'

export default function Header() {
    const t= useTranslations('Header')
    return (
        <div className="bg-gray-200 w-screen shadow">
            <nav className="container flex px-2 py-2 gap-5 ">
                <Link href="/">{t('home')}</Link>
                <Link href="/about">{t('about')}</Link>
            </nav>
        </div>
    )
}