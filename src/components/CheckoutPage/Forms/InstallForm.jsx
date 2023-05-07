import React from 'react';
import { FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import { SelectField } from '../../FormFields';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const installs = [
  {
    value: '기본 설치',
    label: '기본 설치'
  },
  // {
  //   value: '고급 설치',
  //   label: '고급 설치',
  //   isdisabled:true,
  // }
];

export default function InstallForm() {
  const [Install, setInstall] = useState('기본설치');
  const handleChange = (event) => {
    setInstall(event.target.value);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
       설치모드 선택
      </Typography>
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-required-label">host</InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={Install}
              label="Install *"
              onChange={handleChange}
            >
              <MenuItem value={'기본설치'}>기본 설치</MenuItem>
              <MenuItem value={'고급설치'} disabled>고급 설치</MenuItem>
            </Select>
            {/* <FormHelperText>Required</FormHelperText> */}
          </FormControl>
    </React.Fragment>
  );
}

