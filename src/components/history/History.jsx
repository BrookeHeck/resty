import React from 'react';
import { Container } from 'react-bootstrap';
import Search from './Search';
import './History.scss';

function History({ history }) {
  return (
    <Container>
      <h2>History</h2>
      <div id="historyDiv">
        <Search history={history} />
      </div>
    </Container>
  )
}

export default History;