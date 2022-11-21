import React from 'react';
import PropTypes from 'prop-types';

function InputsText({ callBack, stateName, name }) {
  return (
    <label htmlFor={ stateName }>
      { name }
      <input
        name={ stateName }
        className="input-text"
        type="text"
        onChange={ callBack }
      />
    </label>
  );
}
export default InputsText;

InputsText.propTypes = {
  name: PropTypes.string.isRequired,
  stateName: PropTypes.string.isRequired,
  callBack: PropTypes.func.isRequired,
};
