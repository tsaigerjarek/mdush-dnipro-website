export interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  description?: string;
  publishedDate: string;
  duration?: string;
  teamTag: string; // "Старша збірна 2008–2009 р.н." | "Випускна збірна 2010 р.н." | "Дівоча команда ЖФК"
  customThumbnail?: string;
}

// Реєстр офіційних YouTube-трансляцій та оглядів МДЮСШ Дніпро
// Використовує YouTube ID без зберігання відеофайлів у репозиторії
export const videosData: VideoItem[] = [
  {
    id: 'video-1',
    youtubeId: 'dQw4w9WgXcQ', // TODO: Актуальний ID з офіційного каналу
    title: 'Огляд матчу: Старша збірна МДЮСШ (2008–2009 р.н.)',
    description: 'Голи та найкращі ігрові комбінації старшої збірної команди спортивної школи.',
    publishedDate: '24 серпня 2026',
    teamTag: '2008–2009 р.н.',
  },
  {
    id: 'video-2',
    youtubeId: 'dQw4w9WgXcQ', // TODO: Актуальний ID з офіційного каналу
    title: 'Календарна гра: Випускна команда 2010 р.н.',
    description: 'Повний запис матчу відкриття сезону випускної команди закладу.',
    publishedDate: '20 серпня 2026',
    teamTag: '2010 р.н.',
  },
  {
    id: 'video-3',
    youtubeId: 'dQw4w9WgXcQ', // TODO: Актуальний ID з офіційного каналу
    title: 'Дівочий футбол: Товариська зустріч ЖФК 2012 р.н.',
    description: 'Хайлайти та підсумки зустрічі дівочої команди МДЮСШ Дніпро.',
    publishedDate: '18 серпня 2026',
    teamTag: 'ЖФК 2012 р.н.',
  },
];
