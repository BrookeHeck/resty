import { Form, Button, Container } from 'react-bootstrap';
import './UrlForm.scss';
import axios from 'axios';
import RequestConfigs from './RequestConfigs';

function UrlForm({ setResults, history, setHistory, setIsLoading, setIsError }) {


  function updateHistory(config) {
    const newHistory = history;
    newHistory.push(config);
    setHistory(newHistory);
  }

  function jsonChecker(body) {
    try {
      const noWhiteSpace = body.replace(/[\t\n\s]+/gm, '');
      console.log(JSON.parse(noWhiteSpace));
      return JSON.parse(noWhiteSpace);
    } catch(e) {
      throw new Error('Invalid JSON');
    }
  }

  function formatHeader(credentials) {
    if(credentials.username) {
      return {
        username: credentials.username,
        password: credentials.password,
      };
    } else {
      return {
        'Authorization': `Bearer ${credentials.token}`
      };
    }
  };

  async function handleRequest(e) {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    try {
      const config = {
        method: e.target.methodSelect.value,
        url: e.target.urlInput.value,
      };

      if(e.target.bodyText) config.data = jsonChecker(e.target.bodyText.value);

      if(e.target.bearerToken) config.headers = formatHeader({token: e.target.bearerToken.value});

      if(e.target.usernameInput && e.target.passInput) {
        config.auth = formatHeader({
          username: e.target.usernameInput.value,
          password: e.target.passInput.value,
        });
      }

      try {
        console.log(config);
        let response = await axios(config);
        console.log(response);
        setResults(response.data);
        config.results = response.data;
        updateHistory(config);
        setIsLoading(false);
      } catch(e) {
        setIsLoading(false);
        setResults('');
        setIsError(true);
        throw new Error('Invalid Request');
      }
    } catch(e) {
      console.log(e);
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