import './App.scss';
import React, { useState, useReducer } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import UrlForm from './components/form/UrlForm';
import Results from './components/results/Results';
import History from './components/history/History';

function App() {
  const [history, setHistory] = useState([]);
  const [results, setResults] = useState('');
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  const [ status, dispatch ] = useReducer(reducer, {isError: false, isLoading: false});

  return (
    <div className="App">
      <Header id='header' />
      <Container id='main'>
        <Container id='history-div'>
          <History history={history} setResults={setResults} />
        </Container>
        <Container id='url-results-div'>
          <UrlForm
            setResults={setResults}
            history={history}
            setHistory={setHistory}
            dispatch={dispatch}
          />
          <Results
            results={results}
            isLoading={status.isLoading}
            isError={status.isError}
          />
        </Container>
      </Container>
    </div>
  );
}

function reducer(state, action) {
  switch(action.type) {
    case 'error':
      return {isError: action.isError, isLoading: state.isLoading}
    case 'loading':
      return {isError: state.isError, isLoading: action.isLoading}
    default: return state;
  }
}

export default App;
