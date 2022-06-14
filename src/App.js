import React, {useState} from 'react';

import './App.css';
import PageManager from './Components/PageManager';

function App() {

  const [page, setPage] = useState(0);

  const changePageHandler = (value) => {
    setPage(value)
  }

  return (
    <div className="App bg-gradient-to-r from-bgColor-start to-bgColor-stop">
      <div className='relative min-h-screen flex'>
        <PageManager handleChangePage={changePageHandler} page={page}></PageManager>
      </div>
    </div>
  );
}

export default App;
