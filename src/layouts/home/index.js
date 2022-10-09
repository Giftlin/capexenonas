// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import { Link } from "react-router-dom";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/bg-about-us.jpg";
import MKButton from "components/MKButton";

function Home() {
  return (
    <>
      <DefaultNavbar routes={routes} />
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} spacing={6} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Cape Xenónas
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              A peaceful guest house in Nagercoil, Kanniyakumari district, Tamilnadu, India
            </MKTypography>
            <Grid item>
              <Link to="/booking">
                <MKButton>Book Your Stay</MKButton>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
    </>
  );
}

export default Home;
