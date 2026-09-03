export type SportDirection = 'football' | 'table-tennis' | 'cheerleading';

export interface Coach {
  id: string;
  name: string;
  role: string;
  sport: SportDirection;
  team: string;
  birthYearGroup?: string;
  photo?: string;
  publicProfile: boolean;
}

export interface CoachingSubgroup {
  id: string;
  teamName: string;
  birthYear: string;
  coaches: Coach[];
}

export interface CoachingStaffGroup {
  id: string;
  sport: SportDirection;
  teamName: string;
  ageCategory?: string;
  birthYear?: string;
  category?: 'boys' | 'girls' | 'mixed';
  stageName?: string;
  description?: string;
  subgroups?: CoachingSubgroup[];
  coaches: Coach[];
}

export interface SportStaffSection {
  id: string;
  sport: SportDirection;
  title: string;
  statusNotice?: string;
  groups: CoachingStaffGroup[];
}

// Підтверджений список тренерів МДЮСШ Дніпро на сезон 2026/2027
export const coaches: Coach[] = [
  // ЗБІРНА U19 (2008–2009 р.н.)
  {
    id: 'coach-volivach-oleh-u19',
    name: 'Волівач Олег Іванович',
    role: 'Тренер',
    sport: 'football',
    team: 'ЗБІРНА U19',
    birthYearGroup: '2008–2009 р.н.',
    photo: '/media/coaches/volivach-oleh.jpg',
    publicProfile: true,
  },
  {
    id: 'coach-kravchenko-oleksandr-u19',
    name: 'Кравченко Олександр Іванович',
    role: 'Тренер',
    sport: 'football',
    team: 'ЗБІРНА U19',
    birthYearGroup: '2008–2009 р.н.',
    photo: '/media/coaches/kravchenko-oleksandr.jpg',
    publicProfile: true,
  },
  {
    id: 'coach-kulko-andrii-u19',
    name: 'Кулько Андрій Анатолійович',
    role: 'Тренер воротарів',
    sport: 'football',
    team: 'ЗБІРНА U19',
    birthYearGroup: '2008–2009 р.н.',
    publicProfile: true,
  },

  // U17 (2010 р.н.)
  {
    id: 'coach-fedotov-vitalii-u17',
    name: 'Федотов Віталій Юрійович',
    role: 'Тренер',
    sport: 'football',
    team: 'U17',
    birthYearGroup: '2010 р.н.',
    photo: '/media/coaches/fedotov-vitalii.jpg',
    publicProfile: true,
  },
  {
    id: 'coach-ivaniushchenko-vladyslav-u17',
    name: 'Іванющенко Владислав Сергійович',
    role: 'Тренер',
    sport: 'football',
    team: 'U17',
    birthYearGroup: '2010 р.н.',
    photo: '/media/coaches/ivaniushchenko-vladyslav.jpg',
    publicProfile: true,
  },
  {
    id: 'coach-kulko-andrii-u17',
    name: 'Кулько Андрій Анатолійович',
    role: 'Тренер воротарів',
    sport: 'football',
    team: 'U17',
    birthYearGroup: '2010 р.н.',
    publicProfile: true,
  },

  // U16 (2011 р.н.)
  {
    id: 'coach-darenko-maksym-u16',
    name: 'Даренко Максим Вадимович',
    role: 'Тренер',
    sport: 'football',
    team: 'U16',
    birthYearGroup: '2011 р.н.',
    photo: '/media/coaches/darenko-maksym.jpg',
    publicProfile: true,
  },
  {
    id: 'coach-shevchenko-pavlo-u16',
    name: 'Шевченко Павло Васильович',
    role: 'Тренер',
    sport: 'football',
    team: 'U16',
    birthYearGroup: '2011 р.н.',
    photo: '/media/coaches/shevchenko-pavlo.jpg',
    publicProfile: true,
  },
  {
    id: 'coach-bobrovskyi-andrii-u16',
    name: 'Бобровський Андрій Сергійович',
    role: 'Тренер воротарів',
    sport: 'football',
    team: 'U16',
    birthYearGroup: '2011 р.н.',
    photo: '/media/coaches/bobrovskyi-andrii.jpg',
    publicProfile: true,
  },

  // U15 (2012 р.н.)
  {
    id: 'coach-fetisov-yevhenii-u15',
    name: 'Фетісов Євгеній В’ячеславович',
    role: 'Тренер',
    sport: 'football',
    team: 'U15',
    birthYearGroup: '2012 р.н.',
    photo: '/media/coaches/fetisov-yevhenii.jpg',
    publicProfile: true,
  },
  {
    id: 'coach-sosna-ivan-u15',
    name: 'Сосна Іван Русланович',
    role: 'Тренер',
    sport: 'football',
    team: 'U15',
    birthYearGroup: '2012 р.н.',
    photo: '/media/coaches/sosna-ivan.jpg',
    publicProfile: true,
  },
  {
    id: 'coach-bobrovskyi-andrii-u15',
    name: 'Бобровський Андрій Сергійович',
    role: 'Тренер воротарів',
    sport: 'football',
    team: 'U15',
    birthYearGroup: '2012 р.н.',
    photo: '/media/coaches/bobrovskyi-andrii.jpg',
    publicProfile: true,
  },

  // U14 (2013 р.н.)
  {
    id: 'coach-shevchenko-kostiantyn-u14',
    name: 'Шевченко Костянтин Вікторович',
    role: 'Тренер',
    sport: 'football',
    team: 'U14',
    birthYearGroup: '2013 р.н.',
    photo: '/media/coaches/shevchenko-kostiantyn.jpg',
    publicProfile: true,
  },
  {
    id: 'coach-dymarchuk-oleksandr-u14',
    name: 'Димарчук Олександр Сергійович',
    role: 'Тренер',
    sport: 'football',
    team: 'U14',
    birthYearGroup: '2013 р.н.',
    photo: '/media/coaches/dymarchuk-oleksandr.jpg',
    publicProfile: true,
  },
  {
    id: 'coach-kulko-andrii-u14',
    name: 'Кулько Андрій Анатолійович',
    role: 'Тренер воротарів',
    sport: 'football',
    team: 'U14',
    birthYearGroup: '2013 р.н.',
    publicProfile: true,
  },

  // БАЗОВА ПІДГОТОВКА: U13 (2014 р.н.)
  {
    id: 'coach-lus-serhii-u13',
    name: 'Лусь Сергій Петрович',
    role: 'Тренер',
    sport: 'football',
    team: 'U13',
    birthYearGroup: '2014 р.н.',
    photo: '/media/coaches/lus-serhii.jpg',
    publicProfile: true,
  },
  {
    id: 'coach-volivach-oleh-u13',
    name: 'Волівач Олег Іванович',
    role: 'Тренер',
    sport: 'football',
    team: 'U13',
    birthYearGroup: '2014 р.н.',
    photo: '/media/coaches/volivach-oleh.jpg',
    publicProfile: true,
  },
  {
    id: 'coach-honcharov-maksym-u13',
    name: 'Гончаров Максим Антонович',
    role: 'Тренер воротарів',
    sport: 'football',
    team: 'U13',
    birthYearGroup: '2014 р.н.',
    publicProfile: true,
  },

  // БАЗОВА ПІДГОТОВКА: U12 (2015 р.н.)
  {
    id: 'coach-nikitenkov-yurii-u12',
    name: 'Нікітенков Юрій Олександрович',
    role: 'Тренер',
    sport: 'football',
    team: 'U12',
    birthYearGroup: '2015 р.н.',
    photo: '/media/coaches/nikitenkov-yurii.jpg',
    publicProfile: true,
  },
  {
    id: 'coach-koriakovtsev-yevhenii-u12',
    name: 'Коряковцев Євгеній Володимирович',
    role: 'Тренер',
    sport: 'football',
    team: 'U12',
    birthYearGroup: '2015 р.н.',
    publicProfile: true,
  },
  {
    id: 'coach-barkar-mykyta-u12',
    name: 'Баркар Микита Олексійович',
    role: 'Тренер воротарів',
    sport: 'football',
    team: 'U12',
    birthYearGroup: '2015 р.н.',
    publicProfile: true,
  },

  // БАЗОВА ПІДГОТОВКА: U11 (2016 р.н.)
  {
    id: 'coach-ivaniushchenko-vladyslav-u11',
    name: 'Іванющенко Владислав Сергійович',
    role: 'Тренер',
    sport: 'football',
    team: 'U11',
    birthYearGroup: '2016 р.н.',
    photo: '/media/coaches/ivaniushchenko-vladyslav.jpg',
    publicProfile: true,
  },
  {
    id: 'coach-sharko-anton-u11',
    name: 'Шарко Антон Анатолійович',
    role: 'Тренер',
    sport: 'football',
    team: 'U11',
    birthYearGroup: '2016 р.н.',
    photo: '/media/coaches/sharko-anton.jpg',
    publicProfile: true,
  },
  {
    id: 'coach-barkar-mykyta-u11',
    name: 'Баркар Микита Олексійович',
    role: 'Тренер воротарів',
    sport: 'football',
    team: 'U11',
    birthYearGroup: '2016 р.н.',
    publicProfile: true,
  },

  // БАЗОВА ПІДГОТОВКА: U10 (2017 р.н.)
  {
    id: 'coach-darenko-maksym-u10',
    name: 'Даренко Максим Вадимович',
    role: 'Тренер',
    sport: 'football',
    team: 'U10',
    birthYearGroup: '2017 р.н.',
    photo: '/media/coaches/darenko-maksym.jpg',
    publicProfile: true,
  },
  {
    id: 'coach-shevchenko-pavlo-u10',
    name: 'Шевченко Павло Васильович',
    role: 'Тренер',
    sport: 'football',
    team: 'U10',
    birthYearGroup: '2017 р.н.',
    photo: '/media/coaches/shevchenko-pavlo.jpg',
    publicProfile: true,
  },
  {
    id: 'coach-kushnir-anatolii-u10',
    name: 'Кушнір Анатолій Анатолійович',
    role: 'Тренер',
    sport: 'football',
    team: 'U10',
    birthYearGroup: '2017 р.н.',
    publicProfile: true,
  },
  {
    id: 'coach-barkar-mykyta-u10',
    name: 'Баркар Микита Олексійович',
    role: 'Тренер воротарів',
    sport: 'football',
    team: 'U10',
    birthYearGroup: '2017 р.н.',
    publicProfile: true,
  },

  // БАЗОВА ПІДГОТОВКА: U9 (2018 р.н.)
  {
    id: 'coach-fetisov-yevhenii-u9',
    name: 'Фетісов Євгеній В’ячеславович',
    role: 'Тренер',
    sport: 'football',
    team: 'U9',
    birthYearGroup: '2018 р.н.',
    photo: '/media/coaches/fetisov-yevhenii.jpg',
    publicProfile: true,
  },
  {
    id: 'coach-sosna-ivan-u9',
    name: 'Сосна Іван Русланович',
    role: 'Тренер',
    sport: 'football',
    team: 'U9',
    birthYearGroup: '2018 р.н.',
    photo: '/media/coaches/sosna-ivan.jpg',
    publicProfile: true,
  },
  {
    id: 'coach-kravchenko-oleksandr-u9',
    name: 'Кравченко Олександр Іванович',
    role: 'Тренер',
    sport: 'football',
    team: 'U9',
    birthYearGroup: '2018 р.н.',
    photo: '/media/coaches/kravchenko-oleksandr.jpg',
    publicProfile: true,
  },
  {
    id: 'coach-bobrovskyi-andrii-u9',
    name: 'Бобровський Андрій Сергійович',
    role: 'Тренер воротарів',
    sport: 'football',
    team: 'U9',
    birthYearGroup: '2018 р.н.',
    photo: '/media/coaches/bobrovskyi-andrii.jpg',
    publicProfile: true,
  },

  // ДІВОЧИЙ ФУТБОЛ: ДІВОЧІ ГРУПИ U15/U13
  {
    id: 'coach-kudziiev-ruslan-girls-u15-u13',
    name: 'Кудзієв Руслан Германович',
    role: 'Тренер',
    sport: 'football',
    team: 'ДІВОЧІ ГРУПИ U15/U13',
    publicProfile: true,
  },
  {
    id: 'coach-belik-viktoriia-girls-u15-u13',
    name: 'Бєлік Вікторія Володимирівна',
    role: 'Тренер',
    sport: 'football',
    team: 'ДІВОЧІ ГРУПИ U15/U13',
    publicProfile: true,
  },
  {
    id: 'coach-kudziieva-olena-girls-u15-u13',
    name: 'Кудзієва Олена Юріївна',
    role: 'Тренер',
    sport: 'football',
    team: 'ДІВОЧІ ГРУПИ U15/U13',
    publicProfile: true,
  },

  // ДІВОЧИЙ ФУТБОЛ: ДІВОЧІ ГРУПИ U10/U12
  {
    id: 'coach-belik-viktoriia-girls-u10-u12',
    name: 'Бєлік Вікторія Володимирівна',
    role: 'Тренер',
    sport: 'football',
    team: 'ДІВОЧІ ГРУПИ U10/U12',
    publicProfile: true,
  },
  {
    id: 'coach-kudziiev-ruslan-girls-u10-u12',
    name: 'Кудзієв Руслан Германович',
    role: 'Тренер',
    sport: 'football',
    team: 'ДІВОЧІ ГРУПИ U10/U12',
    publicProfile: true,
  },
];

// Підтверджена структура футбольних тренерських штабів за окремими командами та віковими етапами
export const footballStaffGroups: CoachingStaffGroup[] = [
  {
    id: 'staff-u19',
    sport: 'football',
    teamName: 'ЗБІРНА U19',
    birthYear: '2008–2009 р.н.',
    category: 'boys',
    stageName: 'Збірна U19',
    description:
      'Завершальний етап юнацької підготовки в системі МДЮСШ. Удосконалення індивідуальної та командної майстерності, змагальна практика та підготовка до переходу в дорослий футбол.',
    coaches: coaches.filter((c) => c.team === 'ЗБІРНА U19'),
  },
  {
    id: 'staff-u17',
    sport: 'football',
    teamName: 'U17',
    birthYear: '2010 р.н.',
    category: 'boys',
    stageName: 'Спеціалізована підготовка',
    description:
      'Завершальний віковий рівень спеціалізованої підготовки. Поглиблення тактичної готовності, командної взаємодії та набуття стабільної змагальної практики.',
    coaches: coaches.filter((c) => c.team === 'U17'),
  },
  {
    id: 'staff-u16',
    sport: 'football',
    teamName: 'U16',
    birthYear: '2011 р.н.',
    category: 'boys',
    stageName: 'Спеціалізована підготовка',
    description:
      'Спеціалізована підготовка з акцентом на удосконалення техніко-тактичних дій, ігрового мислення та участь у змаганнях.',
    coaches: coaches.filter((c) => c.team === 'U16'),
  },
  {
    id: 'staff-u15',
    sport: 'football',
    teamName: 'U15',
    birthYear: '2012 р.н.',
    category: 'boys',
    stageName: 'Спеціалізована підготовка',
    description:
      'Розвиток індивідуальної майстерності, командної тактичної структури та поступове збільшення тренувальних і змагальних навантажень.',
    coaches: coaches.filter((c) => c.team === 'U15'),
  },
  {
    id: 'staff-u14',
    sport: 'football',
    teamName: 'U14',
    birthYear: '2013 р.н.',
    category: 'boys',
    stageName: 'Спеціалізована підготовка',
    description:
      'Початковий рівень спеціалізованої підготовки. Перехід до великого футболу, адаптація до збільшених навантажень та розвиток техніко-тактичних навичок.',
    coaches: coaches.filter((c) => c.team === 'U14'),
  },
  {
    id: 'staff-basic',
    sport: 'football',
    teamName: 'БАЗОВА ПІДГОТОВКА',
    birthYear: 'U9–U13 · 2014–2018 р.н.',
    category: 'boys',
    stageName: 'Базова підготовка',
    description:
      'На етапі базової підготовки продовжується системне навчання футболістів, поступово збільшуються тренувальні й змагальні навантаження, розвиваються технічні навички, ігрове мислення та командна взаємодія.',
    subgroups: [
      {
        id: 'subgroup-u13',
        teamName: 'U13',
        birthYear: '2014 р.н.',
        coaches: coaches.filter((c) => c.team === 'U13'),
      },
      {
        id: 'subgroup-u12',
        teamName: 'U12',
        birthYear: '2015 р.н.',
        coaches: coaches.filter((c) => c.team === 'U12'),
      },
      {
        id: 'subgroup-u11',
        teamName: 'U11',
        birthYear: '2016 р.н.',
        coaches: coaches.filter((c) => c.team === 'U11'),
      },
      {
        id: 'subgroup-u10',
        teamName: 'U10',
        birthYear: '2017 р.н.',
        coaches: coaches.filter((c) => c.team === 'U10'),
      },
      {
        id: 'subgroup-u9',
        teamName: 'U9',
        birthYear: '2018 р.н.',
        coaches: coaches.filter((c) => c.team === 'U9'),
      },
    ],
    coaches: [],
  },
  {
    id: 'staff-girls-u15-u13',
    sport: 'football',
    teamName: 'ДІВОЧІ ГРУПИ U15/U13',
    category: 'girls',
    stageName: 'Дівочий футбол',
    description:
      'Спеціалізована підготовка футболісток, розвиток техніко-тактичних навичок, командної взаємодії та участь у профільних змаганнях.',
    coaches: coaches.filter((c) => c.team === 'ДІВОЧІ ГРУПИ U15/U13'),
  },
  {
    id: 'staff-girls-u10-u12',
    sport: 'football',
    teamName: 'ДІВОЧІ ГРУПИ U10/U12',
    category: 'girls',
    stageName: 'Дівочий футбол',
    description:
      'Базова підготовка футболісток, розвиток техніки, ігрового мислення, командної взаємодії та поступове набуття змагального досвіду.',
    coaches: coaches.filter((c) => c.team === 'ДІВОЧІ ГРУПИ U10/U12'),
  },
];

export function getPublicCoaches(sport?: SportDirection, team?: string): Coach[] {
  return coaches.filter(
    (coach) =>
      coach.publicProfile &&
      (!sport || coach.sport === sport) &&
      (!team || coach.team === team)
  );
}
