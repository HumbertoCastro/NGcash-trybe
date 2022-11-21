const isNameAndPasswordValid = (name, password) => {
  const min = 3;
  const validPasswordExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
  const isValidPassword = validPasswordExp.test(password);
  const isValidName = name.length >= min;
  if (isValidName && isValidPassword) return true;
  return false;
};

export default isNameAndPasswordValid;
