import React, { useState, useEffect} from 'react';
import Button from '../components/Button';
import InputsText from '../components/InputsText';
import InputNumber from '../components/InputsText copy';
import Navbar from '../components/Navbar';
import TransactionCard from '../components/TransactionCard';
import transactionsService from '../services/transactions';
import usersService from '../services/users';

function HomePage() {
  const [transactions, setTransactions] = useState([]);
  const [name, setName] = useState('');
  const [myId, setMyId] = useState('');
  const [creditedName, setCreditedName] = useState('');
  const [value, setValue] = useState(0);

  const handleChange = (
    { target: { value, name: inputName } },
  ) => (inputName === "name" ? setCreditedName(value) : setValue(value) );

  const handleTransaction = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { token, accountId } = user;
    console.log(creditedName, value);

    const data = {
      id: accountId,
      name: creditedName,
      value,
    };

    const headers = {
      Authorization: token,
    };

    const trans = await transactionsService.createTransaction(data, headers);
    window.location.reload(false);
  }

  const getTransactions = async (accountId, id) => {
    console.log("foi sChamado");
    transactionsService.getAllSales(accountId)
      .then((respose) => Promise.all(respose.map(async (x) => {
        const { debitedAccountId: debitedId, creditedAccountId: creditedId } = x;
        if (creditedId !== id) {
          console.log('cashouts')
          const user = await usersService.getUserById(creditedId);
          const newObject = Object.assign({}, x, { creditedAccountId: user.username});
          return newObject;
        } else {
          console.log('cashIN')
          const user = await usersService.getUserById(debitedId);
          const newObject = Object.assign({}, x, { debitedAccountId: user.username});
          return newObject;
        }
      }))).then((maped) => setTransactions([...maped]));
  }

  useEffect(() => {
    const { name: username, accountId, id } = JSON.parse(localStorage.getItem('user'));
    setMyId(id);
    setName(username);
    getTransactions(accountId, id);
  }, []);

  return (
    <div className="products-page flex-column">
      <Navbar />
      <main>
        {
          transactions.map((x) => {
            const { creditedAccountId: credited, debitedAccountId: debited, value } = x;
            if (credited === myId) {
              return (
                <TransactionCard
                  name={ name }
                  value={ value }
                  type="cashin"
                  otherAccountName={ debited }
                />
              )
            } else {
              return (
                <TransactionCard
                  name={ name }
                  value={ value }
                  type="cashout"
                  otherAccountName={ credited }
                />
              )
            }
          })
        }
      </main>
      <section>
        <h1 className="terciary">Make a new Transaction</h1>
        <InputsText name="Credited Accout Username" stateName="name" callBack={ handleChange } />
        <InputNumber name="VALUE of the transaction" stateName="value" callBack={ handleChange } />
        <Button name="Make Transaction" importanceClass="terciary" callBack={ handleTransaction }/>
      </section>
    </div>
  );
}

export default HomePage;
