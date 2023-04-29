import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';
import CommentNotLogin from './CommentNotLogin';
import { ownerShape } from './ThreadDetail';
import { userShape } from './Navigation';
import CommentInput from './CommentInput';

export default function ThreadComment({ comments, authUser, addComment }) {
  return (
    <div className="thread-comment">
      <div className="thread-comment__input">
        <h3>Beri Komentar</h3>
        {authUser == null ? <CommentNotLogin /> : <CommentInput addComment={addComment} />}
      </div>
      <div className="thread-comment__list">
        <h3>
          Komentar (
          {comments.length}
          )
        </h3>
        <div className="comments-list">
          {comments.map((comment) => (
            <CommentItem key={comment.id} {...comment} />
          ))}
        </div>
      </div>
    </div>
  );
}

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

ThreadComment.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentShape)).isRequired,
  authUser: PropTypes.shape(userShape).isRequired,
  addComment: PropTypes.func.isRequired,
};
