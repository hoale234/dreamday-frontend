import { Search01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { getTranslations } from 'next-intl/server'
import type { ReactElement } from 'react'

import { Link } from '@/i18n/navigation'

export async function TripEmptyState(): Promise<ReactElement> {
  const t = await getTranslations('trips.tripList')

  return (
    <section
      className="border-trip-border bg-trip-surface grid justify-items-center gap-3 rounded-xl border px-5 py-12 text-center"
      aria-labelledby="empty-title"
    >
      <span className="text-trip-forest" aria-hidden="true">
        <HugeiconsIcon icon={Search01Icon} size={32} strokeWidth={1.8} />
      </span>
      <h2 className="text-trip-empty-title text-trip-forest m-0 font-medium" id="empty-title">
        {t('empty.title')}
      </h2>
      <p className="max-w-trip-empty text-trip-muted m-0">{t('empty.description')}</p>
      <Link
        className="border-trip-border-strong text-trip-forest hover:border-trip-forest hover:bg-trip-page mt-3 min-h-12 rounded-lg border px-5 py-2 font-medium no-underline"
        href="/trip"
      >
        {t('empty.clearFilters')}
      </Link>
    </section>
  )
}
