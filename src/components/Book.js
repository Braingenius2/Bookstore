import React from 'react';
import PropTypes from 'prop-types';
import RemoveBookButton from './RemoveBookButton';

const Book = ({ book }) => (
  <div>
    <div className="book">
      <p>category</p>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
    </div>
    <ul className="actions">
      <li>Comments</li>
      <li><RemoveBookButton bookId={book.id} /></li>
      <li>Edit</li>
    </ul>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
