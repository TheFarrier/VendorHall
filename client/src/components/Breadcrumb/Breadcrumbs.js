import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import DropDown from '../Filter/dropdown';

class Breadcrumbs extends React.Component{
    render(){

        return(
            <div>
                <Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
  <DropDown/>
</Breadcrumb>
            </div>
        )
    }
}





export default Breadcrumbs;