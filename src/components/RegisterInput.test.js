/**
 * skenario testing
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterInput from './RegisterInput';

import '@testing-library/jest-dom';

describe('RegisterInput component', () => {
  it('should handle name typing correctly', async () => {
    await act(async () => render(<RegisterInput register={() => {}} />));
    const nameInput = await screen.getByPlaceholderText('Nama');

    await act(async () => userEvent.type(nameInput, 'nametest'));

    expect(nameInput).toHaveValue('nametest');
  });

  it('should handle email typing correctly', async () => {
    await act(async () => render(<RegisterInput register={() => {}} />));
    const emailInput = await screen.getByPlaceholderText('Email');

    await act(async () => userEvent.type(emailInput, 'usertest@example.com'));

    expect(emailInput).toHaveValue('usertest@example.com');
  });

  it('should handle password typing correctly', async () => {
    await act(async () => render(<RegisterInput register={() => {}} />));
    const passwordInput = await screen.getByPlaceholderText('Password');

    await act(async () => userEvent.type(passwordInput, 'passwordtest'));

    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call register function when register button is clicked', async () => {
    const mockRegister = jest.fn();
    await act(async () => render(<RegisterInput register={mockRegister} />));
    const nameInput = await screen.getByPlaceholderText('Nama');
    await act(async () => userEvent.type(nameInput, 'nametest'));
    const emailInput = await screen.getByPlaceholderText('Email');
    await act(async () => userEvent.type(emailInput, 'usertest@example.com'));
    const passwordInput = await screen.getByPlaceholderText('Password');
    await act(async () => userEvent.type(passwordInput, 'passwordtest'));
    const registerButton = await screen.getByText(/Register/);

    await act(async () => userEvent.click(registerButton));

    expect(mockRegister).toBeCalledWith({
      name: 'nametest',
      email: 'usertest@example.com',
      password: 'passwordtest',
    });
  });
});
