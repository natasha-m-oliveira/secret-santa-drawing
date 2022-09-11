import { useRef, useState } from 'react';
import { useAddParticipant } from '../state/hock/useAddParticipant';
import { useErrorMessage } from '../state/hock/useErrorMessage';

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
      <input
        type="text"
        placeholder="Insira os nomes dos participantes"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={inputRef}
      />
      <button disabled={!name}>Adicionar</button>
      {errorMessage && <p role="alert">{errorMessage}</p>}
    </form>
  );
};
