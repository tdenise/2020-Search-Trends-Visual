import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import { NavBar } from './components/NavBar';
// import { InfoCard } from './components/Card';
// import { Container, Row, Col } from 'react-bootstrap';
import { TestGraph } from './components/TestGraph';
import { JanGraph } from './components/JanGraph';
import { FebGraph } from './components/FebGraph';
import { MarGraph } from './components/MarGraph';
import { AprGraph } from './components/AprGraph';
import { MayGraph } from './components/MayGraph';
import { JunGraph } from './components/JunGraph';
import { JulGraph } from './components/JulGraph';
import { AugGraph } from './components/AugGraph';
import { SepGraph } from './components/SepGraph';
import { OctGraph } from './components/OctGraph';
import { NovGraph } from './components/NovGraph';
import { JumbotronSect } from './components/Jumbotron';

function App() {
  

  return (
    <div className="App">
      <NavBar />
      <JumbotronSect />
      <TestGraph />
      <JanGraph />
      <FebGraph />
      <MarGraph />
      <AprGraph />
      <MayGraph />
      <JunGraph />
      <JulGraph />
      <AugGraph />
      <SepGraph />
      <OctGraph />
      <NovGraph />
      
    </div>
  );
}

export default App;
