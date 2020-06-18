import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StorePage from './pages/StorePage';
import FrontPage from './pages/FrontPage';
import AllStores from './pages/AllStores';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/store/:id">
            <StorePage />
          </Route>
          <Route exact path="/store">
            <AllStores />
          </Route>
          <Route exact path="/">
            <FrontPage />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
