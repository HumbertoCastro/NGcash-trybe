import React from 'react';
import PropTypes from 'prop-types';

function InputNumber({ callBack, stateName, name }) {
  return (
    <label htmlFor={ stateName }>
      { name }
      <input
        name={ stateName }
        className="input-text"
        type="number"
        onChange={ callBack }
      />
    </label>
  );
}
export default InputNumber;

InputNumber.propTypes = {
  name: PropTypes.string.isRequired,
  stateName: PropTypes.string.isRequired,
  callBack: PropTypes.func.isRequired,
};
