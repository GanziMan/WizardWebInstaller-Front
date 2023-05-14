import React, { useEffect, useState } from "react";
import { InputField } from "../../FormFields";
import {
  Grid,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import useStyles from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { Req } from "../../../redux/actions/Action";
import PasswordField from "../../FormFields/PasswordField";
import { encrypt } from "../../../aes256";

export default function TwoStep(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const {
    formField: {
      username,
      password,
      port,
      frhUser,
      frhAddr,
      frhPort,
      frhDir,
      frhPassword,
    },
  } = props;

  const [formValue, setFormValue] = useState({
    userName: "",
    frhUser: "",
    frhAddr: "",
    frhPort: "",
    frhDir: "",
    frhPassword: "",
    password2: "",
    port2: 0,
  });

  const Login = () => {
    dispatch(
      Req(
        formValue.userName,
        formValue.port2,
        formValue.frhUser,
        formValue.frhAddr,
        formValue.frhPort,
        formValue.frhDir,
        encrypt(formValue.password2),
        encrypt(formValue.frhPassword)
      )
    );
  };
  const onChange = (e) => {
    //input에 name을 가진 요소의 value에 이벤트를 걸었다
    const { name, value } = e.target;
    // 변수를 만들어 이벤트가 발생했을때의 value를 넣어줬다
    const nextInputs = {
      ...formValue,
      [name]: value,
    };
    setFormValue(nextInputs);
  };
  const result = useSelector((state) => state);
  useEffect(() => {}, [result.AccountReducer.Rescode]);
  const [Host, setHost] = useState("로컬호스트");
  const handleChange = (event) => {
    setHost(event.target.value);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        <FormControl required sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-required-label">host</InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={Host}
            label="Host *"
            onChange={handleChange}
          >
            <MenuItem value={"로컬호스트"}>로컬 호스트</MenuItem>
            <MenuItem value={"원격호스트"} disabled>
              원격 호스트
            </MenuItem>
          </Select>
          {/* <FormHelperText>Required</FormHelperText> */}
        </FormControl>
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <InputField
            id={"userName"}
            name="userName"
            value={formValue.userName}
            onChange={onChange}
            label={username.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PasswordField
            id={"password"}
            name="password2"
            value={formValue.password2}
            onChange={onChange}
            label={password.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            id={"port"}
            name="port2"
            value={formValue.port2}
            onChange={onChange}
            label={port.label}
            fullWidth
          />
        </Grid>
      </Grid>
      <Typography variant="h6" gutterBottom>
        <br></br>
        서버 정보 입력
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <InputField
            id={"frhUser"}
            name="frhUser"
            value={formValue.frhUser}
            onChange={onChange}
            label={"user"}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            id={"frhAddr"}
            name="frhAddr"
            value={formValue.frhAddr}
            onChange={onChange}
            label={"addr"}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            id={"frhPort"}
            name="frhPort"
            value={formValue.frhPort}
            onChange={onChange}
            label={"port"}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            id={"frhDir"}
            name="frhDir"
            value={formValue.frhDir}
            onChange={onChange}
            label={"diretory"}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PasswordField
            id={"frhPassword"}
            name="frhPassword"
            value={formValue.frhPassword}
            onChange={onChange}
            label={"password"}
            fullWidth
          />
        </Grid>
      </Grid>
      <Button
        disabled={false}
        onClick={Login}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        접속여부 확인
      </Button>

      {result.AccountReducer.Rescode !== "로그인 성공" ? (
        <div style={{ color: "red", fontSize: "10px", textAlign: "center" }}>
          <strong style={{ fontSize: "15px" }}>
            {result.AccountReducer.Rescode}
          </strong>
        </div>
      ) : (
        <p
          style={{
            color: "rgb(91,209,215)",
            fontSize: "10px",
            textAlign: "center",
            float: "center",
          }}
        >
          <strong style={{ fontSize: "15px" }}>
            {result.AccountReducer.Rescode}
          </strong>
        </p>
      )}
    </React.Fragment>
  );
}
