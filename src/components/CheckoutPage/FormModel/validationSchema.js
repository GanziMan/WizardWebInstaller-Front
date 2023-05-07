import * as Yup from 'yup';
import moment from 'moment';
import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    username,
    userName,
    password,
    password2,
    port,
    port2,
    city,
    zipcode,
    country,
    nameOnCard,
    cardNumber,
    expiryDate,
    cvv,
    host,
    install,
    distribute,
  }
} = checkoutFormModel;

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

export default [
  Yup.object().shape({
    // [firstName.name]: Yup.string().required(`${firstName.requiredErrorMsg}`),
    // [lastName.name]: Yup.string().required(`${lastName.requiredErrorMsg}`),
    // [address1.name]: Yup.string().required(`${address1.requiredErrorMsg}`),
    // [distribute.name]: Yup.string()
    //   .nullable()
    //   .required(`${distribute.requiredErrorMsg}`),
      
    // [zipcode.name]: Yup.string()
    //   .required(`${zipcode.requiredErrorMsg}`)
    //   .test(
    //     'len',
    //     `${zipcode.invalidErrorMsg}`,
    //     val => val && val.length === 5
    //   ),
    // [country.name]: Yup.string()
    //   .nullable()
    //   .required(`${country.requiredErrorMsg}`)
  }),
  Yup.object().shape({
    // [host.name]: Yup.string()
    // .nullable()
    // .required(`${host.requiredErrorMsg}`),
    // [nameOnCard.name]: Yup.string().required(`${nameOnCard.requiredErrorMsg}`),
    // [cardNumber.name]: Yup.string()
    //   .required(`${cardNumber.requiredErrorMsg}`)
    //   .matches(visaRegEx, cardNumber.invalidErrorMsg),
    // [expiryDate.name]: Yup.string()
    //   .nullable()
    //   .required(`${expiryDate.requiredErrorMsg}`)
    //   .test('expDate', expiryDate.invalidErrorMsg, val => {
    //     if (val) {
    //       const startDate = new Date();
    //       const endDate = new Date(2050, 12, 31);
    //       if (moment(val, moment.ISO_8601).isValid()) {
    //         return moment(val).isBetween(startDate, endDate);
    //       }
    //       return false;
    //     }
    //     return false;
    //   }),
    // [cvv.name]: Yup.string()
    //   .required(`${cvv.requiredErrorMsg}`)
    //   .test('len', `${cvv.invalidErrorMsg}`, val => val && val.length === 3)
  }),
  Yup.object().shape({
    //   [userName.name]: Yup.string().required(`${userName.requiredErrorMsg}`),
    // [password.name]: Yup.string().required(`${password2.requiredErrorMsg}`),
    // [port.name]: Yup.string().required(`${port2.requiredErrorMsg}`),

    // [nameOnCard.name]: Yup.string().required(`${nameOnCard.requiredErrorMsg}`),
    // [cardNumber.name]: Yup.string()
    //   .required(`${cardNumber.requiredErrorMsg}`)
    //   .matches(visaRegEx, cardNumber.invalidErrorMsg),
    // [expiryDate.name]: Yup.string()
    //   .nullable()
    //   .required(`${expiryDate.requiredErrorMsg}`)
    //   .test('expDate', expiryDate.invalidErrorMsg, val => {
    //     if (val) {
    //       const startDate = new Date();
    //       const endDate = new Date(2050, 12, 31);
    //       if (moment(val, moment.ISO_8601).isValid()) {
    //         return moment(val).isBetween(startDate, endDate);
    //       }
    //       return false;
    //     }
    //     return false;
    //   }),
    // [cvv.name]: Yup.string()
    //   .required(`${cvv.requiredErrorMsg}`)
    //   .test('len', `${cvv.invalidErrorMsg}`, val => val && val.length === 3)
  }),
  Yup.object().shape({
    // [install.name]: Yup.string()
    // .nullable()
    // .required(`${install.requiredErrorMsg}`),
    //   [userName.name]: Yup.string().required(`${userName.requiredErrorMsg}`),
    // [password.name]: Yup.string().required(`${password2.requiredErrorMsg}`),
    // [port.name]: Yup.string().required(`${port2.requiredErrorMsg}`),

    // [nameOnCard.name]: Yup.string().required(`${nameOnCard.requiredErrorMsg}`),
    // [cardNumber.name]: Yup.string()
    //   .required(`${cardNumber.requiredErrorMsg}`)
    //   .matches(visaRegEx, cardNumber.invalidErrorMsg),
    // [expiryDate.name]: Yup.string()
    //   .nullable()
    //   .required(`${expiryDate.requiredErrorMsg}`)
    //   .test('expDate', expiryDate.invalidErrorMsg, val => {
    //     if (val) {
    //       const startDate = new Date();
    //       const endDate = new Date(2050, 12, 31);
    //       if (moment(val, moment.ISO_8601).isValid()) {
    //         return moment(val).isBetween(startDate, endDate);
    //       }
    //       return false;
    //     }
    //     return false;
    //   }),
    // [cvv.name]: Yup.string()
    //   .required(`${cvv.requiredErrorMsg}`)
    //   .test('len', `${cvv.invalidErrorMsg}`, val => val && val.length === 3)
  })
];
