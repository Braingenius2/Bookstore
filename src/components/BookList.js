import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import RemoveBookButton from './RemoveBookButton';

const BookList = ({ books }) => (
  <div>
    {books.map((book) => (
      <div key={book.id}>
        <Book book={book} />
        <RemoveBookButton bookId={book.id} />
      </div>
    ))}
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
