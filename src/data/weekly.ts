export interface WeeklyItem {
  id: string;
  type: 'match' | 'video' | 'result' | 'announcement' | 'gallery';
  status: 'live' | 'upcoming' | 'completed' | 'info';
  featured: boolean;
  title: string;
  summary: string;
  date?: string;
  time?: string;
  location?: string;
  image: string;
  imageAlt: string;
  youtubeId?: string;
  detailsUrl?: string;
  teamId?: string;
  branchId?: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  resultScore?: string;
}

export const weeklyItems: WeeklyItem[] = [
  {
    id: 'hero-season-2026-27',
    type: 'announcement',
    status: 'info',
    featured: true,
    title: 'Сезон 2026/2027 триває',
    summary:
      'Команди МДЮСШ Дніпро беруть участь у змаганнях сезону 2026/2027. На сайті публікуються підтверджені анонси, результати, новини та матеріали про юнацькі й дівочі команди закладу.',
    location: 'МДЮСШ Дніпро',
    image: '/media/hero/hero-mdush-desktop.png',
    imageAlt: 'Сезон 2026/2027 МДЮСШ Дніпро',
    detailsUrl: '/zmahannia/',
    primaryAction: { label: 'Змагання та календар', href: '/zmahannia/' },
    secondaryAction: { label: 'Новини МДЮСШ', href: '/novyny/' },
  },
  {
    id: 'highlight-u19',
    type: 'announcement',
    status: 'info',
    featured: false,
    title: 'ЗБІРНА U19',
    summary: 'Старша юнацька команда МДЮСШ Дніпро у сезоні 2026/2027.',
    image: '/media/hero/hero-mdush-fallback.jpg',
    imageAlt: 'Збірна U19 МДЮСШ Дніпро',
    detailsUrl: '/sportyvni-napriamy/#football',
    teamId: 'team-2008-2009',
  },
  {
    id: 'highlight-u17',
    type: 'announcement',
    status: 'info',
    featured: false,
    title: 'Команда U17 · 2010 р.н.',
    summary: 'Команда U17 МДЮСШ Дніпро у змагальному сезоні 2026/2027.',
    image: '/media/hero/hero-mdush-desktop.png',
    imageAlt: 'Команда U17 МДЮСШ Дніпро 2010 р.н.',
    detailsUrl: '/sportyvni-napriamy/#football',
    teamId: 'team-2010',
  },
  {
    id: 'highlight-girls-u15-u13',
    type: 'announcement',
    status: 'info',
    featured: false,
    title: 'Дівочий футбол · U15/U13',
    summary: 'Дівочі команди МДЮСШ Дніпро: тренувальний процес та участь у змаганнях сезону 2026/2027.',
    image: '/media/hero/hero-mdush-fallback.jpg',
    imageAlt: 'Дівочий футбол МДЮСШ Дніпро U15 та U13',
    detailsUrl: '/sportyvni-napriamy/#football',
    teamId: 'team-girls-u15-u13',
  },
  {
    id: 'highlight-girls-u10-u12',
    type: 'announcement',
    status: 'info',
    featured: false,
    title: 'Дівочий футбол · U10/U12',
    summary: 'Молодші дівочі групи футбольного відділення МДЮСШ Дніпро.',
    image: '/media/hero/hero-mdush-fallback.jpg',
    imageAlt: 'Дівочі футбольні групи МДЮСШ Дніпро U10 та U12',
    detailsUrl: '/sportyvni-napriamy/#football',
    teamId: 'team-girls-u10-u12',
  },
  {
    id: 'highlight-branches',
    type: 'gallery',
    status: 'info',
    featured: false,
    title: 'Філії закладу',
    summary: 'Базова футбольна підготовка молодших вихованців на спортивних майданчиках міста.',
    image: '/media/hero/hero-mdush-fallback.jpg',
    imageAlt: 'Тренування у філіях МДЮСШ Дніпро',
    detailsUrl: '/sportyvni-napriamy/#football',
  },
];
