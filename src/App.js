import React, { Fragment } from 'react';

import "./App.css"
import { NavBar } from './components';
import { Home, Page2 } from './pages';

function App() {
  return (
    <Fragment>
      <div className='App'>
        <NavBar />
        <Home />
        <Page2 />
      </div>
    </Fragment>
  );
}

export default App;
