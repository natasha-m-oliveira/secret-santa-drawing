import { useRef, useState } from 'react';
import { useAddParticipant } from '../../state/hock/useAddParticipant';
import { useErrorMessage } from '../../state/hock/useErrorMessage';
import styles from './Form.module.scss';

export const Form = () => {
  const [name, setName] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const AddParticipant = useAddParticipant();
  const errorMessage = useErrorMessage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AddParticipant(name);
    setName('');
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.group}>
        <input
          type="text"
          placeholder="Insira os nomes dos participantes"
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={inputRef}
        />
        <button disabled={!name}>Adicionar</button>
      </div>
      {errorMessage && (
        <p className={`${styles.alert} ${styles.error}`} role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
};
