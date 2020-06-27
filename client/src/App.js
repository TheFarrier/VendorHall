import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StorePage from './pages/StorePage';
import AllStores from './pages/AllStores';
import NavBar from './components/NavBar';
import { useAuth0 } from './react-auth0-spa';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import history from './utils/history';
import Footer from './components/Footer';
import UploadProducts from './pages/UploadProduct';
import Header from './components/Header';
import Search from './components/Search';
import Sidebar from './components/Sidebar';


function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Header />
      {/* <Vendor /> */}
      <Router history={history}>
        <header>
        
          <NavBar />
          <Search />        
        </header>
        <Switch>
          <Route path="/" exact component={AllStores} />
          <Route path="/profile" component={Profile} />
          <Route exact path="/user/products/:id">
            <StorePage />
          </Route>
          <Route exact path="/upload">
            <UploadProducts />
          </Route>
          <Route exact path="/products">
            <AllStores />
          </Route>
          {/* <Route exact path="/products/:id" component={Product} /> */}
        </Switch>
        <PrivateRoute path="/profile" component={Profile} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
