import shuffle from 'just-shuffle';

export const raffle = (participants: string[]) => {
  const totalNumberOfParticipants = participants.length;
  const shuffledParticipants = shuffle(participants);
  const result = new Map<string, string>();

  for (let index = 0; index < totalNumberOfParticipants; index++) {
    const secretSantaDrawingIndex =
      index === totalNumberOfParticipants - 1 ? 0 : index + 1;

    result.set(
      shuffledParticipants[index],
      shuffledParticipants[secretSantaDrawingIndex]
    );
  }

  return result;
};
