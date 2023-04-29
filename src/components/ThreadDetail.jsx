import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { postedAt } from '../utils';

export default function ThreadDetail({
  title, body, category, owner, createdAt,
}) {
  return (
    <>
      <header className="thread-header">
        <p className="thread-header__category">
          #
          {category}
        </p>
      </header>
      <div className="thread-content">
        <h2>{title}</h2>
        <div className="thread-content__body">{parser(body)}</div>
      </div>
      <footer className="thread-footer">
        <div className="owner-info">
          <span>Dibuat oleh</span>
          <img src={owner.avatar} alt={owner.name} />
          <span>{owner.name}</span>
        </div>
        <p>{postedAt(createdAt)}</p>
      </footer>
    </>
  );
}

export const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  createdAt: PropTypes.string.isRequired,
};
