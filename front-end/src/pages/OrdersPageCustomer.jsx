import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import OrderCard from '../components/OrderCard';
import salesService from '../services/sales';

function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));

    const headers = {
      Authorization: token,
    };

    const loadOrders = async () => {
      const ordersList = await salesService.getAllUserSales(headers);
      setOrders(ordersList);
    };

    loadOrders();
    setIsLoading(false);
  }, []);

  return (
    <div className="products-page flex-column">
      <Navbar />
      { isLoading ? (<p>Loading</p>) : (
        <main>
          {
            orders.map((order) => {
              const {
                id, status, saleDate, totalPrice } = order;
              return (<OrderCard
                key={ `${id}` }
                orderId={ id }
                orderStatus={ status }
                orderData={ saleDate }
                orderTotal={ totalPrice }
                orderAddress=""
                sellerCard={ false }
              />);
            })
          }
        </main>
      )}
    </div>
  );
}

export default OrdersPage;
