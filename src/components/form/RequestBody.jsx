import React, { useRef, useEffect } from 'react';
import { Form } from 'react-bootstrap';

function RequestBody({jsonText, setJsonText }) {
  const bodyText = useRef(null);
  
  function handleTextChange(e) {
    if(bodyText.current.value) {
      setJsonText(e.target.value);
    }
  }

  useEffect(() => {
    console.log(jsonText);
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