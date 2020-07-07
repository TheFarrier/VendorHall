import React from 'react';
import CheckboxLabels from './filtration';

import Dropdown from 'react-bootstrap/Dropdown';

export default class DropDown extends React.Component{
    render(){
        return(
            <div>
                <Dropdown>
  
  <Dropdown.Menu>
   <CheckboxLabels/>
  </Dropdown.Menu>
</Dropdown>
            </div>
        )
    }
}