import React from 'react';
import PropTypes from 'prop-types';

const AddBookButton = ({ onAdd }) => {
  const handleClick = () => {
    onAdd();
  };

  return (
    <button type="button" onClick={handleClick}>
      Add Book
    </button>
  );
};

AddBookButton.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddBookButton;
