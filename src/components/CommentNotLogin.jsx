import React from 'react';
import { Link } from 'react-router-dom';

export default function CommentNotLogin() {
  return (
    <p className="thread-comment__not_login">
      <Link to="/login">Login</Link>
      &nbsp;
      untuk memberi komentar
    </p>
  );
}
