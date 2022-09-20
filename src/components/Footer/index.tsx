import { useNavigate } from 'react-router-dom';
import { useParticipantsList } from '../../state/hock/useParticipantsList';
import { useRaffletor } from '../../state/hock/useRaffletor';
import styles from './Footer.module.scss';

export const Footer = () => {
  const participants = useParticipantsList();
  const navigateTo = useNavigate();
  const raffletor = useRaffletor();

  const handleClick = () => {
    raffletor();
    navigateTo('/sorteio');
  };
  return (
    <footer className={styles.footer}>
      <button disabled={participants.length < 3} onClick={handleClick}>
        Iniciar brincadeira
      </button>
      <img src='assets/img/bags.png' />
    </footer>
  );
};
