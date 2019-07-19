import React from 'react';
import BaseLayout from './components/baseLayout/index';

import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
        <BaseLayout />
    </Router>
  );
};

export default App;
