import React from "react";
import "./style.css";

const styles = {
  headerStyle: {
    background: "lightblue"
  },
  headingStyle: {
    fontSize: 100
  }
};

// We use JSX curly braces to evaluate the style object

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}><i class="fa fa-shopping-bag" aria-hidden="true"></i> VendorHall <i class="fa fa-shopping-bag" aria-hidden="true"></i></h1>
    </header>
  );
}

export default Header;
