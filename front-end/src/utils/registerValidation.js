const isRegisterInputsValid = (email, password, name) => {
  const minPasswordLength = 6;
  const minNameLength = 12;
  const validEmailExp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  const isValidEmail = validEmailExp.test(email);
  const isValidPassword = password.length >= minPasswordLength;
  const isValidName = name.length >= minNameLength;
  if (isValidEmail && isValidPassword && isValidName) return true;
  return false;
};

export default isRegisterInputsValid;
