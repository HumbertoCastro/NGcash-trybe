import React from 'react';
import PropTypes from 'prop-types';

function TransactionCard({ name, value, type, otherAccountName}) {
  if (type === 'cashin') {
    return (
      <div className="flex-row green">
        <h1>cash-in: </h1>
        <h1>{ otherAccountName }</h1>
        <p>to</p>
        <h1>{ name }</h1>
        <p>with the value of: +</p>
        <h1>{ value }</h1>
      </div>
    )
  }
  return (
    <div className="flex-row red">
      <h1>cash-out</h1>
        <h1>{ name }</h1>
        <p>to</p>
        <h1>{ otherAccountName }</h1>
        <p>with the value of: -</p>
        <h1>{ value }</h1>
    </div>
  );
}
export default TransactionCard;

TransactionCard.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  otherAccountName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
