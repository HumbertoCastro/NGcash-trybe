import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const priceParse = (priceToParse) => priceToParse.replace('.', ',');

function OrderCard({
  orderId, orderStatus, orderAddress, orderData, orderTotal, sellerCard,
}) {
  const history = useHistory();
  const location = useLocation();
  const handleRedirectOrders = () => {
    if (location.pathname !== '/customer/orders') {
      history.push(`/seller/orders/${orderId}`);
    } else {
      history.push(`/customer/orders/${orderId}`);
    }
  };

  const isSeller = sellerCard ? 'seller' : 'customer';

  const dataTestOrderId = `${isSeller}_orders__element-order-id-${orderId}`;
  const dataTestDeliveryStatus = `${isSeller}_orders__element-delivery-status-${orderId}`;
  const dataTestOrderDate = `${isSeller}_orders__element-order-date-${orderId}`;
  const dataTestCardPrice = `${isSeller}_orders__element-card-price-${orderId}`;

  return (
    <div
      className="order-card flex-row"
      onClick={ handleRedirectOrders }
      onKeyPress={ handleRedirectOrders }
      role="none"
    >
      <div className="orderId flex-column">
        <span
          data-testid={ dataTestOrderId }
        >
          {`pedido ${orderId}`}
        </span>
      </div>
      <div className="status-card flex-column">
        <div className="status-infos flex-row">
          <div className="status-title">
            <h3
              data-testid={ dataTestDeliveryStatus }
            >
              { orderStatus }
            </h3>
          </div>
          <div className="orderInfos flex-column">
            <p
              className="order-data"
              data-testid={ dataTestOrderDate }
            >
              { orderData }
            </p>
            <p
              className="order-total"
              data-testid={ dataTestCardPrice }
            >
              { priceParse(orderTotal) }
            </p>
          </div>
        </div>
        {
          orderAddress ? (
            <div>
              <p>
                { orderAddress }
              </p>
            </div>
          ) : null
        }
      </div>
    </div>
  );
}

export default OrderCard;

OrderCard.propTypes = {
  orderId: PropTypes.number.isRequired,
  orderStatus: PropTypes.string.isRequired,
  orderData: PropTypes.string.isRequired,
  orderTotal: PropTypes.string.isRequired,
  orderAddress: PropTypes.string.isRequired,
  sellerCard: PropTypes.bool.isRequired,
};
