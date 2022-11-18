import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import DetailsOrder from '../components/DetailsOrder';
import salesService from '../services/sales';
import Navbar from '../components/Navbar';

function CustomerOrder() {
  const [order, setOrder] = useState('');
  const [rerender, setRerender] = useState(true);

  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();

  const url = pathname.split('/');
  const id = url[url.length - 1];

  useEffect(() => {
    const loadOrder = async () => {
      const orderData = await salesService.getBySaleId(id);
      setOrder(orderData);
      setIsLoading(false);
    };

    if (rerender) loadOrder();
    loadOrder();
    setRerender(false);
  }, [id, rerender]);

  const costumerStatusControls = {
    markAsDelivered: async () => {
      salesService.updateSale(order.id, { status: 'Entregue' });
      setRerender(true);
    },
  };

  return (
    <div className="order-page flex-column">
      <Navbar />
      { isLoading ? (<p>Loading</p>) : (
        <DetailsOrder
          sale={ order }
          seller={ false }
          statusControls={ costumerStatusControls }
        />
      )}
    </div>
  );
}

export default CustomerOrder;

CustomerOrder.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
