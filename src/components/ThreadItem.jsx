import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { Link } from 'react-router-dom';
import { BiComment } from 'react-icons/bi';
import { postedAt } from '../utils';
import { ownerShape } from './ThreadDetail';

export default function ThreadItem({
  id, title, body, category, createdAt, totalComments, owner: { name },
}) {
  return (
    <div className="thread-item">
      <header className="thread-item__header">
        <span className="thread-item__category">
          #
          {category}
        </span>
        <h4 className="thread-item__title">
          <Link to={`/threads/${id}`}>{title}</Link>
        </h4>
      </header>
      <div className="thread-item__body">{parser(body)}</div>
      <footer className="thread-item__footer">
        <p className="thread-item__total-comments">
          <BiComment />
          {totalComments}
        </p>
        <p>{postedAt(createdAt)}</p>
        <p className="thread-item__owner">
          Dibuat oleh
          &nbsp;
          <strong>{name}</strong>
        </p>
      </footer>
    </div>
  );
}

export const threadShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
};

ThreadItem.propTypes = threadShape;
