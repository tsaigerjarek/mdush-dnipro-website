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
    statusTitle: 'Старша збірна команда',
    description: 'Старший віковий етап підготовки вихованців спортивної школи. Участь в офіційних турнірах та перехід у дорослий футбол.',
    photo: '/media/identity/athlete-football.png',
    photoAlt: 'Старша збірна команда МДЮСШ 2008–2009 року народження',
    teamPageUrl: '/sportyvni-napriamy/#football',
  },
  {
    id: 'team-2010',
    birthYear: '2010 р.н.',
    category: 'boys',
    statusTitle: 'Випускна команда закладу',
    description: 'Випускний академічний склад МДЮСШ Дніпро. Поглиблена тактична готовність, змагальна практика та командна дисципліна.',
    photo: '/media/identity/athlete-football.png',
    photoAlt: 'Випускна команда МДЮСШ 2010 року народження',
    teamPageUrl: '/sportyvni-napriamy/#football',
  },
  {
    id: 'team-girls-2012',
    birthYear: '2012 р.н.',
    category: 'girls',
    statusTitle: 'Дівоча команда МДЮСШ',
    ageNote: 'Відділення дівочого футболу (вихованки 2012–2015 р.н.)',
    description: 'Команда дівочого футбольного відділення закладу. Системний тренувальний процес та участь у профільних дівочих змаганнях.',
    photo: '/media/identity/athlete-football.png',
    photoAlt: 'Дівоча команда МДЮСШ 2012 року народження',
    teamPageUrl: '/sportyvni-napriamy/#football',
  },
  {
    id: 'team-girls-2014',
    birthYear: '2014 р.н.',
    category: 'girls',
    statusTitle: 'Дівоча команда МДЮСШ',
    ageNote: 'Відділення дівочого футболу (вихованки 2012–2015 р.н.)',
    description: 'Молодша група дівочого футбольного відділення закладу. Розвиток індивідуальної техніки, ігрового мислення та координації.',
    photo: '/media/identity/athlete-football.png',
    photoAlt: 'Дівоча команда МДЮСШ 2014 року народження',
    teamPageUrl: '/sportyvni-napriamy/#football',
  },
];
