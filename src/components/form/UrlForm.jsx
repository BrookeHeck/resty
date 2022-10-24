import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './UrlForm.scss';

function UrlForm() {
  return (
    <Form id='urlForm'>
      <Form.Group controlId="formURL">
        <Form.Label>URL: </Form.Label>
        <Form.Control type="text" placeholder="Enter URL" />
      </Form.Group>

      <Container id='methodsDiv'>
        <Button className='method'>
          GET
        </Button>
        <Button className='method' >
          POST
        </Button>
        <Button className='method' >
          PUT
        </Button>
        <Button className='method' >
          DELETE
        </Button>
      </Container>

      <Button type="submit" className='submitForm' >
        Submit
      </Button>
    </Form>
  )
}

export default UrlForm;