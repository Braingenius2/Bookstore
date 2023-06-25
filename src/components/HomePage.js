import React from 'react';
import BookList from './BookList';
import BookForm from './BookForm';

const HomePage = () => {
  // Dummy book data for testing
  const books = [
    {
      id: 1,
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      progress: '64%',
      chapter: 'Chapter 17',
    },
    {
      id: 2,
      category: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      progress: '8%',
      chapter: 'Chapter 3: "A Lesson Learned"',
    },
    {
      id: 3,
      category: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      progress: '0%',
      chapter: 'Introduction',
    },
  ];

  const handleAddBook = (newBook) => {
    // Implement logic to add a new book to the book list
    // You can update the 'books' state or make an API request here
  };

  const handleDeleteBook = (bookId) => {
    // Implement logic to delete a book from the book list
    // You can update the 'books' state or make an API request here
  };

  return (
    <div className="container">
      <BookList books={books} onDelete={handleDeleteBook} />
      <div className="horizontal-divider" />
      <section>
        <h2 className="form-title">ADD NEW BOOK</h2>
        <BookForm onAdd={handleAddBook} />
      </section>
    </div>
  );
};

export default HomePage;
