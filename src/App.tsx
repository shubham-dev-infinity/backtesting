import { PublicRoute } from './router/PublicRoute';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <Router>
        <PublicRoute />
      </Router>
      <ToastContainer />

    </>
  );
}

export default App;
