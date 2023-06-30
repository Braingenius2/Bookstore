import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookList from './BookList';
import BookForm from './BookForm';
import { addBook, removeBook } from '../redux/books/booksSlice';

const HomePage = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleAddBook = (newBook) => {
    dispatch(addBook(newBook));
  };

  const handleDeleteBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div className="container">
      <BookList books={books} onDelete={handleDeleteBook} />
      <div className="horizontal-divider" />
      <section>
        <BookForm onAdd={handleAddBook} />
      </section>
    </div>
  );
};

export default HomePage;
