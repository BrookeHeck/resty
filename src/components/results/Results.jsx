import React from 'react';
import { Container } from 'react-bootstrap';
import './Results.scss';

function Results({ results }) {

  function stringifyResults() {
    if(results) {
      return JSON.stringify(results, (key, value) => (value || ''), 4).replace(/"([^"]+)":/g, '$1:');
    }
  }

  return (
    <Container id='resultsContainer'>
      <h2>Results</h2>
      <div id='results'>
        {stringifyResults()}
      </div>
    </Container>
  )
}

export default Results;