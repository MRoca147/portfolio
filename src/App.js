import './App.css';
import languages from './Components/multilanguage/languages';
import translations from './Components/multilanguage/translations';
import Sidebar from './Components/Sidebar';
import React, { useState } from 'react';

function App() {

  const [lang, setLang] = useState('en');

  const [translation, setTranslation] = useState(translations['en']);
  
  const changeLanguageHandler = (value) => {
    setLang(value)
    setTranslation(translations[value])
  }

  return (
    <div className="App bg-gray-800">
      <Sidebar lang={lang} languages={languages} translation={translation} handleChangeLanguage={changeLanguageHandler}></Sidebar>
    </div>
  );
}

export default App;
