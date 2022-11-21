import React from 'react';
import PropTypes from 'prop-types';

function TransactionCard({ name, value, type, otherAccountName, date }) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  const formatDate = new Date(date);
  if (type === 'cashin') {
    return (
      <table className="flex-row green">
        <tr className="purple">cash-in: </tr>
        <tr>{ otherAccountName }</tr>
        <tr>to</tr>
        <tr>{ name }</tr>
        <tr className="primary">{ `+${value}` }</tr>
        <tr>{ formatDate.toLocaleDateString('en-US', options) }</tr>
      </table>
    );
  }
  return (
    <div className="flex-row red">
      <h1>cash-out</h1>
      <h1>{ name }</h1>
      <p>to</p>
      <h1>{ otherAccountName }</h1>
      <p>with the value of: -</p>
      <h1>{ value }</h1>
      <p>{ formatDate.toLocaleDateString('en-US', options) }</p>
    </div>
  );
}
export default TransactionCard;

TransactionCard.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  otherAccountName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
