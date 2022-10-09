import React from "react";
import MKButton from "components/MKButton";
import { Formik, Form, Field } from "formik";
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import * as yup from "yup";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

function Booking() {
  // --- Form Schema --- //
  const formSchema = {
    start_date: null, // if date is defiend as '' yup will throw a invalid date error
    end_date: null,
    start_time: null,
    end_time: null,
  };

  // --- Validation Schema --- //
  const validationSchema = yup.object().shape({
    start_date: yup.date().nullable(),
    end_date: yup.date().nullable(),
    start_time: yup.string().nullable(),
    end_time: yup.string().nullable(),
  });

  return (
    <>
      <DefaultNavbar routes={routes} />
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Formik
          initialValues={formSchema}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              <Grid container spacing={3}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid item md={6}>
                    <DatePicker
                      name="start_date"
                      label="Check-in Date"
                      inputVariant="outlined"
                      format="dd/MM/yyyy"
                      fullWidth
                      value={values.start_date}
                      onChange={(val) => setFieldValue("start_date", val)}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <DatePicker
                      name="end_date"
                      label="Check-out Date"
                      inputVariant="outlined"
                      format="dd/MM/yyyy"
                      fullWidth
                      value={values.end_date}
                      onChange={(val) => setFieldValue("end_date", val)}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TimePicker
                      name="start_time"
                      label="Check-in Time"
                      inputVariant="outlined"
                      format="hh:mm"
                      fullWidth
                      value={values.start_time}
                      onChange={(val) => setFieldValue("start_time", val)}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TimePicker
                      name="end_time"
                      label="Check-out Time"
                      inputVariant="outlined"
                      format="hh:mm"
                      fullWidth
                      value={values.end_time}
                      onChange={(val) => setFieldValue("end_time", val)}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
                <MKBox width="100%" my={2}>
                  <MKButton type="submit" variant="contained" color="primary">
                    Submit
                  </MKButton>
                </MKBox>
              </Grid>
            </Form>
          )}
        </Formik>
      </MKBox>
    </>
  );
}

export default Booking;
