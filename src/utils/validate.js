export const checkValidateData = (email, password, name, isSignInForm) => {
  const isEmailValid = /^\w+([-.+']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);


   // ✅ Only validate name in Sign Up
  if (!isSignInForm) {
    const isNameValid = name && name.trim().length >= 3;
    if (!isNameValid) return "Name must be at least 3 characters";
  }
  
  if(!isEmailValid) return 'Email is Not valid!';
  if(!isPasswordValid) return 'Password is not valid';
  if (isEmailValid && isPasswordValid) return null;

};
