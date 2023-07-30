// app/page.tsx
'use client'
import { useTranslations } from 'next-intl'


export default function HomePage() {
  const t = useTranslations('HomePage')


  return (
    <div>
      {t('helloWorld')}
    </div>
  )
}
