import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false); 
  };

  return (
    <>
      <Navbar bg="transparent" expand="lg" expanded={expanded}>
        <Container>
          <NavLink to="/" className="navbar-brand text-white">
            Auth-react-firebase
          </NavLink>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" onClick={handleNavClick}>
              <NavLink to="/" className="nav-link text-white">
                Inicio
              </NavLink>
              <NavLink to="/about" className="nav-link text-white">
                Acerca de
              </NavLink>
              <NavLink to="/register" className="nav-link text-white">
                Regístrate
              </NavLink>
              <NavLink to="/login" className="nav-link text-white">
                Iniciar sesión
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
