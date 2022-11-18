import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import OrderCard from '../components/OrderCard';
import salesService from '../services/sales';

function OrdersPage() {
  const [orders, setOrders] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));

    const headers = {
      Authorization: token,
    };

    const loadSellerSales = async () => {
      const sellerSales = await salesService.getAllSellerSales(headers);
      setOrders(sellerSales);
      setIsLoading(false);
    };

    loadSellerSales();
  }, []);

  return (
    <div className="products-page flex-column">
      <Navbar />
      { isLoading ? (<p>Loading</p>) : (
        <main>
          {
            orders.map((x) => {
              const {
                id, status, deliveryAddress, deliveryNumber, saleDate, totalPrice } = x;
              return (<OrderCard
                key={ `${id}` }
                orderId={ id }
                orderStatus={ status }
                orderAddress={ `${deliveryAddress}, ${deliveryNumber}` }
                orderData={ saleDate }
                orderTotal={ totalPrice }
                sellerCard
              />);
            })
          }
        </main>
      )}
    </div>
  );
}

export default OrdersPage;
