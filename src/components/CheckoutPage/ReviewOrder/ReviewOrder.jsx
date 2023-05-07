import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import ProductDetails from './ProductDetails';

export default function ReviewOrder() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        정보입력 결과
      </Typography>
      <ProductDetails />
      {/* <Grid container spacing={2}>
        <ShippingDetails formValues={formValues} />
        <PaymentDetails formValues={formValues} />
      </Grid> */}
    </React.Fragment>
  );
}
