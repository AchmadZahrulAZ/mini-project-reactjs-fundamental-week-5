// src/contexts/LanguageContext.jsx
import React, { createContext, useState } from 'react';

// Membuat context untuk bahasa
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('EN'); // Nilai default bahasa

  // Fungsi untuk mengganti bahasa
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'EN' ? 'ID' : 'EN'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
