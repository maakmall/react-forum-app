import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';
import { userShape } from '../components/Navigation';

export default function Login({ authUser }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  if (authUser) navigate('/');

  return authUser === null ? (
    <section className="login-page">
      <h2>Login</h2>
      <LoginInput login={onLogin} />
      <p className="register-info">
        Belum punya akun?
        &nbsp;
        <Link to="/register">Daftar di sini.</Link>
      </p>
    </section>
  ) : null;
}

Login.propTypes = {
  authUser: PropTypes.shape(userShape),
};
