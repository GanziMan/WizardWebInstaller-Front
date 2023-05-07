import React from 'react';
import {FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import { useState } from 'react';

export default function FirstStep() {
  const [Distribute, setDistribute] = useState('Standalone');
  const handleChange = (event) => {
    setDistribute(event.target.value);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
       구성 선택
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">distribute</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={Distribute}
          label="distribute *"
          onChange={handleChange}
        >
          <MenuItem value={'Standalone'}>Standalone</MenuItem>
          <MenuItem value={'Cluster'} disabled>Cluster</MenuItem>
        </Select>
        
      </FormControl>
        </Grid>
      </Grid>
    </React.Fragment> 
  );
}

