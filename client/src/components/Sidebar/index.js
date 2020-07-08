import React from 'react';
import { ButtonGroup, Dropdown, Form, Col, Container } from "react-bootstrap";
import "./style.css";

function Sidebar() {

  const styles = {

    containerStyle: {
      border: '.02rem solid',
      borderColor: 'DarkCyan',
      width: '12rem',
      float: 'left',
      
    }

  };

  return (
    <Container style={styles.containerStyle}>
    <Form.Row as={Col} sm="1">
      <ButtonGroup vertical>
        <h1>Filter Products</h1>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Price
        </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Under $25</Dropdown.Item>
            <Dropdown.Item href="#/action-2">$25 to $50</Dropdown.Item>
            <Dropdown.Item href="#/action-3">$50 to $75</Dropdown.Item>
            <Dropdown.Item href="#/action-4">$100 and Up</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Color
        </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Black</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Blue</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Brown</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Green</Dropdown.Item>
            <Dropdown.Item href="#/action-5">Orange</Dropdown.Item>
            <Dropdown.Item href="#/action-6">Purple</Dropdown.Item>
            <Dropdown.Item href="#/action-7">Red</Dropdown.Item>
            <Dropdown.Item href="#/action-8">Yellow</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ButtonGroup>
    </Form.Row>
    </Container>
  )
};

export default Sidebar;

