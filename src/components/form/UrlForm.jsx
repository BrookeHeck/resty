import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './UrlForm.scss';

function UrlForm() {
  return (
    <Form id='urlForm'>

      <Container id='inputsContainer'>
        <Form.Select>
          <option value="get">GET</option>
          <option value="post">POST</option>
          <option value="put">PUT</option>
          <option value="delete">DELETE</option>
        </Form.Select>

        <Form.Group controlId="formURL">
          <Form.Label>URL: </Form.Label>
          <Form.Control type="text" placeholder="Enter URL" />
        </Form.Group>
      </Container>


      <Button type="submit" className='submitForm' >
        Submit
      </Button>
    </Form>
  )
}

export default UrlForm;