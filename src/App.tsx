import React from 'react';
import { Hero } from './sections/Hero';
import {
  BrowserRouter as Router,
} from "react-router-dom";


const App: React.FC = () => {
  return (
    <Router>
      <Hero></Hero>
    </Router>
  );
}

export default App;
