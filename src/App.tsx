import React from 'react';
import { PublicRoute } from './router/PublicRoute';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { PrivateRoute } from './router/PrivateRoute';

function App() {

  return (
    <>
      <Router>
        <PublicRoute />
      </Router >
      {/* {!token ? <PublicRoute /> : <PrivateRoute />} */}
    </>
  );
}

export default App;
