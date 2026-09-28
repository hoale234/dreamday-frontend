import 'server-only'

import type { Locale } from '@/i18n/routing'

import { trips } from '../mocks/data'
import type { Trip, TripContent } from '../types'

export interface TripListItem extends Trip {
  content: Record<Locale, TripContent>
}

export async function getTrips(): Promise<TripListItem[]> {
  return trips
}
