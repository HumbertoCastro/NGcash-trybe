import React from 'react';
import PropTypes from 'prop-types';

function Button({ name, callBack, importanceClass, disabled }) {
  return (
    <button
      className={ !disabled ? importanceClass : `${importanceClass} disabilitado` }
      type="button"
      onClick={ callBack }
      disabled={ disabled }
    >
      {
        name
      }
    </button>
  );
}
export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  importanceClass: PropTypes.string.isRequired,
  callBack: PropTypes.func.isRequired,
};
