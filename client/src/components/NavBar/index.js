// src/components/NavBar.js
import React, { useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useAuth0 } from '../../react-auth0-spa';
import ShoppingCart from "../ShoppingCart"
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Dropdown } from "react-bootstrap";
import RegisterStripe from '../RegisterStripe';
import SearchContext from '../../utils/searchContext';

// NEW - import the Link component

const NavBar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const {search, setSearch} = useContext(SearchContext);
  const [searchSubmit, setSubmit] = useState();

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

  const handleSearchChange = (event) => {
    setSubmit(event.target.value)
    console.log(search)
  }

  const submitSearch = (event) => {
    event.preventDefault();
    setSearch(searchSubmit)
  }

  return (

    <div>
      {searchSubmit && <Redirect to={`/?q=${search}`} />}
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
                <i className="fas fa-user fa-lg"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/">Home</Link>&nbsp;
                </Dropdown.Item>
                {!isAuthenticated && <Dropdown.Item href="#/action-1"><button onClick={() => loginWithRedirect()}>  Log in</button></Dropdown.Item>}
                <Dropdown.Item>
                  <Link to="/profile">  Profile</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <RegisterStripe />
                </Dropdown.Item>
                <Dropdown.Item >
                  <Link to="/upload">Upload a Product</Link>
                </Dropdown.Item>
                <Dropdown.Item>
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

            <Form inline onSubmit={submitSearch}>
              <FormControl onChange={handleSearchChange} type="input" placeholder="Search for products" className="mr-sm-2" />
              <Button variant="outline-success" type="submit">Search</Button>
            </Form>
          </Navbar.Collapse>
          <ShoppingCart />
        </Navbar>



    </div>
  );
};

export default NavBar;
