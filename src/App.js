import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import { NavBar } from './components/NavBar';
// import { InfoCard } from './components/Card';
// import { Container, Row, Col } from 'react-bootstrap';
import { TestGraph } from './components/TestGraph';
import { JumbotronSect } from './components/Jumbotron';

function App() {
  

  return (
    <div className="App">
      <NavBar />
      <JumbotronSect />
      <TestGraph />
      
    </div>
  );
}

export default App;
