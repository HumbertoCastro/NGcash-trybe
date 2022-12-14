import '../styles/Login.css';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';
import InputsText from '../components/InputsText';
import img from '../images/trybelogo.png';
import isNameAndPasswordValid from '../utils/loginValidation';
import loginService from '../services/login';
import InputPassword from '../components/InputPassword';

const invalidLogin = () => (
  <p>
    Credencias Invalidas
  </p>
);

function Login({ history }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [isLoginInvalid, setIsLoginInvalid] = useState(false);
  const isLogged = localStorage.getItem('user');
  const defaultRoute = '/home';

  if (isLogged) {
    history.push(defaultRoute);
  }

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) return history.push(defaultRoute);
  }, [history]);

  const handleLogin = async () => {
    try {
      const userLogin = await loginService.login({ name, password });
      localStorage.setItem('user', JSON.stringify(userLogin));
      history.push('/home');
    } catch {
      setIsLoginInvalid(true);
    }
  };

  const registerButton = () => {
    history.push('/register');
  };

  const handleChange = (
    { target: { value, name: nameInput } },
  ) => (nameInput === 'Name' ? setName(value) : setPassword(value));

  useEffect(() => {
    const verifyInputs = () => {
      const validation = isNameAndPasswordValid(name, password);
      setDisabled(!validation);
    };
    verifyInputs();
  }, [name, password]);

  return (
    <section className="login flex-column">
      <div className="login-container">
        <h1>A CARTEIRA DA NOVA GERAÇAO</h1>
        <form className="flex-column">
          <img src={ img } className="form-logo" alt="imagem-logo" width="70px" />
          <InputsText
            name="Login"
            stateName="Name"
            callBack={ handleChange }
          />
          <InputPassword
            name="Senha"
            stateName="Senha"
            callBack={ handleChange }
          />
          <div className="buttons-login-container">
            <Button
              importanceClass="primary"
              name="LOGIN"
              callBack={ handleLogin }
              disabled={ disabled }
            />
            <Button
              importanceClass="terciary"
              name="Ainda não tenho conta"
              disabled={ false }
              callBack={ registerButton }
            />
          </div>
        </form>
      </div>
      <div className="side-div">
        <div className="flex-row brand">
          <h1>NGcash app</h1>
          <img className="trybe-logo" src={ img } alt="imagem-logo" width="70px" />
        </div>
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
