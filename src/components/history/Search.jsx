import React from 'react';
import { ListGroup } from 'react-bootstrap';

function Search({ history, setResults }) {

  function handleSelect(search) {
    setResults(search.results);
  }

  return (
    history &&
    history.map((search, index) => (
      <ListGroup.Item 
        key={index}
        onClick={() => handleSelect(search)}
      >
        {`Method: ${search.method} \n URL: ${search.url}`}
      </ListGroup.Item>
    ))
  )
}

export default Search;