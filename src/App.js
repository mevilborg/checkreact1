import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Row, Col, Card, Button } from 'react-bootstrap';
function App() {
    return (
      <div className="App">
        <Navbar bg="light" expand="lg" color='red'>
          <Container>
            <Navbar.Brand>My React App</Navbar.Brand>
          </Container>
        </Navbar>
        <Container>
          <h1>Welcome to React Bootstrap</h1>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="card-image-1.jpg" />
                <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>
                    This is the first card.
                  </Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="card-image-2.jpg" />
                <Card.Body>
                  <Card.Title>Card 2</Card.Title>
                  <Card.Text>
                    This is the second card.
                  </Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="card-image-3.jpg" />
                <Card.Body>
                  <Card.Title>Card 3</Card.Title>
                  <Card.Text>
                    This is the third card.
                  </Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default App;
  