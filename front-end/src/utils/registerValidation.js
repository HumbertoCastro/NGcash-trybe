const isRegisterInputsValid = (password, name) => {
  const minNameLength = 3;
  const validPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]){8,20}/;
  const isValidPassword = validPassword.test(password);
  const isValidName = name.length >= minNameLength;
  if (isValidPassword && isValidName) return true;
  return false;
};

export default isRegisterInputsValid;
