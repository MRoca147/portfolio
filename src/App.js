import React, { useState } from 'react';

import './App.css';
import languages from './Components/multilanguage/languages';
import translations from './Components/multilanguage/translations';
import Sidebar from './Components/Sidebar';
import PageManager from './Components/PageManager';
import NavBar from "./Components/NavBar";

function App() {

  const [lang, setLang] = useState('en');

  const [translation, setTranslation] = useState(translations['en']);

  const [page, setPage] = useState(0);

  
  const changeLanguageHandler = (value) => {
    setLang(value)
    setTranslation(translations[value])
  }

  const changePageHandler = (value) => {
    setPage(value)
  }

  return (
    <div className="App bg-gray-800">
      <div className='relative min-h-screen flex'>
        {/*<Sidebar page={page} handleChangePage={changePageHandler} lang={lang} languages={languages} */}
        {/*  translation={translation} handleChangeLanguage={changeLanguageHandler}></Sidebar>*/}
        <PageManager handleChangePage={changePageHandler} page={page}></PageManager>
      </div>
    </div>
  );
}

export default App;
