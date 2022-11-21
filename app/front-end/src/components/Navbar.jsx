import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import accountService from '../services/account';
import ngcashContext from '../context/ngcashContext';

function Navbar() {
  const [userName, setUsername] = useState('');
  const {
    accountBalance, setAccountBalance,
  } = useContext(ngcashContext);

  useEffect(async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { name, accountId } = user;
    console.log(name);
    setUsername(name);
    const account = await accountService.getByid(accountId);
    setAccountBalance(account.balance);
    console.log(userName);
  }, []);

  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };
  return (
    <div className="navbar flex-row">
      <h1>
        { userName }
      </h1>
      <h1>
        Available cash:
        { accountBalance }
      </h1>
      <Button
        name="SAIR"
        importanceClass="blue"
        callBack={ handleLogout }
        disabled={ false }
      />
    </div>
  );
}

export default Navbar;
