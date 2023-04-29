import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

export default function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput();
  const [category, onCategoryChange] = useInput();
  const [body, setBody] = useState('');

  const onInputBodyHandler = (event) => {
    setBody(event.target.innerHTML);
  };

  const onSubmitHandler = () => {
    addThread({ title, body, category });
  };

  return (
    <form className="new-thread-input" onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="Judul"
        value={title}
        onChange={onTitleChange}
      />
      <input
        type="text"
        placeholder="Kategori"
        value={category}
        onChange={onCategoryChange}
      />
      <div
        className="input-body"
        contentEditable="true"
        onInput={onInputBodyHandler}
      />
      <button type="submit">Buat</button>
    </form>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};
