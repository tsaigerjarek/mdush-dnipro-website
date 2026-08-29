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
    title: 'Старша збірна команда (2008–2009 р.н.): Етап підготовки',
    summary: 'Тренувальні сесії та тактична підготовка старшого вікового складу до виступів у календарних турнірах.',
    image: '/media/hero/hero-mdush-fallback.jpg',
    imageAlt: 'Підготовка старшої збірної команди 2008–2009 р.н.',
    detailsUrl: '/sportyvni-napriamy/#football',
    teamId: 'team-2008-2009',
  },
  {
    id: 'highlight-2',
    type: 'announcement',
    status: 'info',
    featured: false,
    title: 'Випускна команда (2010 р.н.): Навчально-тренувальний план',
    summary: 'Формування основного складу та відпрацювання ігрових моделей випускної вікової групи закладу.',
    image: '/media/hero/hero-mdush-desktop.png',
    imageAlt: 'Випускна команда МДЮСШ 2010 р.н.',
    detailsUrl: '/sportyvni-napriamy/#football',
    teamId: 'team-2010',
  },
  {
    id: 'highlight-3',
    type: 'announcement',
    status: 'info',
    featured: false,
    title: 'Дівоче відділення футболу (2012–2015 р.н.): Тренувальний процес',
    summary: 'Підготовка дівочих команд закладу (2012 р.н. та 2014 р.н.) до участі у профільних дівочих змаганнях.',
    image: '/media/hero/hero-mdush-fallback.jpg',
    imageAlt: 'Дівоче відділення футболу МДЮСШ Дніпро',
    detailsUrl: '/sportyvni-napriamy/#football',
    teamId: 'team-girls-2012',
  },
  {
    id: 'highlight-4',
    type: 'gallery',
    status: 'info',
    featured: false,
    title: 'Заняття вихованців у районних філіях закладу',
    summary: 'Комплексний фізичний розвиток та базова футбольна підготовка молодших вихованців на майданчиках міста.',
    image: '/media/hero/hero-mdush-fallback.jpg',
    imageAlt: 'Тренування у філіях МДЮСШ Дніпро',
    detailsUrl: '/sportyvni-napriamy/#football',
  },
];
