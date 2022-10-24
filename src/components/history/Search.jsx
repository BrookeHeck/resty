import React from 'react';
import { ListGroup } from 'react-bootstrap';

function Search({ history }) {

  return (
    history &&
    history.map((search, index) => (
      <ListGroup.Item key={index}>
        {`Method: ${search.method} \n URL: ${search.url}`}
      </ListGroup.Item>
    ))
  )
}

export default Search;