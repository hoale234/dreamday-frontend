import { Tick02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { cva } from 'class-variance-authority'
import { getTranslations } from 'next-intl/server'
import type { ReactElement } from 'react'

import { Link } from '@/i18n/navigation'
import { cn } from '@/utils/cn'

import type { TripStatus } from '../types'

type StatusFilter = 'all' | TripStatus

interface TripSearchFiltersProps {
  query: string
  activeStatus: StatusFilter
}

const statusFilters: StatusFilter[] = ['all', 'upcoming', 'planning', 'past']
const statusFilterButtonVariants = cva(
  'inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors',
  {
    variants: {
      selected: {
        true: 'border-trip-forest bg-trip-forest text-white',
        false:
          'border-trip-border-strong bg-transparent text-trip-muted hover:border-trip-forest hover:text-trip-forest',
      },
    },
    defaultVariants: {
      selected: false,
    },
  },
)

export async function TripSearchFilters({
  query,
  activeStatus,
}: TripSearchFiltersProps): Promise<ReactElement> {
  const t = await getTranslations('trips.tripList')

  const statusLabels: Record<StatusFilter, string> = {
    all: t('filters.statuses.all'),
    upcoming: t('filters.statuses.upcoming'),
    planning: t('filters.statuses.planning'),
    past: t('filters.statuses.past'),
  }

  return (
    <section
      className="border-trip-border trip-tablet:grid-cols-trip-filters trip-tablet:items-end mt-8 grid gap-5 border-b pb-6"
      aria-label={t('filters.label')}
    >
      <form className="grid gap-2" method="get">
        <label className="text-trip-ink grid gap-2 text-sm font-semibold" htmlFor="trip-search">
          {t('filters.searchLabel')}
          <input
            className="border-trip-border-strong bg-trip-surface placeholder:text-trip-placeholder focus:border-trip-forest focus:ring-trip-forest/10 min-h-13 rounded-lg border px-4 py-3 font-normal outline-none focus:ring-4"
            id="trip-search"
            name="q"
            type="search"
            defaultValue={query}
            placeholder={t('filters.searchPlaceholder')}
            autoComplete="off"
          />
        </label>
        {activeStatus !== 'all' && <input name="status" type="hidden" value={activeStatus} />}
        <button
          className="bg-trip-forest hover:bg-trip-forest-hover min-h-11 rounded-lg px-4 py-2 text-sm font-medium text-white"
          type="submit"
        >
          {t('actions.search')}
        </button>
      </form>

      <fieldset className="m-0 min-w-0 border-0 p-0">
        <legend className="sr-only">{t('filters.statusLabel')}</legend>
        <div className="trip-tablet:justify-end flex gap-2 overflow-x-auto pb-0.5">
          {statusFilters.map((status) => {
            const selected = activeStatus === status

            return (
              <Link
                className={cn(statusFilterButtonVariants({ selected }))}
                key={status}
                aria-current={selected ? 'page' : undefined}
                href={{
                  pathname: '/trip',
                  query: {
                    ...(query ? { q: query } : {}),
                    ...(status !== 'all' ? { status } : {}),
                  },
                }}
              >
                {selected && (
                  <HugeiconsIcon icon={Tick02Icon} size={16} strokeWidth={2} aria-hidden="true" />
                )}
                {statusLabels[status]}
              </Link>
            )
          })}
        </div>
      </fieldset>
    </section>
  )
}
