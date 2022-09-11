import { act, fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { Form } from './Form';

describe('the behavior of the form.tsx', () => {
  test('when the entry is empty, new participants cannot be added', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>,
    );
    // find in DOM the input
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes',
    );
    // find the button
    const button = screen.getByRole('button');

    // ensure the input is in the document
    expect(input).toBeInTheDocument();
    // ensure the button is disabled
    expect(button).toBeDisabled();
  });

  test('add a new participant if there is a name filled in', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>,
    );
    // find in DOM the input
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes',
    );
    // find the button
    const button = screen.getByRole('button');

    // insert value in input
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina',
      },
    });
    // click on button to submet
    fireEvent.click(button);
    // ensure the input is in active focus
    expect(input).toHaveFocus();
    // ensure the input is empty
    expect(input).toHaveValue('');
  });

  test('Duplicate names should not be added to the list', () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>,
    );
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes',
    );
    const button = screen.getByRole('button');

    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina',
      },
    });
    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina',
      },
    });
    fireEvent.click(button);

    const errorMessage = screen.getByRole('alert');
    expect(errorMessage.textContent).toBe(
      'O participante já foi adicionado a lista.',
    );
  });

  test('the error message should go away after the timers', () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>,
    );
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes',
    );
    const button = screen.getByRole('button');

    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina',
      },
    });
    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: 'Ana Catarina',
      },
    });
    fireEvent.click(button);

    let errorMessage = screen.queryByRole('alert');
    expect(errorMessage).toBeInTheDocument();
    // wait N seconds
    act(() => {
      jest.runAllTimers();
    });
    errorMessage = screen.queryByRole('alert');
    expect(errorMessage).toBeNull();
  });
});
