import React from 'react';
import { Container } from 'react-bootstrap';
import './Results.scss';

function Results({ results }) {

  return (
    <Container id='resultsContainer'>
      <h2>Results</h2>
      <div id='results'>
        <pre>{results ? JSON.stringify(results, undefined, 2) : null}</pre>
      </div>
    </Container>
  )
}

export default Results;