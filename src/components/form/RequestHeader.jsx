import React, { useState, useRef, useEffect } from 'react';
import { Form } from 'react-bootstrap';

function RequestHeader({ authCredentials, setAuthCredentials, token, setToken }) {
  const tokenInput = useRef(null);
  const usernameInput = useRef(null);
  const passInput = useRef(null);

  const [selected, setSelected] = useState('');
  const authTypes = ['Bearer', 'Basic', 'None'];

  useEffect(() => {
    if(usernameInput.current) {
      usernameInput.current.value = authCredentials.username;
      passInput.current.value = authCredentials.password;
    }
    if(tokenInput.current) tokenInput.current.value = token;

  }, [authCredentials, token, tokenInput, selected])

  function handleRadioSelect(e) {
    setSelected(e.target.id);
  }

  function handleUsernameChange(e) {
    usernameInput.current.value = e.target.value;
    setAuthCredentials({
      username: e.target.value,
      password: authCredentials.password,
    });
  }

  function handlePasswordChange(e) {
    passInput.current.value = e.target.value;
    setAuthCredentials({
      username: authCredentials.username,
      password: e.target.value,
    });
  }

  function handleBearerAuthChange(e) {
    tokenInput.current.value = e.target.value;
    setToken(e.target.value);
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
          ref={tokenInput}
          type='text'
          id='bearerToken'
          placeholder='token'
          onChange={handleBearerAuthChange}
        />
      }
      {
        selected === 'Basic' &&
        <div>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              id='usernameInput'
              ref={usernameInput}
              onChange={handleUsernameChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password"
              placeholder="Password"
              id='passInput'
              ref={passInput}
              onChange={handlePasswordChange}
            />
          </Form.Group>
        </div>
      }
    </div>
  )
}

export default RequestHeader;