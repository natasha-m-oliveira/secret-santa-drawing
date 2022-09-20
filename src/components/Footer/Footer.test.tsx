import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { useParticipantsList } from '../../state/hock/useParticipantsList';
import { Footer } from './';

jest.mock('../../state/hock/useParticipantsList', () => {
  return {
    useParticipantsList: jest.fn(),
  };
});

const mockNavigate = jest.fn();
const mockPrizeDraw = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

jest.mock('../../state/hock/useRaffletor', () => {
  return {
    useRaffletor: () => mockPrizeDraw,
  };
});

describe('when there are not enough participants', () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([]);
  });
  test('The joke cannot be started', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});

describe('when there are enough participants', () => {
  const participants = ['Ana', 'Catarna', 'Josefina'];
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participants);
  });
  test('The joke can be started', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');
    expect(button).not.toBeDisabled();
  });

  test('The joke started', () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/sorteio');
    expect(mockPrizeDraw).toHaveBeenCalledTimes(1);
  });
});
