import React from 'react';
import { ButtonGroup, Dropdown, Form, Col, Container } from "react-bootstrap";
import "./style.css";

function Sidebar() {

  const styles = {

    containerStyle: {
      border: '.02rem solid',
      borderColor: 'MediumSeaGreen',
      width: '10rem',
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
            Category
          </Dropdown.Toggle>
          <Dropdown.Menu>
          {['Clothing', 'Accessories', 'Leatherwork', 'Writing', 'Toys and Games'].map((type) => (
              <div className='checkbox-item'>
                <Form.Check 
                type='checkbox'
                id={`default-${type}`}
                label={`${type}`}
              />
              </div>
          ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Price
          </Dropdown.Toggle>
          <Dropdown.Menu>
          {['Under $25', '$25 to $50', '$50 to $75', '$100 and Up'].map((type) => (
              <div className='checkbox-item'>
                <Form.Check 
                type='checkbox'
                id={`default-${type}`}
                label={`${type}`}
              />
              </div>
          ))}
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            Color
          </Dropdown.Toggle>
          <Dropdown.Menu>
          {['Black', 'Blue', 'Brown', 'Green', 'Orange', 'Purple', 'Red', 'Yellow'].map((type) => (
              <div className='checkbox-item'>
                <Form.Check 
                type='checkbox'
                id={`default-${type}`}
                label={`${type}`}
              />
              </div>
          ))}
          </Dropdown.Menu>
        </Dropdown>
      </ButtonGroup>
    </Form.Row>
    </Container>
  )
};

export default Sidebar;

