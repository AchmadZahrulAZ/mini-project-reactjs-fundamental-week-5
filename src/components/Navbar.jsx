// src/components/Navbar.jsx
import React from 'react';
import useLanguage from '../hooks/useLanguage';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          {language === 'EN' ? 'LIST STUDENT' : 'DAFTAR SISWA'}
        </span>
        <button onClick={toggleLanguage} className="btn btn-primary">
          {language === 'EN' ? 'Change Language' : 'Ganti Bahasa'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
