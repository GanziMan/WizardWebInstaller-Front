import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

function PaymentDetails(props) {
  const { formValues } = props;
  const classes = useStyles();
  const { username,password,port } = formValues;
  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.title}>
      </Typography>
      <Typography gutterBottom>{`${username} ${password}`}</Typography>
      <Typography gutterBottom>{`${port}`}</Typography>
    </Grid>
  );
}

export default PaymentDetails;
