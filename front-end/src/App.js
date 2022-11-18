import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Provider from './context/Provider';
import Checkout from './pages/Checkout';
import CustomerOrder from './pages/CustumerOrder';
import Login from './pages/Login';
import OrdersPageCustomer from './pages/OrdersPageCustomer';
import ProductsPage from './pages/ProductsPage';
import Register from './pages/Register';
import OrdersPageSeller from './pages/OrdersPageSeller';
import SellerOrder from './pages/SellerOrder';

function App() {
  return (
    <Provider>
      <div className="app">
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/customer/products" component={ ProductsPage } />
          <Route exact path="/customer/checkout" component={ Checkout } />
          <Route exact path="/customer/orders" component={ OrdersPageCustomer } />
          <Route exact path="/customer/orders/:id" component={ CustomerOrder } />
          <Route exact path="/seller/orders" component={ OrdersPageSeller } />
          <Route exact path="/seller/orders/:id" component={ SellerOrder } />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
