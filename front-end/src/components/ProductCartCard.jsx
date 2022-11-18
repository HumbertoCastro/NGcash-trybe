import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import deliveryContext from '../context/deliveryContext';

function ProductCartCard({ name, price, quantity, remove, index }) {
  const nameDatatest = `customer_checkout__element-order-table-name-${index}`;
  const quantityDatatest = `customer_checkout__element-order-table-quantity-${index}`;
  const priceDatatest = `customer_checkout__element-order-table-unit-price-${index}`;
  const subtotalDatatest = `customer_checkout__element-order-table-sub-total-${index}`;
  const rmDatatest = `customer_checkout__element-order-table-remove-${index}`;
  const itemData = `customer_checkout__element-order-table-item-number-${index}`;

  const { setCartProducts, cartProducts } = useContext(deliveryContext);

  const chanceDot = (string) => string.replaceAll('.', ',');

  const deleteProduct = () => {
    const productsUpdated = cartProducts.filter((product) => product.name !== name);
    setCartProducts(productsUpdated);
  };

  return (
    <tr>
      <td className="secundary" data-testid={ itemData }>{ index + 1 }</td>
      <td data-testid={ nameDatatest }>
        {
          name
        }
      </td>
      <td data-testid={ quantityDatatest } className="primary">
        {
          quantity
        }
      </td>
      <td data-testid={ priceDatatest } className="purple">
        {
          chanceDot(parseFloat(price).toFixed(2))
        }
      </td>
      <td data-testid={ subtotalDatatest } className="blue">
        {
          chanceDot(parseFloat(price * quantity).toFixed(2))
        }
      </td>
      {
        remove ? (
          <Button
            name="Remover"
            dataTestId={ rmDatatest }
            importanceClass="primary"
            callBack={ () => deleteProduct() }
            disabled={ false }
          />
        ) : null
      }
    </tr>
  );
}
export default ProductCartCard;

ProductCartCard.propTypes = {
  name: PropTypes.string.isRequired,
  remove: PropTypes.bool.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};
