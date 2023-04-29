/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginInput from './LoginInput';

import '@testing-library/jest-dom';

describe('LoginInput component', () => {
  it('should handle email typing correctly', async () => {
    await act(async () => render(<LoginInput login={() => {}} />));
    const emailInput = await screen.getByPlaceholderText('Email');

    await act(async () => userEvent.type(emailInput, 'user@example.com'));

    expect(emailInput).toHaveValue('user@example.com');
  });

  it('should handle password typing correctly', async () => {
    await act(async () => render(<LoginInput login={() => {}} />));
    const passwordInput = await screen.getByPlaceholderText('Password');

    await act(async () => userEvent.type(passwordInput, 's3cr3t'));

    expect(passwordInput).toHaveValue('s3cr3t');
  });

  it('should call login function when login button is clicked', async () => {
    const mockLogin = jest.fn();
    await act(async () => render(<LoginInput login={mockLogin} />));
    const emailInput = await screen.getByPlaceholderText('Email');
    await act(async () => userEvent.type(emailInput, 'user@example.com'));
    const passwordInput = await screen.getByPlaceholderText('Password');
    await act(async () => userEvent.type(passwordInput, 's3cr3t'));
    const loginButton = await screen.getByText('Login');

    await act(async () => userEvent.click(loginButton));

    expect(mockLogin).toBeCalledWith({
      email: 'user@example.com',
      password: 's3cr3t',
    });
  });
});
