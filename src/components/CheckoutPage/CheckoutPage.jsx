//Libraries
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
} from "@material-ui/core";
import { Formik, Form } from "formik";

//Component
import ReviewOrder from "./ReviewOrder";
import CheckoutSuccess from "./CheckoutSuccess/CheckoutSuccess";
import CheckoutFailed from "./CheckoutSuccess/CheckoutFailed";
import validationSchema from "./FormModel/validationSchema";
import checkoutFormModel from "./FormModel/checkoutFormModel";
import formInitialValues from "./FormModel/formInitialValues";
import useStyles from "./styles";

//Step
import LogForm from "./Forms/LogForm";
import FirstStep from "./Forms/FirstStep";
import TwoStep from "./Forms/TwoStep";
import ThreeStep from "./Forms/ThreeStep";

const { formId, formField } = checkoutFormModel;
const steps = ["구성 선택", "호스트 설정", "설치모드", "OS"];

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <FirstStep formField={formField} />;
    case 1:
      return <TwoStep formField={formField} />;
    case 2:
      return <ThreeStep />;
    case 3:
      return <ReviewOrder></ReviewOrder>;
    case 4:
      return <LogForm />;
    default:
      return <div>Not Found</div>;
  }
}
//
export default function CheckoutPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  }
  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }
  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  //  여기 disabled 처리
  const result = useSelector((state) => state);
  const state = useSelector((state) => state);
  const [isAn, setIsAn] = useState(true);
  const isDisabled = () => {
    setIsAn(state.AccountReducer.result);
  };

  return (
    <Router>
      <Route exact path="/">
        <React.Fragment>
          <Typography component="h1" variant="h4" align="center">
            Program Installer
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <CheckoutSuccess />
            ) : (
              <Formik
                initialValues={formInitialValues}
                validationSchema={currentValidationSchema}
                onSubmit={_handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form id={formId}>
                    {_renderStepContent(activeStep)}

                    <div className={classes.buttons}>
                      {activeStep === 0 && activeStep === 4 ? (
                        <Button
                          onClick={_handleBack}
                          className={classes.button}
                        >
                          Back
                        </Button>
                      ) : activeStep === 3 ? (
                        <Button
                          onClick={_handleBack}
                          style={{ bottom: "25px" }}
                          className={classes.button}
                        >
                          Back
                        </Button>
                      ) : (
                        <></>
                      )}
                      <div className={classes.wrapper}>
                        {activeStep === 1 &&
                        result.AccountReducer.result !== false ? (
                          <Button
                            // disabled={isAn}
                            disabled={false}
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                          >
                            {isLastStep ? "Submit" : "Next"}
                          </Button>
                        ) : activeStep === 4 ? (
                          <div></div>
                        ) : activeStep === 3 ? (
                          <></>
                        ) : (
                          <Button
                            disabled={isSubmitting}
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                          >
                            {isLastStep ? "Submit" : "Next"}
                          </Button>
                        )}
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </React.Fragment>
        </React.Fragment>
      </Route>

      <Route exact path="/step2" component={LogForm}></Route>
      <Route exact path="/step3" component={CheckoutSuccess}></Route>
      <Route exact path="/step4" component={CheckoutFailed}></Route>
    </Router>
  );
}
