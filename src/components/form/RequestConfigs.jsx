import React, { useState, useReducer } from 'react';
import { Nav } from 'react-bootstrap';
import RequestBody from './RequestBody';
import RequestHeader from './RequestHeader';

function RequestConfigs() {
  const [activeKey, setActiveKey] = useState(1);
  // const [jsonText, setJsonText] = useState('');
  // const [authCredentials, setAuthCredentials] = useState({});
  // const [token, setToken] = useState('');

  const [state, dispatch] = useReducer(reducer, {
    jsonText: '',
    authCredentials: {
      username: '',
      password: ''
    },
    token: '',
  });

  function handleSelect(selectedKey) {
    setActiveKey(selectedKey);
  }

  return (
    <div>
      <Nav variant="tabs" defaultActiveKey='2' onSelect={handleSelect}>
        <Nav.Item>
          <Nav.Link eventKey='1'>Body</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='2'>Header</Nav.Link>
        </Nav.Item>
      </Nav>

      {
        activeKey === '1' ?
          <RequestBody jsonText={state.jsonText} dispatch={dispatch} />
          :
          <RequestHeader
            authCredentials={state.authCredentials}
            dispatch={dispatch}
            token={state.token}
          />
      }
    </div>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case 'bearer':
      return {
        jsonText: state.jsonText,
        authCredentials: state.authCredentials,
        token: action.token,
      }
    case 'json':
      return {
        jsonText: action.jsonText,
        authCredentials: state.authCredentials,
        token: state.token,
      }
      case 'auth':
        return {
          jsonText: state.jsonText,
          authCredentials: action.authCredentials,
          token: state.token,
        }
    default:
      return state;
  }
}

export default RequestConfigs;