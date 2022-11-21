import React, { useContext } from 'react';
import ngcashContext from '../context/ngcashContext';

function Filters() {
  const magic = -1;
  const {
    setAllTransactions,
    unfilterTransactions,
  } = useContext(ngcashContext);

  const filterByCashIn = () => {
    const mapedTransactions = unfilterTransactions.filter((x) => x.type === 'cashin');
    setAllTransactions(mapedTransactions);
  };

  const filterByCashOut = () => {
    const mapedTransactions = unfilterTransactions.filter((x) => x.type === 'cashout');
    setAllTransactions(mapedTransactions);
  };

  const filterByDateOlder = () => {
    const clone = unfilterTransactions;
    const olderTransactions = clone
      .sort((a, b) => {
        if (new Date(a.createdAt) > new Date(b.createdAt)) {
          return 1;
        } if (new Date(a.createdAt) < new Date(b.createdAt)) {
          return magic;
        }
        return 0;
      });
    console.log(olderTransactions);
    setAllTransactions([...olderTransactions]);
  };

  const filterByDateSooner = () => {
    const clone = unfilterTransactions;
    const mapedTransactions = clone
      .sort((a, b) => {
        if (new Date(a.createdAt) > new Date(b.createdAt)) {
          return magic;
        } if (new Date(a.createdAt) < new Date(b.createdAt)) {
          return 1;
        }
        return 0;
      });
    setAllTransactions(mapedTransactions);
  };

  return (
    <section>
      <button
        className="primary"
        type="button"
        onClick={ filterByCashIn }
      >
        cash-in
      </button>
      <button
        className="primary"
        type="button"
        onClick={ filterByCashOut }
      >
        cash-out
      </button>
      <button
        className="primary"
        type="button"
        onClick={ filterByDateOlder }
      >
        Date older
      </button>
      <button
        className="primary"
        type="button"
        onClick={ filterByDateSooner }
      >
        Date sooner
      </button>
    </section>
  );
}
export default Filters;
