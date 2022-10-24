import './App.scss';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import UrlForm from './components/form/UrlForm';
import Results from './components/results/Results';
import History from './components/history/History';

function App() {
  const [history, setHistory] = useState([]);
  const [results, setResults] = useState('');

  return (
    <div className="App">
      <Header id='header' />
      <Container id='main'>
        <Container id='history-div'>
          <History history={history} setHistory={setHistory} />
        </Container>
        <Container id='url-results-div'>
          <UrlForm setResults={setResults} />
          <Results results={results} />
        </Container>
      </Container>
    </div>
  );
}

export default App;
