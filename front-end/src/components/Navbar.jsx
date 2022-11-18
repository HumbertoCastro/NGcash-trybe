import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Button from './Button';

function Navbar() {
  const [userName, setUsername] = useState('');
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    const { role, name } = user;

    setUserRole(role);
    setUsername(name);
  }, []);
  const history = useHistory();
  const location = useLocation();
  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };
  const handleRedirectProducts = () => {
    if (location.pathname !== '/customer/products') {
      history.push('/customer/products');
    }
  };
  const handleRedirectOrders = () => {
    if (location.pathname !== '/customer/orders') {
      history.push('/customer/orders');
    }
  };
  const handleRedirectSellerOrders = () => {
    console.log('clicou');
    if (location.pathname !== '/seller/orders') {
      history.push('/seller/orders');
    }
  };
  return (
    <div className="navbar flex-row">
      {
        userRole === 'customer' ? (
          <div className="flex-row">
            <Button
              callBack={ handleRedirectProducts }
              disabled={ false }
              name="PRODUTOS"
              importanceClass="secundary"
              dataTestId="customer_products__element-navbar-link-products"
            />
            <Button
              callBack={ handleRedirectOrders }
              disabled={ false }
              name="MEUS PEDIDOS"
              importanceClass="primary"
              dataTestId="customer_products__element-navbar-link-orders"
            />
          </div>
        ) : (
          <button
            type="button"
            onClick={ handleRedirectSellerOrders }
            data-testid="customer_products__element-navbar-link-orders"
          >
            PEDIDOS
          </button>
        )
      }
      <h1
        data-testid="customer_products__element-navbar-user-full-name"
        className="purple"
      >
        { userName }
      </h1>
      <Button
        dataTestId="customer_products__element-navbar-link-logout"
        name="SAIR"
        importanceClass="blue"
        callBack={ handleLogout }
        disabled={ false }
      />
    </div>
  );
}

export default Navbar;
