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
    id: 'team-girls-2012',
    birthYear: '2012 р.н.',
    category: 'girls',
    statusTitle: 'WFU-15',
    ageNote: 'Дівочий футбол',
    description: 'Команда WFU-15 (2012 р.н.) дівочого футбольного відділення закладу. Системний тренувальний процес та участь у профільних дівочих змаганнях.',
    photo: '/media/identity/athlete-football.png',
    photoAlt: 'Дівоча команда WFU-15 2012 року народження',
    teamPageUrl: '/sportyvni-napriamy/#football',
  },
  {
    id: 'team-girls-2014',
    birthYear: '2014 р.н.',
    category: 'girls',
    statusTitle: 'WFU-12',
    ageNote: 'Дівочий футбол',
    description: 'Команда WFU-12 (2014 р.н.) дівочого футбольного відділення закладу. Розвиток індивідуальної техніки, ігрового мислення та координації.',
    photo: '/media/identity/athlete-football.png',
    photoAlt: 'Дівоча команда WFU-12 2014 року народження',
    teamPageUrl: '/sportyvni-napriamy/#football',
  },
];
