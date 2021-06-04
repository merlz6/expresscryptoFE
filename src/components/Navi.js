
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';

function Navi() {
  return (
    <Navbar className="container-fluid" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Crypto-FrontEnd</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse  id="responsive-navbar-nav">
        <Nav className="ml-auto" c>
          <Nav.Link href="#features">Cryptocurrencies</Nav.Link>
          <Nav.Link  href="#pricing">Exchanges</Nav.Link>
          <Nav.Link  href="#pricing">Watchlist</Nav.Link>
          <Nav.Link  href="#pricing">Portfolio</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navi;
