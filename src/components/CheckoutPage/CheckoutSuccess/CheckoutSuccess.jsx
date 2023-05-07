import React from 'react';
import { Typography } from '@material-ui/core';
import {FaCheckCircle} from 'react-icons/fa'
function CheckoutSuccess() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you
      </Typography>
      <Typography variant="subtitle1">
     <FaCheckCircle style={{color:"rgb(91,209,215)"}} /> Installation succeeded.
      </Typography>
    </React.Fragment>
  );
}

export default CheckoutSuccess;
