// components/LocaleSwitcher.tsx

'use client'
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next-intl/client';

export default function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher')
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const onLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;
        router.replace(pathname, { locale: newLocale });
    }

    return (
        <select
            defaultValue={locale}
            onChange={onLocaleChange}
        >
            {['en', 'fr'].map((lang) => (
                <option key={lang} value={lang}>
                    {t('locale', { locale: lang })}
                </option>
            ))}
        </select>
    )
}