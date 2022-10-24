import React from 'react';
import { Container } from 'react-bootstrap';
import './Results.scss'

function Results({ results }) {

  console.log(JSON.stringify(results));
  console.log(results);

  return (
    <Container id='resultsContainer'>
      <h2>Results</h2>
      <div id='results'>{JSON.stringify(results)}</div>
    </Container>
  )
}

export default Results;