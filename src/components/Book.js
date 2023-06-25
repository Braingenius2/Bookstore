import React from 'react';

const Book = ({ book, onDelete }) => (
  <div>
    <h2>{book.title}</h2>
    <p>{book.author}</p>
    <button onClick={() => onDelete(book.id)}>Delete</button>
  </div>
);

export default Book;
