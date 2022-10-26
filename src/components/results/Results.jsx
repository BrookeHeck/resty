import React from 'react';
import { Container, Alert } from 'react-bootstrap';
import './Results.scss';

function Results({ results, isLoading, isError }) {

  return (
    <Container id='resultsContainer'>
      {
        isLoading && 
        <Alert show={isLoading} variant='warning'>
          <p>Loading</p>
        </Alert>
      }
      {
        isError && 
        <Alert show={isError} variant='danger'>
          <p>Invalid Request</p>
        </Alert>
      }
      <h2>Results</h2>
      <div id='results'>
        <pre>{results ? JSON.stringify(results, undefined, 2) : null}</pre>
      </div>
    </Container>
  )
}

export default Results;