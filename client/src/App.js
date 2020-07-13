import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StorePage from './pages/StorePage';
import AllStores from './pages/AllStores';
import Checkout from './pages/Checkout';
import NavBar from './components/NavBar';
import { useAuth0 } from './react-auth0-spa';

import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import history from './utils/history';
import Footer from './components/Footer';
import UploadProducts from './pages/UploadProduct';
import Sidebar from './components/Sidebar';
import Vendor from './components/Vendor/index';
import './App.css';
import Breadcrumbs from './components/Breadcrumb/Breadcrumbs';
//The RB css import code
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/ProductCard';
import SingleProduct from './components/SingleProduct';
import CartContext from './utils/cartContext';
import DB from './utils/IndexedDB'


function App() {
  const { loading } = useAuth0();
  const [cart, setCart] = useState([{
    listID: "",
    image: "",
    name: "",
    price: 0,
    quantity: 0
  }]);

  function addToCart (product) {DB.addToCart(product).then((res)=>{setCart(res)})}
  function removeFromCart (product) {DB.removeFromCart(product)}
  function getCart (){
    DB.openDB.then((res) => {
      setCart(res)
    });
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <CartContext.Provider value={{cart, addToCart, removeFromCart, getCart}}>
        <Router history={history}>
          <header>
            <NavBar />
            <Breadcrumbs />
          
          </header>
          <Sidebar />
          <Switch>
            <Route path="/" exact component={AllStores} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/vendor/:id" component={Vendor} />
            <Route exact path="/user/products/:id">
              <StorePage />
            </Route>
            <Route exact path="/upload">
              <UploadProducts />
            </Route>
            <Route exact path="/products">
              <AllStores />
            </Route>
            <Route path="/product/:id" component={SingleProduct} />
          </Switch>
          <PrivateRoute path="/profile" component={Profile} />
          
        </Router>
      </CartContext.Provider>
      
      <Footer />
    </div>
  );
}

export default App;
