import React, { useState } from 'react';

const BookForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, author });
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;
