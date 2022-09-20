import { render } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { Config } from './';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate
  }
})

describe('the config page', () => {
  test('should be rendered correctly', () => {
    const {container} = render(
      <RecoilRoot>
        <Config />
      </RecoilRoot>
    )

    expect(container).toMatchSnapshot();
  })
})