import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/categories" element={<BookForm />} />
    </Routes>
  </BrowserRouter>
);

export default App;
