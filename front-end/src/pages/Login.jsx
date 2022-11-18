import '../styles/Login.css';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import deliveryApp from '../images/delivery.png';
import Button from '../components/Button';
import InputsText from '../components/InputsText';
import img from '../images/trybelogo.png';
import isEmailAndPasswordValid from '../utils/loginValidation';
import loginService from '../services/login';

function invalidLogin() {
  return (
    <p
      data-testid="common_login__element-invalid-email"
    >
      Credencias Invalidas
    </p>
  );
}

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [isLoginInvalid, setIsLoginInvalid] = useState(false);
  const isLogged = localStorage.getItem('user');
  const defaultRoute = '/customer/products';

  if (isLogged) {
    history.push(defaultRoute);
  }

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) return history.push(defaultRoute);
  }, [history]);

  const handleLogin = async () => {
    try {
      const userLogin = await loginService.login({ email, password });
      localStorage.setItem('user', JSON.stringify(userLogin));
      if (userLogin.role === 'customer') history.push(defaultRoute);
      if (userLogin.role === 'seller') history.push('/seller/orders');
    } catch {
      setIsLoginInvalid(true);
    }
  };

  const registerButton = () => {
    history.push('/register');
  };

  const handleChange = (
    { target: { value, name } },
  ) => (name === 'Email' ? setEmail(value) : setPassword(value));

  useEffect(() => {
    const verifyInputs = () => {
      const validation = isEmailAndPasswordValid(email, password);
      setDisabled(!validation);
    };
    verifyInputs();
  }, [email, password]);

  return (
    <section className="login flex-column">
      <div className="login-container">
        <form className="flex-column">
          <img src={ img } className="form-logo" alt="imagem-logo" width="70px" />
          <InputsText
            dataTestId="common_login__input-email"
            name="Login"
            stateName="Email"
            callBack={ handleChange }
          />
          <InputsText
            dataTestId="common_login__input-password"
            name="Senha"
            stateName="Senha"
            callBack={ handleChange }
          />
          <div className="buttons-login-container">
            <Button
              dataTestId="common_login__button-login"
              importanceClass="primary"
              name="LOGIN"
              callBack={ handleLogin }
              disabled={ disabled }
            />
            <Button
              dataTestId="common_login__button-register"
              importanceClass="terciary"
              name="Ainda não tenho conta"
              disabled={ false }
              callBack={ registerButton }
            />
          </div>
        </form>
      </div>
      <div>
        <div className="flex-row brand">
          <h1>Delivery app</h1>
          <img className="delivery-logo" src={ img } alt="imagem-logo" width="70px" />
        </div>
        <img className="delivery-img" src={ deliveryApp } alt="" />
      </div>
      {
        isLoginInvalid && invalidLogin()
      }
    </section>
  );
}

export default Login;

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
    action: PropTypes.string,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
