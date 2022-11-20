import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import accountService from '../services/account';

function Navbar() {
  const [userName, setUsername] = useState('');
  const [accountBalance, setAccountBalance] = useState(0);

  useEffect(async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { id, name, accountId } = user;
    setId(id);
    setUsername(name);
    const account = await accountService.getByid(accountId);
    setAccountBalance(account.balance);
  }, []);

  const history = useHistory();

  const handleLogout = () => {
    localStorage.clear();
    history.push('/');
  };
  return (
    <div className="navbar flex-row">
      <h1
        className="purple"
      >
        { userName }
      </h1>
      <h1
        className="purple"
      >
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
