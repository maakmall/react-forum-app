import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ThreadInput from '../components/ThreadInput';
import { userShape } from '../components/Navigation';
import { asyncAddThread } from '../states/threads/action';

export default function Add({ authUser }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/');
  };

  return (
    authUser && (
      <div className="new-thread-page">
        <h2>Buat Diskusi Baru</h2>
        <ThreadInput addThread={onAddThread} />
      </div>
    )
  );
}

Add.propTypes = {
  authUser: PropTypes.shape(userShape),
};
