import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import ProductCartCard from './ProductCartCard';

const priceParse = (priceToParse) => priceToParse.replace('.', ',');

const customerButton = (status, statusControls) => {
  const deliveryTest = 'customer_order_details__button-delivery-check';

  return (
    <th>
      <Button
        name="MARCAR COMO ENTREGUE"
        dataTestId={ deliveryTest }
        importanceClass="primary"
        disabled={ status !== 'Em Trânsito' }
        callBack={ statusControls.markAsDelivered }
      />
    </th>);
};

const sellerButtons = (status, statusControls) => {
  const dispatchTest = 'seller_order_details__button-dispatch-check';
  const preparingTest = 'seller_order_details__button-preparing-check';

  return (
    <th>
      <Button
        name="PREPARAR PEDIDO"
        dataTestId={ preparingTest }
        importanceClass="primary"
        disabled={ status !== 'Pendente' }
        callBack={ statusControls.markAsPreparing }
      />
      <Button
        name="SAIU PARA ENTREGA"
        dataTestId={ dispatchTest }
        importanceClass="primary"
        disabled={ status !== 'Preparando' }
        callBack={ statusControls.markAsOutForDelivery }
      />
    </th>
  );
};

function DetailsOrder({
  sale,
  seller,
  statusControls,
}) {
  const isSeller = seller ? 'seller' : 'customer';
  const dataTestPrice = `${isSeller}_order_details__element-order-total-price`;
  const sellerTest = `${isSeller}_order_details__element-order-details-label-seller-name`;
  const pedidoIdTest = `${isSeller}_order_details__element-order-details-label-order-id`;
  const dataTest = `${isSeller}_order_details__element-order-details-label-order-date`;
  const stTest = `${isSeller}_order_details__element-order-details-label-delivery-status`;
  return (
    <label htmlFor="tabela">
      Detalhe do Pedido
      <table name="tabela">
        <thead>
          <th data-testid={ pedidoIdTest }>
            { `PEDIDO ${sale.id}`}
          </th>
          <th data-testid={ sellerTest }>{`P.Vend: ${sale.sellerName}`}</th>
          <th data-testid={ dataTest }>{ sale.saleDate }</th>
          <th data-testid={ stTest }>{ sale.status }</th>
          {
            !seller ? customerButton(sale.status, statusControls)
              : sellerButtons(sale.status, statusControls)
          }
        </thead>
        <thead>
          <th>item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitario</th>
          <th>SubTotal</th>
        </thead>
        <tbody>
          {
            sale.products.map((product, index) => (
              <ProductCartCard
                name={ product.name }
                key={ product.name }
                price={ product.price }
                quantity={ product.quantity }
                index={ index }
              />
            ))
          }
        </tbody>
        <h1
          data-testid={ dataTestPrice }
          className="primary"
        >
          {priceParse(sale.totalPrice)}
        </h1>
      </table>
    </label>
  );
}

export default DetailsOrder;

DetailsOrder.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.string.isRequired,
    sellerName: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    orderIndex: PropTypes.number.isRequired,
    products: PropTypes,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
  seller: PropTypes.bool.isRequired,
  statusControls: PropTypes.shape({
    markAsDelivered: PropTypes.func,
    markAsPreparing: PropTypes.func,
    markAsOutForDelivery: PropTypes.func,
  }).isRequired,
};
