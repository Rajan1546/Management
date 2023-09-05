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
import gati from "../Images/gati.png";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import Divider from "@mui/material/Divider";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://werqlabs.com/">
        Made with
        <FavoriteIcon
          sx={{
            height: 15,
            width: 15,
            color: red[500],
            verticalAlign: "middle",
          }}
        />
        by WerqLabs
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Forms() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = React.useState(0);
  const [parkingCode, setParkingCode] = React.useState("");
  const [selectedOption, setSelectedOption] = React.useState("Parking"); // New state for selected radio button option

  const handleChange = (event) => {
    setParkingCode(event.target.value);
  };

  const options =
    selectedOption === "Parking"
      ? [
          { value: 10, label: "P-3" },
          { value: 20, label: "P-4" },
          { value: 30, label: "P-5" },
          { value: 40, label: "P-7" },
          { value: 50, label: "P-11" },
        ]
      : [
          { value: 60, label: "D-3" },
          { value: 70, label: "D-7" },
          { value: 80, label: "D-8" },
          { value: 90, label: "D-11" },
        ];

  const handleTabType = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
    setParkingCode(""); // Reset parkingCode when the radio button changes
  };

  const handleAddButtonClick = () => {
    // Handle the "Add" button click and navigate to the "/arriving" route
    navigate("/");
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
    <div style={{ backgroundColor: "#F1F9FB" }}>
      <React.Fragment>
        <CssBaseline />
        <AppBar
          position="absolute"
          color="primary"
          elevation={0}
          sx={{
            position: "relative",
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
            minHeight:'70px',
            
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6" color="inherit" noWrap>
              <img
                src={gati}
                alt="Main Logo"
                style={{
                  display: "flex",
                  alignItem: "center",
                  width: "50%",
                }}
              />
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={handleAddButtonClick}
            >
              <PowerSettingsNewOutlinedIcon sx={{ marginRight: "4%" }} />
              Logout
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
            <AppBar
              position="static"
              style={{ backgroundColor: "transparent" }}
            >
              <Tabs value={activeTab} onChange={handleTabType}>
                <Tab
                  label={
                    <span>
                      Vehicle
                      <LocalShippingOutlinedIcon
                        style={{ marginLeft: 12, verticalAlign: "middle" }}
                      />
                    </span>
                  }
                />
                <Tab
                  label={
                    <span>
                      Visitor
                      <AccountCircleOutlinedIcon
                        style={{ marginLeft: 12, verticalAlign: "middle" }}
                      />
                    </span>
                  }
                />
              </Tabs>
            </AppBar>
          </Grid>
        </Container>
        <Container component="main" maxWidth="lg" sx={{ mb: 4 }}>
          
          <Paper
            variant="outlined"
            sx={{
              my: { xs: 3, md: 6 },
              p: { xs: 2, md: 3 },
              backgroundColor: "F1F9FB",
            }}
          >
            
            {renderFormComponent()}

            <div className={activeTab === 0 ? "parking-details" : "hidden"}>
              <Divider
                variant="middle"
                sx={{
                  borderBottom: "2px dashed #ccc", // Add the dashed style here
                  margin: "0 auto", // Center the divider horizontally
                }}
              />
              <Typography
                variant="h6"
                sx={{ textAlign: "center" }}
                gutterBottom
              >
                Parking Details
              </Typography>
              <div style={{ textAlign: "center" }}>
                <FormControl>
                  <FormLabel
                    id="demo-row-radio-buttons-group-label"
                    sx={{ textAlign: "start" }}
                  >
                    Bay
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={selectedOption} // Use the new state for radio button value
                    onChange={handleRadioChange}
                  >
                    <FormControlLabel
                      value="Parking" // Use "Parking" (with uppercase) as the value
                      control={<Radio />}
                      label="Parking"
                    />
                    <FormControlLabel
                      value="Dock" // Use "Dock" (with uppercase) as the value
                      control={<Radio />}
                      label="Dock"
                    />
                  </RadioGroup>
                </FormControl>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Code
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={parkingCode}
                    onChange={handleChange}
                    label="Age"
                  >
                    {options.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </div>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button variant="contained" onClick={handleNext} sx={{ ml: 1 }}>
                Submit
              </Button>
            </Box>
          </Paper>
          <Copyright />
        </Container>
      </React.Fragment>
    </div>
  );
}
