import React from "react";
import MKButton from "components/MKButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Formik, Form } from "formik";
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import * as yup from "yup";
import Rooms from "layouts/booking/components/rooms";
import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import MKTypography from "components/MKTypography";

function Booking() {
  const formSchema = {
    start_date: null,
    end_date: null,
    start_time: null,
    end_time: null,
    adult_count: 2,
    children_count: 0,
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
        pt={10}
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
              <MKBox pt={3} px={3}>
                <Grid container spacing={3}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid item xs={12} md={6} xl={3}>
                      <DatePicker
                        name="start_date"
                        label="Check-in Date"
                        minDate={new Date()}
                        inputVariant="outlined"
                        format="dd/MM/yyyy"
                        fullWidth
                        value={values.start_date}
                        onChange={(val) => setFieldValue("start_date", val)}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} xl={3}>
                      <DatePicker
                        name="end_date"
                        label="Check-out Date"
                        minDate={values.start_date}
                        inputVariant="outlined"
                        format="dd/MM/yyyy"
                        fullWidth
                        value={values.end_date}
                        onChange={(val) => setFieldValue("end_date", val)}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} xl={3}>
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
                    <Grid item xs={12} md={6} xl={3}>
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
                    <Grid item xs={12}>
                      <MKTypography variant="h4">GUESTS</MKTypography>
                      <MKTypography variant="h6">ADULTS (12y +)</MKTypography>
                      <ButtonGroup>
                        {Array.from(Array(14), (e, i) => (
                          <MKButton
                            color={values.adult_count === i + 1 ? "secondary" : "white"}
                            onClick={() => setFieldValue("adult_count", i + 1)}
                            key={i}
                            variant="contained"
                            value={values.adult_count}
                          >
                            {i + 1}
                          </MKButton>
                        ))}
                      </ButtonGroup>
                    </Grid>
                    <Grid item xs={12}>
                      <MKTypography variant="h6">CHILDREN (Age 12y and below)</MKTypography>
                      <ButtonGroup>
                        {Array.from(Array(7), (e, i) => (
                          <MKButton
                            color={values.children_count === i ? "secondary" : "white"}
                            onClick={() => setFieldValue("children_count", i)}
                            key={i}
                            variant="contained"
                            value={values.children_count}
                          >
                            {i}
                          </MKButton>
                        ))}
                      </ButtonGroup>
                    </Grid>
                  </MuiPickersUtilsProvider>
                  <Grid item md={12}>
                    <MKButton type="submit" variant="contained" color="info">
                      Search
                    </MKButton>
                  </Grid>
                </Grid>
              </MKBox>
            </Form>
          )}
        </Formik>
      </MKBox>
      <Rooms />
    </>
  );
}

export default Booking;
