import React from 'react';
import { Form } from 'react-bootstrap';

function RequestBody() {
  return (
    <Form.Control 
      as='textarea'
      rows='10'
      id='bodyText'
    />
  );
}

export default RequestBody;