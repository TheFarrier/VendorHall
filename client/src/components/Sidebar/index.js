import React from 'react';
import { ButtonGroup, Button, Dropdown, DropdownButton, Form, Col } from "react-bootstrap";
import "./style.css";

function Sidebar() {
  return (

    <Form.Row as={Col} md="4">
      <ButtonGroup vertical>
        <h1>Filter Products</h1>

        <DropdownButton as={ButtonGroup} title="Price" id="bg-vertical-dropdown-1">
          <Dropdown.Item eventKey="1">Under $25</Dropdown.Item>
          <Dropdown.Item eventKey="2">$25 to $50</Dropdown.Item>
          <Dropdown.Item eventKey="3">$50 to $100</Dropdown.Item>
          <Dropdown.Item eventKey="4">$100 and Up</Dropdown.Item>
        </DropdownButton>

        <DropdownButton as={ButtonGroup} title="Color" id="bg-vertical-dropdown-2">
          <Dropdown.Item eventKey="1"></Dropdown.Item>
          <Dropdown.Item eventKey="2">Black</Dropdown.Item>
          <Dropdown.Item eventKey="3">Blue</Dropdown.Item>
          <Dropdown.Item eventKey="4">Brown</Dropdown.Item>
          <Dropdown.Item eventKey="5">Green</Dropdown.Item>
          <Dropdown.Item eventKey="6">Red</Dropdown.Item>
          <Dropdown.Item eventKey="6">Purple</Dropdown.Item>
        </DropdownButton>  
      </ButtonGroup>
      
    </Form.Row>

  )
};

export default Sidebar;