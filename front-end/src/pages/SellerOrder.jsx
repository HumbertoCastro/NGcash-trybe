import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import salesService from '../services/sales';
import DetailsOrder from '../components/DetailsOrder';

function SellerOrder() {
  const [order, setSellerOrder] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [rerender, setRerender] = useState(true);
  const { pathname } = useLocation();
  const urlParts = pathname.split('/');
  const orderId = urlParts[urlParts.length - 1];

  useEffect(() => {
    const loadSellerOrders = async () => {
      const sellerOrdersData = await salesService.getBySaleId(orderId);
      setSellerOrder(sellerOrdersData);
      setIsLoading(false);
    };

    if (rerender) loadSellerOrders();
    loadSellerOrders();
    setRerender(false);
  }, [orderId, rerender]);

  const sellerStatusControls = {
    markAsPreparing: async () => {
      salesService.updateSale(order.id, { status: 'Preparando' });
      setRerender(true);
    },
    markAsOutForDelivery: async () => {
      salesService
        .updateSale(order.id, { status: 'Em Trânsito' });
      setRerender(true);
    },
  };

  return (
    <div className="order-page flex-column">
      <Navbar />
      { isLoading ? (<p>Loading</p>) : (
        <DetailsOrder
          sale={ order }
          seller
          statusControls={ sellerStatusControls }
        />
      )}
    </div>
  );
}

export default SellerOrder;

SellerOrder.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
