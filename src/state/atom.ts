import { atom } from 'recoil';

export const participantsListState = atom<string[]>({
  key: 'participantsList',
  default: [],
});

export const secretSantaDrawingResultState = atom<Map<string, string>>({
  key: 'secretSantaDrawingResultState',
  default: new Map(),
});

export const errorState = atom<string>({
  key: 'errorState',
  default: '',
});
