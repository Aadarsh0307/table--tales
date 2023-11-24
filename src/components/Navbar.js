import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

function Navigationbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    const isConfirmed = window.confirm('Are you sure you want to log out?');

    if (isConfirmed) {
      alert('Logging out...');
      navigate('/');
    }
  };

  return (
    
    <Navbar className='navbar' expand="lg">
      <Navbar.Brand as={NavLink} to="/">Table Tales</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/book-table">Book Table</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/restaurant-login">Signin</Nav.Link>
          <Nav.Link as={NavLink} to="/signup">Signup</Nav.Link>
          <NavDropdown title="Account" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to="/profile">View Profile</NavDropdown.Item>
            <NavDropdown.Item onClick={() => handleLogout()}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigationbar;
