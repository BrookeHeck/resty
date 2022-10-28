import React, { useRef, useEffect } from 'react';
import { Form } from 'react-bootstrap';

function RequestBody({jsonText, dispatch }) {
  const bodyText = useRef(null);
  
  function handleTextChange(e) {
    if(bodyText.current.value) {
      dispatch({type: 'json', jsonText: e.target.value});
    }
  }

  useEffect(() => {
    bodyText.current.value = jsonText;
  }, [jsonText, bodyText]);

  return (
    <Form.Control
      ref={bodyText}
      as='textarea'
      rows='10'
      id='bodyText'
      onChange={handleTextChange}
    />
  );
}

export default RequestBody;