import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import ThreadComment from '../components/ThreadComment';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';
import ThreadDetail from '../components/ThreadDetail';
import { userShape } from '../components/Navigation';
import { asyncAddComment } from '../states/comments/action';

export default function Detail({ authUser }) {
  const { id } = useParams();

  const { threadDetail = null, comments = null } = useSelector(
    (states) => states,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onComment = (content) => {
    dispatch(asyncAddComment({ id, content }));
  };

  if (!threadDetail) return null;

  return (
    <section className="detail-page">
      <ThreadDetail {...threadDetail} />
      <ThreadComment
        comments={comments}
        authUser={authUser}
        addComment={onComment}
      />
    </section>
  );
}

Detail.propTypes = {
  authUser: PropTypes.shape(userShape),
};
