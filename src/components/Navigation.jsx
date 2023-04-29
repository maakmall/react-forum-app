import React from 'react';
import { BiChat, BiLogInCircle, BiLogOutCircle } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function Navigation({ authUser, signOut }) {
  const navigate = useNavigate();

  return (
    <div className="navigation-bottom">
      <nav>
        <button
          type="button"
          className="navigation-item"
          onClick={() => navigate('/')}
        >
          <div className="navigation-item__icon">
            <BiChat />
          </div>
          <p className="navigation-item__label">Thread</p>
        </button>
        {authUser == null ? (
          <button
            type="button"
            className="navigation-item"
            onClick={() => navigate('/login')}
          >
            <div className="navigation-item__icon">
              <BiLogInCircle />
            </div>
            <p className="navigation-item__label">Login</p>
          </button>
        ) : (
          <button
            type="button"
            className="navigation-item"
            onClick={signOut}
          >
            <div className="navigation-item__icon">
              <BiLogOutCircle />
            </div>
            <p className="navigation-item__label">Logout</p>
          </button>
        )}
      </nav>
    </div>
  );
}

export const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Navigation.propTypes = {
  authUser: PropTypes.shape(userShape),
  signOut: PropTypes.func.isRequired,
};
