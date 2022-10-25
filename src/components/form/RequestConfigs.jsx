import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import RequestBody from './RequestBody';
import RequestHeader from './RequestHeader';

function RequestConfigs({ setBody, setHeaders }) {
  const [activeKey, setActiveKey] = useState();

  function handleSelect(selectedKey) {
    setActiveKey(selectedKey);
    console.log(activeKey);
  }

  return (
    <div>
      <Nav variant="tabs" defaultActiveKey='1' onSelect={handleSelect}>
        <Nav.Item>
          <Nav.Link eventKey='1'>Body</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='2'>Header</Nav.Link>
        </Nav.Item>
      </Nav>

      {
        activeKey === '1' ?
          <RequestBody />
          :
          <RequestHeader />
      }
    </div>
  );
}

export default RequestConfigs;