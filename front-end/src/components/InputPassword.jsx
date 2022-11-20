import React from 'react';
import PropTypes from 'prop-types';

function InputPassword({ callBack, stateName, name }) {
  return (
    <label htmlFor={ stateName }>
      { name }
      <input
        name={ stateName }
        className="input-text"
        type="password"
        onChange={ callBack }
      />
    </label>
  );
}
export default InputPassword;

InputPassword.propTypes = {
  name: PropTypes.string.isRequired,
  stateName: PropTypes.string.isRequired,
  callBack: PropTypes.func.isRequired,
};
