import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import ThreadList from '../components/ThreadList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import { userShape } from '../components/Navigation';

export default function Home({ authUser }) {
  const { threads = [], users = [] } = useSelector((states) => states);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    owner: users.find((user) => user.id === thread.ownerId),
  }));

  return (
    <section className="home-page">
      <div className="home-page__content">
        <h2>Diskusi Tersedia</h2>
        <ThreadList threads={threadList} />
        {authUser && (
          <button
            type="button"
            className="new-thread-button"
            onClick={() => navigate('/new')}
          >
            <FiPlus />
          </button>
        )}
      </div>
    </section>
  );
}

Home.propTypes = {
  authUser: PropTypes.shape(userShape),
};
