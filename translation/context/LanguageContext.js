import React, {createContext, useContext, useEffect, useState} from 'react';
import en from '../lang/en.json';
import fr from '../lang/fr.json';
import ru from '../lang/ru.json';
import uk from '../lang/uk.json';
import zh from '../lang/zh.json';
import hi from '../lang/hi.json';
import es from '../lang/es.json';
import ar from '../lang/ar.json';
import bn from '../lang/bn.json';
import pt from '../lang/pt.json';
import ur from '../lang/ur.json';
import * as RNLocalize from 'react-native-localize';
import App from '../../App';

const LanguageContext = createContext();

const languageObj = {
  en: en, // Anglais
  fr: fr, // Français
  ru: ru, // Russe
  uk: uk, // Ukrainien
  zh: zh, // Chinois
  hi: hi, // Hindi
  es: es, // Espagnol
  ar: ar, // Arabe
  bn: bn, // Bengali
  pt: pt, // Portugais
  ur: ur, // Ourdou
};

export const LanguageContextProvider = ({children}) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  useEffect(() => {
    const currentLanguage = RNLocalize.findBestAvailableLanguage(
      Object.keys(languageObj),
    );

    setSelectedLanguage(currentLanguage?.languageTag || 'en');
  }, []);

  const value = {
    ...languageObj[selectedLanguage],
  };
  return (
    <LanguageContext.Provider value={value}>
      <App />
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);
