import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import INFORSA from '../../assets/inforsa.png'
import { Link, useNavigate } from 'react-router-dom';
import { Link as Linkdom } from 'react-scroll';
import Swal from 'sweetalert2';

function Header() {
  const isLoggedIn = localStorage.getItem("token") !== null;
  const navigate = useNavigate();
  const logOut = () => {
    Swal.fire({
      title: "Are you sure to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        navigate("/");
        Swal.fire({
          title: "Logout Success",
          icon: "success",
        });
      }
    });
  }
  return (
    <Navbar sticky='top' collapseOnSelect expand="lg" className="bg-body-tertiary sm:h-16 md:h-20">
      <Container>
      <Link to='/'>
        <img
            src={INFORSA}
            width="50"
            height="50"
            className="ml-3 d-inline-block align-top"
            alt="React Bootstrap logo"
          />
      </Link>
      <Navbar.Brand href="#home" as={Link} to='/' className='mx-3 font-bold text-3xl sm:text-md md:text-2xl lg:text-3xl xl:text-4xl'>
        INFORSA
        <div className='font-light text-sm'>Information System Association</div>
      </Navbar.Brand>
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
            {isLoggedIn?(
            <>
              <Nav.Link as={Link} to='Upload' href="#Upload">Upload</Nav.Link>
              <Nav.Link onClick={logOut} className='text-red-600 font-bold' href="#logout">Log Out</Nav.Link>
            </>
              )
            :(<Nav.Link as={Link} to='Login' className='text-green-600 font-bold' href="#Upload">Login</Nav.Link>)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;