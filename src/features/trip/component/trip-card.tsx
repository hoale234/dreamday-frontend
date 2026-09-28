import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { getFormatter, getTranslations } from 'next-intl/server'
import type { ReactElement } from 'react'

import { Link } from '@/i18n/navigation'

import type { TripListItem } from '../data/get-trips'
import type { TripContent } from '../types'

interface TripCardProps {
  trip: TripListItem
  content: TripContent
}

export async function TripCard({ trip, content }: TripCardProps): Promise<ReactElement> {
  const [t, formatter] = await Promise.all([getTranslations('trips.tripList'), getFormatter()])
  const date = formatter.dateTimeRange(new Date(trip.startDate), new Date(trip.endDate), {
    dateStyle: 'long',
    timeZone: 'UTC',
  })

  return (
    <Link
      className="group border-trip-border bg-trip-surface text-trip-ink shadow-trip-card hover:border-trip-border-strong hover:shadow-trip-card-hover grid overflow-hidden rounded-xl border no-underline transition hover:-translate-y-0.5"
      href={{ pathname: '/#', query: { trip: trip.id } }}
    >
      <div className="aspect-trip-card bg-trip-card-art flex items-end p-4">
        <span className="bg-trip-forest/85 rounded-full px-3 py-1 text-xs text-white">
          {content.place}
        </span>
      </div>
      <div className="grid content-start gap-4 p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="text-trip-card-title text-trip-forest m-0 font-medium tracking-tight">
            {content.title}
          </h3>
          <span
            className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${trip.status === 'upcoming' ? 'bg-trip-status-upcoming text-trip-status-upcoming-ink' : trip.status === 'planning' ? 'bg-trip-status-planning text-trip-status-planning-ink' : 'bg-trip-status-past text-trip-status-past-ink'}`}
          >
            {t(`filters.statuses.${trip.status}`)}
          </span>
        </div>
        <p className="text-trip-card-date text-trip-ink m-0">{date}</p>
        <p className="text-trip-muted m-0 line-clamp-3 text-sm leading-relaxed">
          {content.summary}
        </p>
        <div className="border-trip-border text-trip-card-action text-trip-muted flex items-center justify-between gap-3 border-t pt-4">
          <span>{content.duration}</span>
          <strong className="text-trip-forest inline-flex items-center gap-1">
            {t('actions.viewDetails')}
            <HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} aria-hidden="true" />
          </strong>
        </div>
      </div>
    </Link>
  )
}
