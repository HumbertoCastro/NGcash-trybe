import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import InputsText from '../components/InputsText';
import usersService from '../services/users';
import loginService from '../services/login';
import isRegisterInputsValid from '../utils/registerValidation';

function invalidLogin() {
  return (
    <p
      data-testid="common_register__element-invalid_register"
    >
      Credencias Invalidas
    </p>
  );
}

function Register({ history }) {
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [isLoginInvalid, setIsLoginInvalid] = useState(false);

  const handleRegister = async () => {
    try {
      await usersService.createUser({ name, password });
      console.log(name, password);

      const newUserLogin = await loginService.login({ name, password });
      console.log(newUserLogin);

      if (newUserLogin) {
        localStorage.setItem('user', JSON.stringify(newUserLogin));
        history.push('/home');
      }
    } catch {
      setIsLoginInvalid(true);
    }
  };

  useEffect(() => {
    const verifyInputs = () => {
      const valid = isRegisterInputsValid(password, name);
      setDisabled(!valid);
    };
    verifyInputs();
  }, [password, name]);

  const handleChange = ({ target: { value, name: nameInput } }) => {
    if (nameInput === 'Senha') {
      setPassword(value);
    } else {
      setName(value);
    }
  };

  return (
    <div className="register flex-column">
      <form className="flex-column">
        <InputsText
          name="Name"
          stateName="Name"
          callBack={ handleChange }
        />
        <InputsText
          name="Senha"
          stateName="Senha"
          callBack={ handleChange }
        />
        <Button
          importanceClass="primary"
          name="CADASTRAR"
          callBack={ handleRegister }
          disabled={ disabled }
        />
      </form>
      {
        isLoginInvalid && invalidLogin()
      }
    </div>
  );
}

export default Register;

Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
