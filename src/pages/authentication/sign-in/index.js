/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { Formik } from "formik";
import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import Switch from "@mui/material/Switch";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";

// Authentication layout components
import BasicLayout from "pages/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import * as Yup from "yup";

function Basic() {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const initValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required(),
    password: Yup.string().required(),
  });

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>

        <Formik initialValues={initValues} validationSchema={validationSchema}>
          {({ values, handleChange, handleBlur, isValid }) => {
            return (
              <MDBox pt={4} pb={3} px={3}>
                <MDBox component="form" role="form">
                  <MDBox mb={2}>
                    <MDInput
                      name="username"
                      type="text"
                      label="Email or User Name"
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                    />
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput
                      name="password"
                      type="password"
                      label="Password"
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                  </MDBox>
                  <MDBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={rememberMe} onChange={handleSetRememberMe} />
                    <MDTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={handleSetRememberMe}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Remember me
                    </MDTypography>
                  </MDBox>
                  <MDBox mt={4} mb={1}>
                    <MDButton
                      variant="gradient"
                      color="info"
                      fullWidth
                      disabled={!isValid}
                      onClick={() => {
                        localStorage.setItem("token", values.username);
                        navigate("/dashboard");
                      }}
                    >
                      sign in
                    </MDButton>
                  </MDBox>
                  <MDBox mt={3} mb={1} textAlign="center">
                    <MDTypography variant="button" color="text">
                      Don&apos;t have an account?{" "}
                      <MDTypography
                        component={Link}
                        to="/authentication/sign-up"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign up
                      </MDTypography>
                    </MDTypography>
                  </MDBox>
                </MDBox>
              </MDBox>
            );
          }}
        </Formik>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
