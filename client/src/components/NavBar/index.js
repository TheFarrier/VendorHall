// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../../react-auth0-spa';
import ShoppingCart from "../ShoppingCart"
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Dropdown } from "react-bootstrap";
import RegisterStripe from '../RegisterStripe';

// NEW - import the Link component

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const styles = {
    headerStyle: {
      background: 'WhiteSmoke',
    },
    headingStyle: {
      fontSize: 25,
      background: 'WhiteSmoke',
      float: 'left'
    },
    dropdownStyle: {
      float: 'right',
      background: 'WhiteSmoke'
    }
  };

  return (

    <div>
      <header style={styles.headerStyle} className="header">
        <h1 style={styles.headingStyle}>
          <i className="fa fa-shopping-bag" aria-hidden="true" />
          {' '}
            VendorHall
          {' '}
          <i className="fa fa-shopping-bag" aria-hidden="true" />
        </h1>

        {isAuthenticated && (
          <span>
            <Dropdown style={styles.dropdownStyle}>
              <Dropdown.Toggle className="justify-content-end" variant="light" id="dropdown-basic">
                <i class="fas fa-user fa-lg"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <Link to="/">Home</Link>&nbsp;
              </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <Link to="/profile">  Profile</Link>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <RegisterStripe />
                </Dropdown.Item>
                <Dropdown.Item href="#/action-4">
                  {isAuthenticated && <button onClick={() => logout()}>  Log out</button>}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </span>
        )}

        
        
      </header>

      <Navbar bg="light" expand="sm">
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#link">Clothing</Nav.Link>
              <Nav.Link href="#link">Jewelry</Nav.Link>
              <Nav.Link href="#link">Art</Nav.Link>
              <Nav.Link href="#link">Entertainment</Nav.Link>
              <Nav.Link href="#link">Used</Nav.Link>
              <NavDropdown title="Sort by" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Sort by newest</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Sort by price: high to low</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Sort by price: low to high</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Sort by customer ratings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.5">Daily Featured Vendor</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Form inline>
              <FormControl type="text" placeholder="Search for products" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
          <ShoppingCart />
        </Navbar>



    </div>
  );
};

export default NavBar;
