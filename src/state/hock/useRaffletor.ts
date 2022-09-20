import { useSetRecoilState } from 'recoil';
import { secretSantaDrawingResultState } from '../atom';
import { raffle } from '../helpers/raffle';
import { useParticipantsList } from './useParticipantsList';

export const useRaffletor = () => {
  const participants = useParticipantsList();
  const setResult = useSetRecoilState(secretSantaDrawingResultState);

  return () => {
    const result = raffle(participants);

    setResult(result);
  };
};
