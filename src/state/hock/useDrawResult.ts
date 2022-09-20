import { useRecoilValue } from 'recoil'
import { secretSantaDrawingResultState } from '../atom'

export const useDrawResult = () => {
  return useRecoilValue(secretSantaDrawingResultState);
}