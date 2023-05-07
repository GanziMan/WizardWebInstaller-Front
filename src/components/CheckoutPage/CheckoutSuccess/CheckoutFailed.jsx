import React from 'react';
import { Typography } from '@material-ui/core';
import {FaSadCry} from 'react-icons/fa'
function CheckoutFailed() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Failed
      </Typography>
      <Typography variant="subtitle1">
     <FaSadCry style={{color:"red"}} /> Installation failed.
      </Typography>
    </React.Fragment>
  );
}

export default CheckoutFailed;
