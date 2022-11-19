import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import deliveryContext from './deliveryContext';
function Provider({ children }) {

  useEffect(() => {
  }, []);

  const contextValue = {
  };

  return (
    <deliveryContext.Provider value={ contextValue }>
      {children}
    </deliveryContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
