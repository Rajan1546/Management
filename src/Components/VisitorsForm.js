// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';

// const VisitorsForm = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [gender, setGender] = useState('');
//   const [meetingPerson, setMeetingPerson] = useState('');
//   const [purpose, setPurpose] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Process form data or make API call here
//     console.log({
//       firstName,
//       lastName,
//       gender,
//       meetingPerson,
//       purpose,
//     });
//   };

//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h5">Visitors Frontdesk Details Form</Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="First Name"
//             variant="outlined"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Last Name"
//             variant="outlined"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Gender"
//             variant="outlined"
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Meeting Person"
//             variant="outlined"
//             value={meetingPerson}
//             onChange={(e) => setMeetingPerson(e.target.value)}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Purpose"
//             variant="outlined"
//             value={purpose}
//             onChange={(e) => setPurpose(e.target.value)}
//             fullWidth
//             margin="normal"
//           />
//           <Button type="submit" variant="contained" color="primary">
//             Submit
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   );
// };

// export default VisitorsForm;

import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PortableWifiOff, CloudUpload, PhotoCamera } from "@mui/icons-material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        WerqLabs
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [meetingPerson, setMeetingPerson] = useState("");
  const [purpose, setPurpose] = useState("");
  const [profilePic, setProfilePic] = useState(
    "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      gender: data.get("gender"),
      meetingPerson: data.get("meetingPerson"),
      purpose: data.get("purpose"),
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePic(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleUploadButtonClick = () => {
    document.querySelector('.file-upload').click();
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  // const SmallAvatar = styled(Avatar)(({ theme }) => ({
  //   width: 22,
  //   height: 22,
  //   border: `2px solid ${theme.palette.background.paper}`,
  // }));

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Stack direction="row" spacing={2} >
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={<PhotoCamera onClick={handleUploadButtonClick}/>}
              >
                <Avatar alt="Camera" className="profile-pic" src={profilePic} 
                onChange={handleFileChange} sx={{height:100 , width:100}} />
              </Badge>
            </Stack>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <form onSubmit={handleSubmit}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Last Name"
                  variant="outlined"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Gender"
                  variant="outlined"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Meeting Person"
                  variant="outlined"
                  value={meetingPerson}
                  onChange={(e) => setMeetingPerson(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Purpose"
                  variant="outlined"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </form>
              {/* <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
