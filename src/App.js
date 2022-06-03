import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Router from './router';
import Sidebar from './components/Sidebar';
import WrapperApp from './WrapperApp';

function App() {
  return (
    <WrapperApp>
      <Container>
        <Row>
          <Col xs={3}><Sidebar /></Col>
          <Col><Router /></Col>
        </Row>
      </Container>
    </WrapperApp>
  );
}

export default App;
