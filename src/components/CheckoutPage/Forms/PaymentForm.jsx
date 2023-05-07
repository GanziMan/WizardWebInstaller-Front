import React from 'react';
import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import { SelectField} from '../../FormFields';
import { detect } from 'detect-browser';
import browser from 'browser-detect';
import { useState } from 'react';

const browserResult = browser();

const hosts = [
  {
    value: '로컬 호스트',
    label: '로컬 호스트'
  },
 
];

export default function PaymentForm(props) {
  const {
    formField: {host}
  } = props;
  const [Host, setHost] = useState('');
  const handleChange = (event) => {
    setHost(event.target.value);
  };
  return (
    <React.Fragment>
         <Typography variant="h6" gutterBottom>
       호스트 설정
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
