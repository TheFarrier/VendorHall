import React from "react";
import "../styles/Header.css";

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
      <h1 style={styles.headingStyle}>Online Store 2020</h1>
    </header>
  );
}

export default Header;
