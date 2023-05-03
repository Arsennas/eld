import React from 'react';
import './App.css';
import Head from './components/head/head';
import Avrage from './components/avrage/avrage';
import Conclision from './components/conclision/conclision';

const App = () => {
  return (
    <div className="App">
      <Head/>
      <Avrage/>
      <Conclision/>
    </div>
  );
}

export default App;
