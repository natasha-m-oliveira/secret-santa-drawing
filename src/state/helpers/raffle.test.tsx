import React from 'react';
import { raffle } from './raffle';

describe('when drawn a secret santa drawing', () => {
  test('each participant cannot draw their own name', () => {
    const participants = ['Ana', 'Catarina', 'Jorel', 'Lara', 'João', 'Nathália']

    const prizeDraw = raffle(participants);
    participants.forEach((participant) => {
      const secretSantaDrawing = prizeDraw.get(participant);

      expect(secretSantaDrawing).not.toEqual(participant);
    })
  })
})