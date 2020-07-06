import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import DropDown from '../Filter/dropdown';
import './style.css'

class Breadcrumbs extends React.Component {
    render() {

        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/profile">Profile</Breadcrumb.Item>
                    <Breadcrumb.Item href="/StorePage">Store</Breadcrumb.Item>
                    <Breadcrumb.Item href="/ProductCard">Product</Breadcrumb.Item>
                    <DropDown />
                </Breadcrumb>
            </div>
        )
    }
}





export default Breadcrumbs;