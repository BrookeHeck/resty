import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import './UrlForm.scss';
import axios from 'axios';

function UrlForm({ setResults }) {

  async function handleRequest(e) {
    e.preventDefault();
    const config = {
      method: e.target.methodSelect.value,
      url: e.target.urlInput.value,
    };
    try {
      let response = await axios(config);
      setResults(response.data);
    } catch(e) {
      
    }

  }


  return (
    <Form id='urlForm' onSubmit={handleRequest}>

      <Container id='inputsContainer'>
        <Form.Select id='methodSelect'>
          <option value="get">GET</option>
          <option value="post">POST</option>
          <option value="put">PUT</option>
          <option value="delete">DELETE</option>
        </Form.Select>

        <Form.Group >
          <Form.Label>URL: </Form.Label>
          <Form.Control type="text" placeholder="Enter URL" id='urlInput' />
        </Form.Group>
      </Container>


      <Button type="submit" className='submitForm' >
        Submit
      </Button>
    </Form>
  )
}

export default UrlForm;