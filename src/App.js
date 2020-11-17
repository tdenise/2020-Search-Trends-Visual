import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import { NavBar } from './components/NavBar';
import { InfoCard } from './components/Card';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container class="Layout-container">
        <Row>
          <Col>      
            <InfoCard />
          </Col>
          <Col>...</Col> 
        </Row>
      </Container>
    </div>
  );
}

export default App;
