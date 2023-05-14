import { Typography } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ScrollDialog from "../../Dialog/ScrollDialog";
import CheckoutSuccess from "../CheckoutSuccess/CheckoutSuccess";
import CheckoutFailed from "../CheckoutSuccess/CheckoutFailed";

function InstallerLog() {
  const selector = useSelector((state) => state.AccountReducer);
  const [result, setResult] = useState({});

  useEffect(() => {
    if (selector?.Rescode2 !== undefined) {
      setResult(selector);
    }
  }, [selector?.Rescode2]);

  return (
    <React.Fragment>
      {result?.Rescode2 === undefined ? (
        <>
          <Typography variant="h6" gutterBottom>
            웹 인스톨러 설치
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            설치중..
          </Typography>
          <ScrollDialog></ScrollDialog>
        </>
      ) : result?.Rescode2 !== "0000" ? (
        <>
          <CheckoutFailed />
        </>
      ) : (
        <>
          <CheckoutSuccess />
        </>
      )}
    </React.Fragment>
  );
}
export default InstallerLog;
