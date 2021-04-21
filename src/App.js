import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouterAccess from './components/AppWithRouterAccess';
import Navbar from './components/Navbar';

const App = () => {
  return(
      <Router>
        <Navbar />
        <AppWithRouterAccess />
      </Router>
  )
}
export default App;