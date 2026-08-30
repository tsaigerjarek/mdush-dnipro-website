export type SportDirection = 'football' | 'table-tennis' | 'cheerleading';

export interface PlayerStats {
  appearances?: number;
  starts?: number;
  minutes?: number;
  goals?: number;
  assists?: number;
  cleanSheets?: number;
}

export interface PlayerMedia {
  image?: string;
  title?: string;
  href?: string;
}

export interface Player {
  id: string;
  slug: string;

  publicName: string;
  legalFullName?: string; // Внутрішнє поле; суворо заборонено до публікації

  direction: SportDirection;

  groupId: string; // Наприклад: 'U15', 'ЗБІРНА U19'
  teamLabel?: string;

  birthYear?: number; // Тільки рік (наприклад, 2012), повна дата народження заборонена
  position?: string;
  shirtNumber?: number;

  photo?: string;

  publicProfile: boolean;
  photoApprovedForPublicUse: boolean;

  season?: string;

  stats?: PlayerStats;
  achievements?: string[];
  media?: PlayerMedia[];
}

// Підтверджений публічний реєстр вихованців МДЮСШ Дніпро
// За замовчуванням порожній (0 записів) до офіційного надання підтверджених даних та згод
export const players: Player[] = [];

export function getPublicPlayers(groupId?: string): Player[] {
  return players.filter(
    (player) =>
      player.publicProfile &&
      (!groupId || player.groupId === groupId)
  );
}

export function getPlayerBySlug(slug: string): Player | undefined {
  return players.find((player) => player.slug === slug && player.publicProfile);
}
