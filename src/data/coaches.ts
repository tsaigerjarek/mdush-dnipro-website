export type SportDirection = 'football' | 'table-tennis' | 'cheerleading';

export type CoachRole =
  | 'head-coach'
  | 'coach'
  | 'goalkeeper-coach'
  | 'fitness-coach'
  | 'specialist';

export interface Coach {
  id: string;
  name: string;
  role: string;
  roleType?: CoachRole;
  sport: SportDirection;
  group?: string;
  teamId?: string;
  photo?: string;
  photoAlt?: string;
  detailsUrl?: string;
  publicProfile: boolean;
}

export interface CoachingStaffGroup {
  id: string;
  sport: SportDirection;
  teamName: string;
  birthYear?: string;
  category?: 'boys' | 'girls' | 'mixed';
  stageName?: string;
  description?: string;
  coaches: Coach[];
}

export interface SportStaffSection {
  id: string;
  sport: SportDirection;
  title: string;
  statusNotice?: string;
  groups: CoachingStaffGroup[];
}

// Список тренерів МДЮСШ Дніпро (публікуються лише після офіційного погодження)
export const coaches: Coach[] = [];

// Підтверджена структура футбольних тренерських штабів за віковими етапами підготовки
export const footballStaffGroups: CoachingStaffGroup[] = [
  {
    id: 'staff-u19',
    sport: 'football',
    teamName: 'ЗБІРНА U19',
    birthYear: '2008–2009 р.н.',
    category: 'boys',
    stageName: 'Збірна U19',
    description: 'Завершальний етап юнацької підготовки в системі МДЮСШ та перехід у дорослий футбол.',
    coaches: [],
  },
  {
    id: 'staff-specialized',
    sport: 'football',
    teamName: 'Спеціалізована підготовка (U14–U17)',
    birthYear: '2010–2013 р.н.',
    category: 'boys',
    stageName: 'Спеціалізована підготовка (від 14 до 17 років)',
    description: 'U14–U17 — футбольні команди / навчальні групи (2013, 2012, 2011, 2010 р.н.). Збільшується обсяг тренувальних і змагальних навантажень, удосконалюються індивідуальні технічні й тактичні дії футболістів. Команди беруть участь у місцевих, регіональних та всеукраїнських змаганнях.',
    coaches: [],
  },
  {
    id: 'staff-basic',
    sport: 'football',
    teamName: 'Базова підготовка (U10–U13)',
    birthYear: '2014–2017 р.н.',
    category: 'boys',
    stageName: 'Базова підготовка (від 10 до 13 років)',
    description: 'U10–U13 — навчальні групи (2017, 2016, 2015, 2014 р.н.). Поступово збільшуються тренувальні та змагальні навантаження, формуються футбольні команди для участі у місцевих і регіональних змаганнях та турнірах.',
    coaches: [],
  },
  {
    id: 'staff-girls',
    sport: 'football',
    teamName: 'Відділення дівочого футболу',
    birthYear: '2012–2015 р.н.',
    category: 'girls',
    stageName: 'Жіночий футбол',
    description: 'Спеціалізовані дівочі навчально-тренувальні групи закладу (2012 р.н., 2014 р.н.), системний тренувальний процес та змагальна практика.',
    coaches: [],
  },
];

export function getPublicCoaches(sport?: SportDirection, groupId?: string): Coach[] {
  return coaches.filter(
    (coach) =>
      coach.publicProfile &&
      (!sport || coach.sport === sport) &&
      (!groupId || coach.teamId === groupId || coach.group === groupId)
  );
}
