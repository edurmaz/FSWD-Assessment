import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import AboutUs from './components/AboutUs';
import Candidates from './components/Candidates';
import Home from './components/Home';
import Details from './components/Details';


function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className='text-right'>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/candidates">Candidates</Nav.Link>
            <Nav.Link href="/about-us">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/candidates' element={<Candidates />} />
        <Route path='/candidates/Details/:id' element={<Details />} />
        <Route path='/about-us' element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
