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
  primaryAction?: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  resultScore?: string;
}

export const weeklyItems: WeeklyItem[] = [
  {
    id: 'hero-weekly-event',
    type: 'announcement',
    status: 'upcoming',
    featured: true,
    title: 'Підготовка та тренувальний процес команд МДЮСШ до нового змагального сезону',
    summary:
      'Офіційні графіки занять, навчально-тренувальні збори юнацьких та дівочих збірних складів закладу, правила зарахування вихованців на сезон 2026/2027.',
    location: 'Спортивна база та локації МДЮСШ, м. Дніпро',
    image: '/media/hero/hero-mdush-desktop.png',
    imageAlt: 'Тренувальний процес вихованців МДЮСШ Дніпро',
    detailsUrl: '/zmahannia/',
    primaryAction: {
      label: 'Змагання та календар',
      href: '/zmahannia/',
    },
    secondaryAction: {
      label: 'Умови зарахування до закладу',
      href: '/yak-vstupyty/',
    },
  },
  {
    id: 'highlight-1',
    type: 'announcement',
    status: 'info',
    featured: false,
    title: 'ЗБІРНА КОМАНДИ U19 (2008–2009 Р.Н.)',
    summary: 'Тренувальні сесії та тактична підготовка старшого вікового складу до виступів у календарних турнірах.',
    image: '/media/hero/hero-mdush-fallback.jpg',
    imageAlt: 'Підготовка збірної U19 2008–2009 р.н.',
    detailsUrl: '/sportyvni-napriamy/#football',
    teamId: 'team-2008-2009',
  },
  {
    id: 'highlight-2',
    type: 'announcement',
    status: 'info',
    featured: false,
    title: 'Команда U17 (2010 р.н.)',
    summary: 'Формування основного складу та відпрацювання ігрових моделей команди U17 (2010 р.н.) закладу.',
    image: '/media/hero/hero-mdush-desktop.png',
    imageAlt: 'Команда U17 МДЮСШ 2010 р.н.',
    detailsUrl: '/sportyvni-napriamy/#football',
    teamId: 'team-2010',
  },
  {
    id: 'highlight-girls-u15',
    type: 'announcement',
    status: 'info',
    featured: false,
    date: '2012 р.н.',
    title: 'ДІВОЧА КОМАНДА U15',
    summary: 'Підготовка дівочої команди U15 закладу, тренувальний процес та участь у профільних змаганнях.',
    image: '/media/hero/hero-mdush-fallback.jpg',
    imageAlt: 'Дівоча команда U15 МДЮСШ Дніпро',
    detailsUrl: '/sportyvni-napriamy/#football',
    teamId: 'team-girls-2012',
  },
  {
    id: 'highlight-girls-u12',
    type: 'announcement',
    status: 'info',
    featured: false,
    date: '2014 р.н.',
    title: 'ДІВОЧА КОМАНДА U12',
    summary: 'Підготовка дівочої команди U12 закладу, розвиток техніки, ігрового мислення та участь у профільних змаганнях.',
    image: '/media/hero/hero-mdush-fallback.jpg',
    imageAlt: 'Дівоча команда U12 МДЮСШ Дніпро',
    detailsUrl: '/sportyvni-napriamy/#football',
    teamId: 'team-girls-2014',
  },
  {
    id: 'highlight-4',
    type: 'gallery',
    status: 'info',
    featured: false,
    title: 'ФІЛІЇ ЗАКЛАДУ',
    summary: 'Комплексний фізичний розвиток та базова футбольна підготовка молодших вихованців на майданчиках міста.',
    image: '/media/hero/hero-mdush-fallback.jpg',
    imageAlt: 'Тренування у філіях МДЮСШ Дніпро',
    detailsUrl: '/sportyvni-napriamy/#football',
  },
];
