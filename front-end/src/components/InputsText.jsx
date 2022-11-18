import React from 'react';
import PropTypes from 'prop-types';

function InputsText({ dataTestId, callBack, stateName, name }) {
  return (
    <label htmlFor={ stateName }>
      { name }
      <input
        name={ stateName }
        className="input-text"
        type="text"
        data-testid={ dataTestId }
        onChange={ callBack }
      />
    </label>
  );
}
export default InputsText;

InputsText.propTypes = {
  name: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  stateName: PropTypes.string.isRequired,
  callBack: PropTypes.func.isRequired,
};
