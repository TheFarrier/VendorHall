// src/App.js

import React from "react";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";
// New - import the React Router components, and the Profile page component
import { Router, Route, Switch } from "react-router-dom";
// NEW - import the PrivateRoute component
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import history from "./utils/history";
import Footer from "./components/Footer";


function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <Route path="/profile" component={Profile} />
        </Switch>
        <PrivateRoute path="/profile" component={Profile} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;




