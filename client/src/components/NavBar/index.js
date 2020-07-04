// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../../react-auth0-spa';
import ShoppingCart from "../ShoppingCart"
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

// NEW - import the Link component

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const styles = {
    headerStyle: {
      background: 'lightblue',
    },
    headingStyle: {
      fontSize: 100,
    },
  };

  return (

    

    // We use JSX curly braces to evaluate the style object
    <div>
      
      <header style={styles.headerStyle} className="header">
        <h1 style={styles.headingStyle}>
            VendorHall
        </h1>
      </header>


      {/* NEW - add a link to the home and profile pages */}
      {isAuthenticated && (
        <span>
          <Link to="/">  Home</Link>&nbsp;
          <Link to="/profile">  Profile</Link><br />
        </span>
      )}

      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>  Log in</button>
      )}

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Vendor Hall</Navbar.Brand>
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
          <Link to="/vendor">Become a Vendor</Link>

          {isAuthenticated && <button onClick={() => logout()}>  Log out</button>}

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <ShoppingCart />
      </Navbar>
    </div>
  );
};

export default NavBar;
