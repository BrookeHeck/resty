import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import RequestBody from './RequestBody';
import RequestHeader from './RequestHeader';

function RequestConfigs() {
  const [activeKey, setActiveKey] = useState();
  const [jsonText, setJsonText] = useState('');
  const [authCredentials, setAuthCredentials] = useState({
    username: 'username',
    password: 'foo',
  });
  const [token, setToken] = useState('');

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
          <RequestBody jsonText={jsonText} setJsonText={setJsonText} />
          :
          <RequestHeader 
            authCredentials={authCredentials}
            setAuthCredentials={setAuthCredentials}
            token={token}
            setToken={setToken}
          />
      }
    </div>
  );
}

export default RequestConfigs;