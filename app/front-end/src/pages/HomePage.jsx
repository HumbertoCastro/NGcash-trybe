import React, { useState, useEffect, useContext } from 'react';
import Button from '../components/Button';
import Filters from '../components/Filters';
import InputsText from '../components/InputsText';
import InputNumber from '../components/InputNumber';
import Navbar from '../components/Navbar';
import TransactionCard from '../components/TransactionCard';
import ngcashContext from '../context/ngcashContext';
import transactionsService from '../services/transactions';
import usersService from '../services/users';

function HomePage() {
  const {
    allTransactions,
    setAllTransactions,
    setUnfilterTransactions,
    accountBalance,
  } = useContext(ngcashContext);
  const [name, setName] = useState('');
  const [myId, setMyId] = useState('');
  const [creditedName, setCreditedName] = useState('');
  const [value, setValue] = useState(0);
  const [invalid, setInvalid] = useState(false);
  const [invalidMessage, setInvalidMessage] = useState('');

  const invalidUsername = () => (
    <h1>{ invalidMessage }</h1>
  );

  const handleChange = (
    { target: { value: inputValue, name: inputName } },
  ) => (inputName === 'name' ? setCreditedName(inputValue) : setValue(inputValue));

  const handleTransaction = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { token, accountId, name: userName } = user;

    if (userName === creditedName) {
      setInvalid(true);
      setInvalidMessage('You can not transfer to yourself');
      return;
    }
    if (parseInt(accountBalance, 10) < parseInt(value, 10)) {
      console.log('d');
      setInvalid(true);
      setInvalidMessage('You dont have enough money, sorry');
      return;
    }

    const data = {
      id: accountId,
      name: creditedName,
      value,
    };

    const headers = {
      Authorization: token,
    };
    try {
      await transactionsService.createTransaction(data, headers);
      window.location.reload(false);
    } catch (err) {
      setInvalidMessage('Please, put valid data');
      setInvalid(true);
    }
  };

  const getTransactions = async (accountId, id) => {
    setAllTransactions([]);
    transactionsService.getAllSales(accountId)
      .then((respose) => Promise.all(respose.map(async (x) => {
        console.log(x);
        const { debitedAccountId: debitedId, creditedAccountId: creditedId } = x;
        if (creditedId !== id) {
          const user = await usersService.getUserById(creditedId);
          const newObject = Object
            .assign(x, { creditedAccountId: user.username, type: 'cashout' });
          return newObject;
        }
        const user = await usersService.getUserById(debitedId);
        const newObject = Object
          .assign(x, { debitedAccountId: user.username, type: 'cashin' });
        return newObject;
      }))).then((maped) => {
        setAllTransactions([...maped]);
        setUnfilterTransactions([...maped]);
      });
  };

  useEffect(() => {
    const { name: username, accountId, id } = JSON.parse(localStorage.getItem('user'));
    setMyId(id);
    setName(username);
    getTransactions(accountId, id);
  }, []);

  return (
    <div className="products-page flex-column">
      <Navbar />
      <Filters />
      <main className="flex-column">
        {
          allTransactions.map((x) => {
            const {
              creditedAccountId: credited,
              debitedAccountId: debited,
              value: valueTransaction,
              createdAt,
            } = x;
            if (credited === myId) {
              return (
                <TransactionCard
                  name={ name }
                  value={ valueTransaction }
                  type="cashin"
                  otherAccountName={ debited }
                  date={ createdAt }
                />
              );
            }
            return (
              <TransactionCard
                key={ `${name}-${valueTransaction}` }
                name={ name }
                value={ valueTransaction }
                type="cashout"
                otherAccountName={ credited }
                date={ createdAt }
              />
            );
          })
        }
      </main>
      <section>
        <h1 className="terciary">Make a new Transaction</h1>
        <InputsText
          name="Credited Accout Username"
          stateName="name"
          callBack={ handleChange }
        />
        <InputNumber
          name="VALUE of the transaction"
          stateName="value"
          callBack={ handleChange }
        />
        <Button
          name="Make Transaction"
          importanceClass="terciary"
          callBack={ handleTransaction }
        />
        {
          invalid ? invalidUsername() : null
        }
      </section>
    </div>
  );
}

export default HomePage;
