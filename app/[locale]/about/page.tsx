'use client'
import { useTranslations } from 'next-intl'

export default function AboutPage() {

    const t = useTranslations('AboutPage')

    return (
        <div>
            {t('aboutText')}
        </div>
    )
}