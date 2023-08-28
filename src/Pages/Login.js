import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./Login.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { red } from "@mui/material/colors";
import { useNavigate } from 'react-router-dom';


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


// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="#fff"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="/">
//         WerqLabs
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    
    if (email === "admin" && password === "admin") {
      console.log("Login successful");
      navigate('/dashboard');
      // Add logic to navigate to the dashboard or perform other actions upon successful login
    } else {
      console.log("Login failed");
    }
    
    if (email === "user" && password === "user") {
      console.log("Login successful");
      navigate('/arriving');
      // Add logic to navigate to the dashboard or perform other actions upon successful login
    } else {
      console.log("Login failed");
    }
  };

  return (
    <div className="login">
    <ThemeProvider theme={defaultTheme} >
      <Box>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, background: "none", width: 100, height: 100 }}>
            <img
              width={"90px"}
              src="https://companieslogo.com/img/orig/GATI.NS-cf96bb0a.png?t=1604870862"
              alt="logo img"
            />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ color: "black" }}>
            Sign In
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  size='small'
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  size='small'
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  size="small"
                  InputProps={{
                    style: { color: "black" },
                    borderColor: 'white'
                  }}
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  size="small"
                  InputProps={{
                    style: { color: "black" },
                  }}
                  InputLabelProps={{
                    style: { color: "black" },
                  }}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confrimPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  size='small'
                />
              </Grid> */}
              <Grid item xs={12}>
                <FormControlLabel sx={{ color: "black" }}
                  control={
                    <Checkbox value="allowExtraEmails" sx={{color:"#000" }}/>
                  }
                  label="Remember Me "
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="#" variant="body2" sx={{ color: "black" }}>
                  Don't have an account?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      </Box>
    </ThemeProvider>

    </div>
  );
}
