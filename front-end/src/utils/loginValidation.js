const isEmailAndPasswordValid = (email, password) => {
  const min = 6;
  const validEmailExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  const isValidEmail = validEmailExp.test(email);
  const isValidPassword = password.length >= min;
  if (isValidEmail && isValidPassword) return true;
  return false;
};

export default isEmailAndPasswordValid;
