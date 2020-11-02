
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,NavDropdown,Form,Row,Col,Button } from 'react-bootstrap';
import Paragraphe from './paragraphe';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Formulaire de réservation d'hôtel</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Créer</Nav.Link>
      <Nav.Link href="#pricing">Paramètres</Nav.Link>
      <NavDropdown title="Menu" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Autre action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Autres</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Autres Liens</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Form>
  <Row>Nom complet *
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
</Form>
<Form>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Email
    </Form.Label>
    <Col sm={10}>
      <Form.Control type="email" placeholder="Email" />
    </Col>
  </Form.Group>
  </Form>
  <Form>
    <Form.Group>
    <Form.Label>Type de Chambre</Form.Label>
    <Form.Control as="select" disabled>
      <option>Type de Chambre</option>
    </Form.Control>
  </Form.Group>
  </Form>
  <Form>
    <Form.Group controlId="exampleForm.SelectCustomSizeSm">
    <Form.Label>Nombre de personnes *</Form.Label>
    <Form.Control as="select" size="sm" custom>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  </Form>

  <Form>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Demandes spéciales</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  </Form>
  <Paragraphe/>
<Button variant="warning">Je réserve</Button>{' '}
  
      </header>
    </div>
  );
}

export default App;
