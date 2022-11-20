import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ngcashContext from './ngcashContext';

function Provider({ children }) {
  const [allTransactions, setAllTransactions] = useState([]);
  const [unfilterTransactions, setUnfilterTransactions] = useState([]);

  useEffect(() => {
    console.log(allTransactions);
  }, [allTransactions]);

  const contextValue = {
    allTransactions,
    setAllTransactions,
    unfilterTransactions,
    setUnfilterTransactions,
  };

  return (
    <ngcashContext.Provider value={ contextValue }>
      {children}
    </ngcashContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
