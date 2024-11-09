// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import StudentContainer from './containers/StudentContainer';
import NotFound from "./containers/NotFound";

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<StudentContainer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
