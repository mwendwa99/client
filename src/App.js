import React, { Fragment } from 'react';

import "./App.css"
import { NavBar } from './components';
import { Home } from './pages';

function App() {
  return (
    <Fragment>
      <div className='App'>
        <NavBar />
        <Home />
      </div>
    </Fragment>
  );
}

export default App;
