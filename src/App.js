import React, { Fragment } from 'react';

import { NavBar } from './components';
import { Home } from './pages';

function App() {
  return (
    <Fragment>
      <NavBar />
      <Home />
    </Fragment>
  );
}

export default App;
