import { getLocale, getTranslations } from 'next-intl/server'
import type { ReactElement } from 'react'

import { Link } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'

import type { TripListItem } from '../data/get-trips'
import type { TripStatus } from '../types'
import { TripCard } from './trip-card'
import { TripEmptyState } from './trip-empty-state'
import { TripSearchFilters } from './trip-search-filters'

const tripsPerPage = 3

interface TripListProps {
  trips: TripListItem[]
  query: string
  status: 'all' | TripStatus
  page: number
}

export async function TripList({
  trips,
  query,
  status,
  page,
}: TripListProps): Promise<ReactElement> {
  const [t, locale] = await Promise.all([getTranslations('trips.tripList'), getLocale()])
  const tripLocale = routing.locales.find((supportedLocale) => supportedLocale === locale)

  if (!tripLocale) {
    throw new Error(`Unsupported trip locale: ${locale}`)
  }

  const normalizedQuery = query.trim().toLocaleLowerCase(tripLocale)
  const filteredTrips = trips.filter((trip) => {
    const content = trip.content[tripLocale]
    const matchesQuery = `${content.title} ${content.place}`
      .toLocaleLowerCase(tripLocale)
      .includes(normalizedQuery)
    const matchesStatus = status === 'all' || trip.status === status

    return matchesQuery && matchesStatus
  })
  const currentPage = Math.min(page, Math.max(1, Math.ceil(filteredTrips.length / tripsPerPage)))
  const visibleTrips = filteredTrips.slice(0, currentPage * tripsPerPage)
  const hasMoreTrips = visibleTrips.length < filteredTrips.length

  return (
    <>
      <TripSearchFilters query={query} activeStatus={status} />

      <div className="my-6 flex items-baseline justify-between gap-4">
        <h2 className="text-trip-forest m-0 text-xl font-medium">{t('list.title')}</h2>
        <p className="text-trip-muted m-0 text-sm" aria-live="polite">
          {t('list.count', { count: filteredTrips.length })}
        </p>
      </div>

      {visibleTrips.length > 0 ? (
        <ul className="trip-tablet:grid-cols-2 trip-wide:grid-cols-3 m-0 grid list-none gap-5 p-0">
          {visibleTrips.map((trip) => (
            <li className="min-w-0" key={trip.id}>
              <TripCard trip={trip} content={trip.content[tripLocale]} />
            </li>
          ))}
        </ul>
      ) : (
        <TripEmptyState />
      )}

      {hasMoreTrips && (
        <div className="mt-8 flex justify-center">
          <Link
            className="border-trip-border-strong bg-trip-surface text-trip-forest hover:bg-trip-page min-h-11 rounded-lg border px-5 py-2 text-sm font-medium transition-colors"
            href={{
              pathname: '/trip',
              query: {
                ...(query ? { q: query } : {}),
                ...(status !== 'all' ? { status } : {}),
                page: String(currentPage + 1),
              },
            }}
          >
            {t('actions.loadMore')}
          </Link>
        </div>
      )}
    </>
  )
}
