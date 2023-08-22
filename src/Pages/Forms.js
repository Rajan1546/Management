import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import VisitorForm from "../Components/VisitorForm";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./Forms.css";
import VehicleForm from "../Components/VehicleForm";
import { useNavigate } from "react-router-dom";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://werqlabs.com/">
        Made with
        <FavoriteIcon sx={{ height: 15, width: 15, color: red[500] , verticalAlign: 'middle' }} />
        by WerqLabs
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Forms() {
  const navigate = useNavigate();
  // const [activeStep, setActiveStep] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabType = (event, newValue) => {
    setActiveTab(newValue);
  };

  const renderFormComponent = () => {
    switch (activeTab) {
      case 0:
        return <VehicleForm />;
      case 1:
        return <VisitorForm />;
      default:
        return null;
    }
  };

  const handleNext = () => {
    navigate("/confirmation");
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid
          container
          item
          justifyContent="center"
          xs={12}
          md={6.7}
          lg={5.7}
          mx="auto"
        >
          <AppBar position="static" style={{ backgroundColor: "transparent" }}>
            <Tabs value={activeTab} onChange={handleTabType}>
              <Tab
                label={
                  <span>
                    Vehicle
                    <LocalShippingOutlinedIcon style={{ marginLeft: 12 , verticalAlign: 'middle' }} />
                  </span>
                }
              />
              <Tab
                label={
                  <span>
                    Visitor
                    <AccountCircleOutlinedIcon style={{ marginLeft: 12 , verticalAlign: 'middle'  }} />
                  </span>
                }
              />
            </Tabs>
          </AppBar>
        </Grid>
      </Container>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          {renderFormComponent()}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{ mt: 3, ml: 1 }}
            >
              Next
            </Button>
          </Box>
        </Paper>
        <Copyright />
      </Container>
    </React.Fragment>
  );
}
