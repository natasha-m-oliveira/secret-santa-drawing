import { atom } from 'recoil';

export const participantsListState = atom<string[]>({
  key: 'participantsList',
  default: [],
});

export const errorState = atom<string>({
  key: 'errorState',
  default: '',
});
