import { Form, Button, Container } from 'react-bootstrap';
import './UrlForm.scss';
import axios from 'axios';
import RequestConfigs from './RequestConfigs';

function UrlForm({ setResults, history, setHistory }) {

  function updateHistory(config) {
    const newHistory = history;
    newHistory.push(config);
    setHistory(newHistory);
  }

  function jsonChecker(body) {
    try {
      const noWhiteSpace = body.replace(/[\t\n\s]+/gm, '');
      console.log(noWhiteSpace);
      return JSON.parse(noWhiteSpace);
    } catch(e) {
      throw new Error('Invalid JSON');
    }
  }

  async function handleRequest(e) {
    e.preventDefault();
    try {
      const requestBody = e.target.bodyText.value ? jsonChecker(e.target.bodyText.value) : '';
      const config = {
        method: e.target.methodSelect.value,
        url: e.target.urlInput.value,
        data: requestBody,
      };

      try {
        let response = await axios(config);
        setResults(response.data);
        updateHistory(config);
      } catch(e) {
        throw new Error('Invalid Request');
      }
    } catch(e) {
      console.log(e.message);
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

      <RequestConfigs />

      <Button type="submit" className='submitForm' >
        Submit
      </Button>
    </Form>
  )
}

export default UrlForm;