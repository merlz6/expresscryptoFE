
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Navi() {
  return (
    <Navbar className="container-fluid" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Crypto-FrontEnd</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse  id="responsive-navbar-nav">
        <Nav className="ml-auto" c>
          <Nav.Link disabled href="#features">Cryptocurrencies</Nav.Link>
          <Nav.Link  disabled href="#pricing">Exchanges</Nav.Link>
          <Nav.Link  href="#pricing"><Link to="/watchlist">Watchlist</Link></Nav.Link>
          <Nav.Link  disabled href="#pricing">Portfolio</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navi;
