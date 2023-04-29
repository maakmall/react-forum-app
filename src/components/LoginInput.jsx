import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import LoginForm from './styled/LoginForm';
import Input from './styled/LoginInput';
import Button from './styled/LoginButton';

export default function LoginInput({ login }) {
  const [email, onEmailChange] = useInput();
  const [password, onPasswordChange] = useInput();

  return (
    <LoginForm
      onSubmit={(e) => {
        e.preventDefault();
        login({ email, password });
      }}
    >
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
      />
      <Button type="submit">Login</Button>
    </LoginForm>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};
