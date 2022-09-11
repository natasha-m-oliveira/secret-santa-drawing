import { render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { useParticipantsList } from '../state/hock/useParticipantsList';
import { ParticipantsList } from './ParticipantsList';

jest.mock('../state/hock/useParticipantsList', () => {
  return {
    useParticipantsList: jest.fn(),
  };
});

describe('an empty participants list', () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([]);
  });
  test('must be rendered without elements', () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>,
    );

    const itens = screen.queryAllByRole('listitem');
    expect(itens).toHaveLength(0);
  });
});

describe('a completed participants list', () => {
  const participants = ['Ana', 'Catarna'];
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
  });
  test('must be rendered with N elements', () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>,
    );

    const itens = screen.queryAllByRole('listitem');
    expect(itens).toHaveLength(participants.length);
  });
});
