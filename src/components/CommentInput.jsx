import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function CommentInput({ addComment }) {
  const [comment, setComment] = useState('');

  const onInputCommentHandler = (event) => {
    setComment(event.target.innerHTML);
  };

  const onSumbitHandler = (e) => {
    e.preventDefault();
    addComment(comment);
    setComment('');
  };

  return (
    <form className="comment-input" onSubmit={onSumbitHandler}>
      <div
        className="comment-input__field"
        contentEditable="true"
        onInput={onInputCommentHandler}
      />
      <button type="submit">Kirim</button>
    </form>
  );
}

CommentInput.propTypes = {
  addComment: PropTypes.func.isRequired,
};
