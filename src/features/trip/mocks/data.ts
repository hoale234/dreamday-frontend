import type { Trip } from '../types'
import type { Locale } from '@/i18n/routing'

export type { TripStatus } from '../types'

import type { TripContent } from '../types'

type TripMock = Trip & { content: Record<Locale, TripContent> }

export const trips: TripMock[] = [
  {
    id: 'da-lat-thang-muoi',
    status: 'planning',
    startDate: '2026-10-18T00:00:00.000Z',
    endDate: '2026-10-21T00:00:00.000Z',
    content: {
      en: {
        title: 'Da Lat in the pine season',
        place: 'Da Lat',
        duration: '4 days · 3 nights',
        summary: 'A slow holiday among pine forests, coffee shops, and chilly mornings.',
      },
      vi: {
        title: 'Đà Lạt mùa thông',
        place: 'Đà Lạt',
        duration: '4 ngày · 3 đêm',
        summary: 'Một kỳ nghỉ chậm giữa rừng thông, quán cà phê và những buổi sáng se lạnh.',
      },
    },
  },
  {
    id: 'hoi-an-cuoi-thu',
    status: 'upcoming',
    startDate: '2026-11-02T00:00:00.000Z',
    endDate: '2026-11-05T00:00:00.000Z',
    content: {
      en: {
        title: 'Late autumn in Hoi An',
        place: 'Hoi An',
        duration: '4 days · 3 nights',
        summary:
          'Wander the old town, sample local food, and watch the sunset over the Hoai River.',
      },
      vi: {
        title: 'Hội An cuối thu',
        place: 'Hội An',
        duration: '4 ngày · 3 đêm',
        summary: 'Dạo phố cổ, thưởng thức ẩm thực địa phương và đón hoàng hôn bên sông Hoài.',
      },
    },
  },
  {
    id: 'lan-ha-thang-bay',
    status: 'past',
    startDate: '2026-07-15T00:00:00.000Z',
    endDate: '2026-07-17T00:00:00.000Z',
    content: {
      en: {
        title: 'Lan Ha Bay',
        place: 'Lan Ha Bay',
        duration: '3 days · 2 nights',
        summary: 'Three days on a quiet bay, kayaking, and visiting small fishing villages.',
      },
      vi: {
        title: 'Vịnh Lan Hạ',
        place: 'Vịnh Lan Hạ',
        duration: '3 ngày · 2 đêm',
        summary: 'Ba ngày trên mặt vịnh yên tĩnh, chèo kayak và khám phá những làng chài nhỏ.',
      },
    },
  },
  {
    id: 'da-lat-cuoi-nam',
    status: 'planning',
    startDate: '2026-12-12T00:00:00.000Z',
    endDate: '2026-12-15T00:00:00.000Z',
    content: {
      en: {
        title: 'Da Lat at year-end',
        place: 'Da Lat',
        duration: '4 days · 3 nights',
        summary: 'Small hillside roads, flower gardens, and a cozy dinner in the year-end season.',
      },
      vi: {
        title: 'Đà Lạt cuối năm',
        place: 'Đà Lạt',
        duration: '4 ngày · 3 đêm',
        summary: 'Những con dốc nhỏ, vườn hoa và một bữa tối ấm cúng trong mùa cuối năm.',
      },
    },
  },
  {
    id: 'hoi-an-ben-song',
    status: 'past',
    startDate: '2026-05-22T00:00:00.000Z',
    endDate: '2026-05-25T00:00:00.000Z',
    content: {
      en: {
        title: 'Hoi An by the river',
        place: 'Hoi An',
        duration: '4 days · 3 nights',
        summary:
          'A slower pace by the Hoai River, with mornings in town and afternoons in the countryside.',
      },
      vi: {
        title: 'Hội An bên sông',
        place: 'Hội An',
        duration: '4 ngày · 3 đêm',
        summary: 'Nhịp sống chậm bên sông Hoài với những buổi sáng trong phố và chiều ở làng quê.',
      },
    },
  },
  {
    id: 'lan-ha-dau-nam',
    status: 'upcoming',
    startDate: '2027-01-10T00:00:00.000Z',
    endDate: '2027-01-13T00:00:00.000Z',
    content: {
      en: {
        title: 'Lan Ha Bay in the new year',
        place: 'Lan Ha Bay',
        duration: '4 days · 3 nights',
        summary: 'A quiet winter escape focused on rest and watching the bay at dawn.',
      },
      vi: {
        title: 'Lan Hạ đầu năm',
        place: 'Vịnh Lan Hạ',
        duration: '4 ngày · 3 đêm',
        summary: 'Một hành trình mùa đông yên tĩnh, ưu tiên nghỉ ngơi và ngắm vịnh lúc sớm mai.',
      },
    },
  },
]
