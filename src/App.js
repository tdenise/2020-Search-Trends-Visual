import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import { NavBar } from './components/NavBar';
// import { InfoCard } from './components/Card';
// import { Container, Row, Col } from 'react-bootstrap';
import { TestGraph } from './components/TestGraph';


 

function App() {
  

  return (
    <div className="App">
      <NavBar />
      <TestGraph />
      
    </div>
  );
}

export default App;
