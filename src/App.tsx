import React from 'react';

import './styles/common.scss';
import './styles/adaptation.scss';

import Author from './components/author/Author';
import Title from './components/title/Title';
import Heart from './components/heart/Heart';
import Roll from './components/roll/Roll';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="main__content">
          <Author></Author>
          <Title></Title>
          <Heart></Heart>
          <Roll></Roll>
        </div>
      </div>
    </div>
  );
}

export default App;
