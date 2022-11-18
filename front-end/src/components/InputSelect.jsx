import React from 'react';
import PropTypes from 'prop-types';

function InputsSelect({ dataTestId, callBack, stateName, name, sellerName, options }) {
  return (
    <label htmlFor={ stateName }>
      { name }
      <select
        name={ stateName }
        className="input-select"
        data-testid={ dataTestId }
        onChange={ callBack }
        value={ sellerName }
      >
        {
          options.map((option) => (
            <option key={ `${option} option` } value={ option }>{ option }</option>
          ))
        }
      </select>
    </label>
  );
}
export default InputsSelect;

InputsSelect.propTypes = {
  name: PropTypes.string.isRequired,
  sellerName: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  stateName: PropTypes.string.isRequired,
  callBack: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
