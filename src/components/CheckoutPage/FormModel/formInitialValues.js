import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    username,
    userName,
    password,
    password2,
    port2,
    port,
    city,
    zipcode,
    country,
    useAddressForPaymentDetails,
    nameOnCard,
    cardNumber,
    expiryDate,
    cvv,
    host,
    distribute,
    install,
    frhUser,
    frhAddr,
    frhPort,
    frhDir,
    frhPassword
  }
} = checkoutFormModel;

export default {
  [username.name]: '',
  [userName.name]: '',
  [password.name]: '',
  [password2.name]: '',
  [port.name]: '',
  [port2.name]: '',
  [city.name]: '',
  [zipcode.name]: '',
  [country.name]: '',
  [useAddressForPaymentDetails.name]: false,
  [nameOnCard.name]: '',
  [cardNumber.name]: '',
  [expiryDate.name]: '',
  [cvv.name]: '',
  [host.name]: '',
  [distribute.name]: '',
  [install.name]: '',
  [frhUser.name]: '',
  [frhAddr.name]: '',
  [frhPort.name]: '',
  [frhDir.name]: '',
  [frhPassword.name]: '',
  
};
