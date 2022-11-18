import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import deliveryContext from '../context/deliveryContext';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';

function ProductsPage({ history }) {
  const [disabled, setDisabled] = useState(true);
  const { products, totalPrice } = useContext(deliveryContext);

  const buttonDatatest = 'customer_products__button-cart';

  const priceParse = (priceToParse) => {
    if (typeof priceToParse === 'string') return priceToParse.replace('.', ',');
  };

  useEffect(() => {
    const isPriceLowerThanZero = +totalPrice <= 0;
    setDisabled(isPriceLowerThanZero);
  }, [totalPrice]);

  return (
    <div className="products-page flex-column">
      <Navbar />
      <main>
        {
          products.map((x) => {
            const { name, price, id, urlImg } = x;
            return (<ProductCard
              key={ id }
              name={ name }
              imgSrc={ urlImg }
              id={ id }
              price={ price }
            />
            );
          })
        }
      </main>
      <button
        type="button"
        data-testid={ buttonDatatest }
        className="primary see-car-button"
        onClick={ () => { history.push('/customer/checkout'); } }
        disabled={ disabled }
      >
        Ver carrinho: R$
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          { priceParse(totalPrice) }
        </span>
      </button>
    </div>
  );
}

export default ProductsPage;

ProductsPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
