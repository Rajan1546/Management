// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';

// const CarForm = () => {
//   const [driversName, setDriversName] = useState('');
//   const [companyName, setCompanyName] = useState('');
//   const [meetingPerson, setMeetingPerson] = useState('');
//   const [purpose, setPurpose] = useState('');
//   const [vehicleNumber, setVehicleNumber] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Process form data or make API call here
//     console.log({
//       driversName,
//       companyName,
//       meetingPerson,
//       purpose,
//       vehicleNumber,
//       phoneNumber,
//       selectedFile,
//     });
//   };

//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h5">Car Frontdesk Details Form</Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="Driver's Name"
//             variant="outlined"
//             value={driversName}
//             onChange={(e) => setDriversName(e.target.value)}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Company Name"
//             variant="outlined"
//             value={companyName}
//             onChange={(e) => setCompanyName(e.target.value)}
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
//           <TextField
//             label="Vehicle Number"
//             variant="outlined"
//             value={vehicleNumber}
//             onChange={(e) => setVehicleNumber(e.target.value)}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Phone Number"
//             variant="outlined"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             fullWidth
//             margin="normal"
//           />
//           {/* <input
//             accept="image/*"
//             id="image-upload"
//             type="file"
//             onChange={handleFileChange}
//           /> */}
//           <label htmlFor="image-upload">
//             <Button variant="contained" component="span">
//               Upload Image
//             </Button>
//           </label>
//           <Button type="submit" variant="contained" color="primary">
//             Submit
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   );
// };

// export default CarForm;


import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PortableWifiOff , CloudUpload, PhotoCamera} from '@mui/icons-material';
import './CarForm.css'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        WerqLabs
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function CarForm() {

  const [driversName, setDriversName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [meetingPerson, setMeetingPerson] = useState('');
  const [purpose, setPurpose] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [profilePic, setProfilePic] = useState(
    'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'
  );

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      gender: data.get('gender'),
      meetingPerson: data.get('meetingPerson'),
      purpose: data.get('purpose'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Avatar sx={{ width:320 , height:320 , m: 1, bgcolor: 'secondary.main' }}> */}
              {/* <LockOutlinedIcon /> */}
              <Box display="flex" justifyContent="center" mt={4}>
      <Paper elevation={3} className="circle">
        <img className="profile-pic" src={profilePic} alt="Profile" />
      </Paper>
      <div className="p-image">
        <IconButton
          className="upload-button"
          onClick={handleUploadButtonClick}
        >
          <PhotoCamera fontSize="large" />
        </IconButton>
        <input
          className="file-upload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
    </Box>
            {/* </Avatar> */}
            {/*<Typography component="h1" variant="h5">
               Sign in 
            </Typography>*/}
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <form onSubmit={handleSubmit}>
             <TextField
            label="Driver's Name"
            variant="outlined"
            value={driversName}
            onChange={(e) => setDriversName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Company Name"
            variant="outlined"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
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
          <TextField
            label="Vehicle Number"
            variant="outlined"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            fullWidth
            margin="normal"
          />
           {/* <input
//             accept="image/*"
//             id="image-upload"
//             type="file"
//             onChange={handleFileChange}
//           /> */}
             <label htmlFor="image-upload">
               <Button variant="contained" component="span">
                 Upload Image
               </Button>
             </label>
             <Button type="submit" variant="contained" color="primary">
               Submit
             </Button>
           </form>
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
