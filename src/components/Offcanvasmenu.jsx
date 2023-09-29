import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import { logout } from "../config/firebase";
import { useUserContext } from "../context/UserContext";

export const OffCanvasMenu = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { user } = useUserContext();
  

  const handleLogout = async () => {
    try {
      await logout();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar bg='body-tertiary'>
        <div className='container-fluid'>
          <Button
            variant='navbar-toggler'
            type='button'
            onClick={handleShow}
            className='me-auto' 
          >
            <span className='navbar-toggler-icon'></span>
          </Button>
          <Navbar.Brand>Panel de usuario</Navbar.Brand>
        </div>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement='start'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className='flex-column'>
            <Nav.Item>
              <NavLink to='profile' className='nav-link' onClick={handleClose}>
                Mi perfil
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to='services' className='nav-link' onClick={handleClose}>
                Mis servicios
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to='/' className='nav-link' onClick={handleLogout}>
                Cerrar sesión
              </NavLink>
            </Nav.Item>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
