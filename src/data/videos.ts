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
export const videosData: VideoItem[] = [];
