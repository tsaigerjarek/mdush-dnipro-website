import type { SportDirection } from './coaches';

export interface Player {
  id: string;
  slug: string;
  publicName: string;
  legalFullName?: string; // Внутрішнє поле; заборонено до автоматичного оприлюднення без згоди
  groupId: string; // Наприклад: 'U9', 'U10', 'U11', 'U12', 'U13', 'U14', 'U15', 'U16', 'U17', 'ЗБІРНА U19'
  sport: SportDirection;
  birthYear?: number; // Тільки рік (наприклад, 2012), повна дата народження заборонена
  position?: string;
  photo?: string;
  photoApprovedForPublicUse: boolean;
  publicProfile: boolean;
}

// Підтверджений публічний реєстр вихованців МДЮСШ Дніпро
// За замовчуванням порожній до офіційного надання підтверджених даних та згод
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
