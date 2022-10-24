import './App.scss';
import { Container } from 'react-bootstrap';
import Header from './components/header/Header';
import UrlForm from './components/form/UrlForm';
import Results from './components/results/Results';
import History from './components/history/History';

function App() {
  return (
    <div className="App">
      <Header id='header' />
      <Container id='main'>
        <Container id='history-div'>
          <History />
        </Container>
        <Container id='url-results-div'>
          <UrlForm />
          <Results />
        </Container>
      </Container>
    </div>
  );
}

export default App;
