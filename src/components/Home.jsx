import React from 'react';
import { Container, Row } from 'react-bootstrap';

// internal imports
import NavBar from './NavBar';
import '../App.css';

function Home() {
  return (
    <div>
        <NavBar />
        <Row className='home-page'>
          <Container className='w-75'>
            <h1>Welcome Nerds!</h1>
          </Container>
        </Row>
    </div>
  )
}

export default Home
