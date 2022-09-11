import { useParticipantsList } from '../state/hock/useParticipantsList';

export const ParticipantsList = () => {
  const participants: string[] = useParticipantsList();
  return (
    <ul>
      {participants.map((participant) => (
        <li key={participant}>{participant}</li>
      ))}
    </ul>
  );
};
