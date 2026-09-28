import { TripPage } from '@/features/trip/component/trip-page'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import type { ReactElement } from 'react'

import type { TripStatus } from '@/features/trip/types'

interface PageProps {
  searchParams: Promise<{
    q?: string | string[]
    status?: string | string[]
    page?: string | string[]
  }>
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('trips.tripList')

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
  }
}

export default async function Page({ searchParams }: PageProps): Promise<ReactElement> {
  const params = await searchParams
  const query = typeof params.q === 'string' ? params.q : ''
  const status = isTripStatus(params.status) ? params.status : 'all'
  const requestedPage = typeof params.page === 'string' ? Number(params.page) : 1
  const page = Number.isSafeInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1

  return <TripPage query={query} status={status} page={page} />
}

function isTripStatus(status: string | string[] | undefined): status is TripStatus {
  return status === 'upcoming' || status === 'planning' || status === 'past'
}
