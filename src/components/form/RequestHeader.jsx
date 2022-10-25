import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

function RequestHeader() {
  const [selected, setSelected] = useState('');
  const authTypes = ['Bearer', 'Basic', 'None'];

  function handleRadioSelect(e) {
    setSelected(e.target.id);
  }

  return (
    <div>
      {
        authTypes.map(type => (
          <Form.Check
            key={type}
            id={type}
            name='group'
            type='radio'
            label={type}
            inline
            onClick={handleRadioSelect}
          />
        ))
      }
      {
        selected === 'Bearer' &&
        <Form.Control
          type='text'
          id='bearerToken'
          placeholder='token'
        />
      }
      {
        selected === 'Basic' &&
        <div>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </div>
      }
    </div>
  )
}

export default RequestHeader;