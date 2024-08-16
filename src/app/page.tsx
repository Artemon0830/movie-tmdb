'use client';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MoviesPage from './movies/page';

const App = () => {
  return (
      <Router>
        <MoviesPage />
      </Router>
  );
};

export default App;