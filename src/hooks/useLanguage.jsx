// src/hooks/useLanguage.jsx
import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const useLanguage = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  // Menambahkan text sesuai bahasa yang dipilih
  const getText = (textEN, textID) => {
    return language === 'EN' ? textEN : textID;
  };

  return { language, toggleLanguage, getText };
};

export default useLanguage;
