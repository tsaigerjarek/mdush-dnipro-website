export interface RepresentativeTeamCard {
  id: string;
  birthYear: string;
  category: 'boys' | 'girls';
  statusTitle: string;
  description: string;
  ageNote?: string;
  photo: string;
  photoAlt: string;
  headCoach?: string;
  teamPageUrl?: string;
  nextMatch?: {
    date: string;
    time?: string;
    opponent: string;
    tournament: string;
    location?: string;
  };
  lastResult?: {
    score: string;
    opponent: string;
    outcome: 'win' | 'draw' | 'loss';
    date?: string;
  };
}

// Тільки підтверджені склади збірних команд МДЮСШ Дніпро
export const representativeTeams: RepresentativeTeamCard[] = [
  {
    id: 'team-2008-2009',
    birthYear: '2008–2009 р.н.',
    category: 'boys',
    statusTitle: 'ЗБІРНА U19',
    description: 'Старший віковий етап підготовки вихованців спортивної школи. Участь в офіційних турнірах та перехід у дорослий футбол.',
    photo: '/media/identity/athlete-football.png',
    photoAlt: 'ЗБІРНА U19 МДЮСШ 2008–2009 року народження',
    teamPageUrl: '/sportyvni-napriamy/#football',
  },
  {
    id: 'team-2010',
    birthYear: '2010 р.н.',
    category: 'boys',
    statusTitle: 'U17',
    description: 'Команда U17 (2010 р.н.) МДЮСШ Дніпро. Поглиблена тактична готовність, змагальна практика та командна дисципліна.',
    photo: '/media/identity/athlete-football.png',
    photoAlt: 'Команда U17 МДЮСШ 2010 року народження',
    teamPageUrl: '/sportyvni-napriamy/#football',
  },
  {
    id: 'team-girls-u15-u13',
    birthYear: 'U15/U13',
    category: 'girls',
    statusTitle: 'Дівоча група U15/U13',
    ageNote: 'Дівочий футбол',
    description: 'Дівоча група U15/U13 футбольного відділення закладу. Системний тренувальний процес та участь у профільних дівочих змаганнях.',
    photo: '/media/identity/athlete-football.png',
    photoAlt: 'Дівоча група U15/U13',
    teamPageUrl: '/sportyvni-napriamy/#football',
  },
  {
    id: 'team-girls-u10-u12',
    birthYear: 'U10/U12',
    category: 'girls',
    statusTitle: 'Дівоча група U10/U12',
    ageNote: 'Дівочий футбол',
    description: 'Дівоча група U10/U12 футбольного відділення закладу. Розвиток індивідуальної техніки, ігрового мислення та координації.',
    photo: '/media/identity/athlete-football.png',
    photoAlt: 'Дівоча група U10/U12',
    teamPageUrl: '/sportyvni-napriamy/#football',
  },
];
