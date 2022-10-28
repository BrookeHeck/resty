import React from 'react';
import { Container } from 'react-bootstrap';
import Search from './Search';
import './History.scss';

function History({ history, setResults }) {
  return (
    <Container>
      <h2>History</h2>
      <div id="historyDiv">
        <Search history={history} setResults={setResults} />
      </div>
    </Container>
  )
}

export default History;