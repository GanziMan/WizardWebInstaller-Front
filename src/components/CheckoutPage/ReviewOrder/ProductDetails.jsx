import React, { useEffect, useState } from 'react';
import {Typography, List, ListItem, ListItemText, Checkbox, Button} from '@material-ui/core';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { InstallReq, IsReq } from '../../../redux/actions/Action';
import { encrypt } from '../../../aes256';
import CheckoutSuccess from '../CheckoutSuccess/CheckoutSuccess'
import { useHistory } from 'react-router-dom';


function ProductDetails() {
  const history = useHistory()
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector(state => state)
  const [startFlag, setStartFlag] = useState('N');
  // const [info, setInfo] = useState([userName]);
  

  
  const changeHandler = (checked) => {
    if (!checked) {
      setStartFlag('N'); 
    } else {
      setStartFlag('Y');
    }
  };

 
  const InstallAgent = () => {
    dispatch(IsReq(state.AccountReducer.userName, encrypt(state.AccountReducer.password), state.AccountReducer.port, state.AccountReducer.frhUser, state.AccountReducer.frhAddr, state.AccountReducer.frhPort, state.AccountReducer.frhDir, encrypt(state.AccountReducer.frhPassword),startFlag, state.AccountReducer.os));
    // console.log(dispatch(IsReq(state.AccountReducer.userName, encrypt(state.AccountReducer.password), state.AccountReducer.port, state.AccountReducer.frhUser, state.AccountReducer.frhAddr, state.AccountReducer.frhPort, state.AccountReducer.frhDir, encrypt(state.AccountReducer.frhPassword),startFlag,state.AccountReducer.os)));
    history.push("./step2");
  }
  return (
    <React.Fragment>
    <List disablePadding>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"userName"} />
        <Typography variant="body2" style={{ "fontSize": "20px" }}>{state.AccountReducer.userName}</Typography>
      </ListItem>
      {/* <ListItem className={classes.listItem} key={state.AccountReducer.password}>
        <ListItemText primary={"password"} />
        <Typography variant="body2" style={{ "fontSize": "20px" }}>{state.AccountReducer.password}</Typography>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <ListItemText primary={"port"} />
        <Typography variant="body2" style={{ "fontSize": "20px" }}>{state.AccountReducer.port}</Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"frhUser"} />
        <Typography variant="body2" style={{ "fontSize": "20px" }}>{state.AccountReducer.frhUser}</Typography>
      </ListItem>
      <ListItem className={classes.listItem} >
        <ListItemText primary={"frhAddr"} />
        <Typography variant="body2" style={{ "fontSize": "20px" }}>{state.AccountReducer.frhAddr}</Typography>
      </ListItem>
      <ListItem className={classes.listItem}>
        <ListItemText primary={"frhPort"} />
        <Typography variant="body2" style={{ "fontSize": "20px" }}>{state.AccountReducer.frhPort}</Typography>
      </ListItem>
      <ListItem className={classes.listItem} >
        <ListItemText primary={"frhDir"} />
        <Typography variant="body2" style={{ "fontSize": "20px" }}>{state.AccountReducer.frhDir}</Typography>
      </ListItem>
      {/* <ListItem className={classes.listItem} key={state.AccountReducer.frhPassword}>
        <ListItemText primary={"frhPassword"} />
        <Typography variant="body2" style={{ "fontSize": "20px" }}>{state.AccountReducer.frhPassword}</Typography>
      </ListItem> */}

      
      <ListItem className={classes.listItem}>
        <ListItemText primary="OS" />
        <Typography variant="subtitle1" className={classes.total}>
       {state.AccountReducer.os}
        </Typography>
      </ListItem>

       <Typography variant="subtitle1" className={classes.total}>
       설치 후 실행 <Checkbox  id="check"
      onChange={e => {
        changeHandler(e.currentTarget.checked);
      }} 
     ></Checkbox>
  
        </Typography> 
        <Typography variant="subtitle1" className={classes.total}>
          
        </Typography> 
    </List>
    <Button variant="contained"
                      color="primary" style={{float:"right"}} onClick={InstallAgent}>
      설치
     </Button>
     </React.Fragment>
  );
}

export default ProductDetails;
