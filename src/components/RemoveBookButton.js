import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const RemoveBookButton = ({ bookItemId }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(bookItemId));
  };

  return (
    <button type="button" onClick={handleRemoveBook}>
      Delete
    </button>
  );
};

RemoveBookButton.propTypes = {
  bookItemId: PropTypes.number.isRequired,
};

export default RemoveBookButton;
