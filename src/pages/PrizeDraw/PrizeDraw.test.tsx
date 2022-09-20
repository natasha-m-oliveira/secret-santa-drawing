import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { PrizeDraw } from './';
import { useParticipantsList } from '../../state/hock/useParticipantsList';
import { useDrawResult } from '../../state/hock/useDrawResult';

jest.mock('../../state/hock/useParticipantsList', () => {
  return {
    useParticipantsList: jest.fn(),
  };
});

jest.mock('../../state/hock/useDrawResult', () => {
  return {
    useDrawResult: jest.fn(),
  };
});

describe('the prize draw page', () => {
  const participants = ['Ana', 'Catariana', 'Jorel'];
  const result = new Map([
    ['Ana', 'Jorel'],
    ['Catarina', 'Ana'],
    ['Jorel', 'Catarina'],
  ])
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
    (useDrawResult as jest.Mock).mockReturnValue(result);
  });
  
  test('All participants can show their secret santa drawing', () => {
    render(<RecoilRoot>
      <PrizeDraw />
    </RecoilRoot>);

    const options = screen.queryAllByRole('option');
    expect(options).toHaveLength(participants.length + 1); // porque já vem uma option por default
  })

  test('secret santa drawing is displayed when prompted', () => {
    render(<RecoilRoot>
      <PrizeDraw />
    </RecoilRoot>);

    const select = screen.getByPlaceholderText('Selecione o seu nome');
    fireEvent.change(select, {
      target: {
        value: participants[0]
      }
    })

    const button = screen.getByRole('button');

    fireEvent.click(button);

    const secretSantaDrawing = screen.getByRole('alert');

    expect(secretSantaDrawing).toBeInTheDocument();
  })
})