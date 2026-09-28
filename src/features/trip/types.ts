import type { Locale } from '@/i18n/routing'

export type TripStatus = 'upcoming' | 'planning' | 'past'

export interface TripContent {
  title: string
  place: string
  duration: string
  summary: string
}

export interface Trip {
  id: string
  status: TripStatus
  startDate: string
  endDate: string
  content?: Record<Locale, TripContent>
}
