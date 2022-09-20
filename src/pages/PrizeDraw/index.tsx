import { useState } from 'react';
import { Card } from '../../components/Card';
import { useDrawResult } from '../../state/hock/useDrawResult';
import { useParticipantsList } from '../../state/hock/useParticipantsList';
import styles from './PrizeDraw.module.scss';

export const PrizeDraw = () => {
  const [participant, setParticipant] = useState('');
  const [secretSantaDrawing, setSecretSantaDrawing] = useState('');
  const participants = useParticipantsList();

  const result = useDrawResult();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (result.has(participant)) {
      setSecretSantaDrawing(result.get(participant)!);
    }
  };

  return (
    <Card>
      <section className={styles.container}>
        <form onSubmit={handleSubmit}>
          <select
            name="participant"
            id="participant"
            placeholder="Selecione o seu nome"
            required
            value={participant}
            onChange={({ target }) => setParticipant(target.value)}
          >
            <option value=''>Selecione seu nome</option>
            {participants.map((participant) => (
              <option key={participant} value={participant}>
                {participant}
              </option>
            ))}
          </select>
          <button>Sortear</button>
        </form>
        {secretSantaDrawing && <p role="alert" className='result'>{secretSantaDrawing}</p>}
        <footer>
          <img src='/assets/img/airplane.png' />
        </footer>
      </section>
    </Card>
  );
};
