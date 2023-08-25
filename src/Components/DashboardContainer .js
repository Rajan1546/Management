import React from "react";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";
import StaffTable from "./StaffTable";
import "./Box.css";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"; 
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCarBus } from "@fortawesome/free-solid-svg-icons";

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

const DashboardContainer = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleAddButtonClick = () => {
    // Handle the "Add" button click and navigate to the "/arriving" route
    navigate("/arriving");
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={6} md={3} lg={3}>
          {/* <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
              // clipPath: "circle(56.5% at 50% 0)",
            }}
          > */}
            <figure className="snip1533">
              <figcaption>
                {/*<FontAwesomeIcon icon="fa-solid fa-car-bus" />*/}
                <h3 style={{ textDecoration: "#9e9e9e}" }}>Total Entry</h3>
                <blockquote>
                  <h1>174</h1>
                </blockquote>

                {/* <h4>Google Inc.</h4> */}
              </figcaption>
            </figure>
          {/* </Paper> */}
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          {/* <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          > */}
            <figure className="snip1533">
              <figcaption>
                {/*<FontAwesomeIcon icon="fa-solid fa-car-bus" />*/}
                <h3 style={{ textDecoration: "#9e9e9e}" }}> Visitors</h3>
                <blockquote>
                  <h1>98</h1>
                </blockquote>

                {/* <h4>Google Inc.</h4> */}
              </figcaption>
            </figure> 
          {/* </Paper> */}
        </Grid>
        <Grid item xs={6} md={3} lg={3}>
          {/* <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          > */}
            <figure className="snip1533">
              <figcaption>
                {/*<FontAwesomeIcon icon="fa-solid fa-car-bus" />*/}
                <h3 style={{ textDecoration: "#9e9e9e}" }}> Vehicles</h3>
                <blockquote>
                  <h1>76</h1>
                </blockquote>

                {/* <h4>Google Inc.</h4> */}
              </figcaption>
            </figure> 
          {/* </Paper> */}
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={6} md={3} lg={3}>
          {/* <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          > */}
           <figure className="snip1533">
              <figcaption>
                {/*<FontAwesomeIcon icon="fa-solid fa-car-bus" />*/}
                <h3 style={{ textDecoration: "#9e9e9e}" }} >Any Guest ?</h3>
                <blockquote>
                  <Button variant="outlined" color="primary" sx={{margin:' 12px 0px'}} onClick={handleAddButtonClick}>Add</Button>
                </blockquote>

                {/* <h4>Google Inc.</h4> */}
              </figcaption>
            </figure> 
            {/* <Deposits /> */}
          {/* </Paper> */}
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Typography sx={{fontSize:20 , fontWeight:600 }}>Staff Working :</Typography>
            <StaffTable />
          </Paper>
        </Grid>
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </Container>
  );
};

export default DashboardContainer;
