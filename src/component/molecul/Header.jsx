import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import INFORSA from '../../assets/inforsa.png'
import { Link } from 'react-router-dom';
import { Link as Linkdom } from 'react-scroll';

function Header() {
  return (
    <Navbar sticky='top' collapseOnSelect expand="lg" className="bg-body-tertiary h-16">
      <Link to='/'>
        <img
            src={INFORSA}
            width="50"
            height="50"
            className="ml-3 d-inline-block align-top"
            alt="React Bootstrap logo"
          />
      </Link>
      <Navbar.Brand href="#home" as={Link} to='/' className='ml-3 font-bold text-3xl'>
          INFORSA
          <div className='font-light text-sm'>Information System Association</div>
      </Navbar.Brand>
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Linkdom} href="/" activeClass="active" to="/" spy={true} smooth={true} offset={-100} duration={500} >Home</Nav.Link>
            <Nav.Link as={Linkdom} href="About" activeClass="active" to="About" spy={true} smooth={true} offset={-100} duration={500} >About</Nav.Link>
            <NavDropdown title="Departemen" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="KPSDM" as={Link} to='/KPSDM'>KPSDM</NavDropdown.Item>
              <NavDropdown.Item href="RPPM" as={Link} to='/RPPM'>RPPM</NavDropdown.Item>
              <NavDropdown.Item href="RELEKAT" as={Link} to='/RELEKAT'>RELEKAT</NavDropdown.Item>
              <NavDropdown.Item href="KOMINFO" as={Link} to='/KOMINFO'>KOMINFO</NavDropdown.Item>
              <NavDropdown.Item href="INKREF" as={Link} to='/INKREF'>INKREF</NavDropdown.Item>
              <NavDropdown.Divider /> 
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to='Upload' href="#deets">Upload</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;