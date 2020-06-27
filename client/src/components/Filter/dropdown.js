import React from 'react';
import CheckboxLabels from './filtration';

import Dropdown from 'react-bootstrap/Dropdown';

export default class DropDown extends React.Component{
    render(){
        return(
            <div>
                <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Filter
  </Dropdown.Toggle>

  <Dropdown.Menu>
   <CheckboxLabels/>
  </Dropdown.Menu>
</Dropdown>
            </div>
        )
    }
}