import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadShape } from './ThreadItem';

export default function ThreadList({ threads }) {
  return (
    <div className="threads-list">
      {threads.map((thread) => (
        <ThreadItem key={thread.id} {...thread} />
      ))}
    </div>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadShape)).isRequired,
};
