// import * as React from "react";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
// // import FormControlLabel from '@mui/material/FormControlLabel';
// // import Checkbox from '@mui/material/Checkbox';
// import Container from "@mui/material/Container";
// import { styled } from "@mui/material/styles";
// import Badge from "@mui/material/Badge";
// import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";
// import PhotoCameraFrontOutlinedIcon from "@mui/icons-material/PhotoCameraFrontOutlined";

// const SmallAvatar = styled(Avatar)(({ theme }) => ({
//   width: 37,
//   height: 37,
//   border: `2px solid ${theme.palette.background.paper}`,
// }));

// export default function VisitorForm() {
//   const [avatarSrc, setAvatarSrc] = React.useState(
//     "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
//   );
  
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       // Handle the selected file here
//       // For example, you can set it as the source for the Avatar image
//       const imageUrl = URL.createObjectURL(file);
//       setAvatarSrc(imageUrl); // Assuming you have a state for the Avatar source
//     }
//   };
//   return (
//     <React.Fragment>
//       <Container component="main" maxWidth="xs">
//       <Typography component="h1" variant="h5" align="center" gutterBottom>
//         Visitor Details
//       </Typography>
//       {/* <Typography variant="h6" gutterBottom>
//         Shipping address
//       </Typography> */}
//       <Stack direction="row" spacing={2} justifyContent={"center"} gutterBottom>
//         <Badge
//           overlap="circular"
//           anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//           badgeContent={
//             //   <SmallAvatar alt="Remy Sharp" src={ <PhotoCameraFrontOutlinedIcon color="success" />} />
//             // <SmallAvatar>
//             //   <PhotoCameraFrontOutlinedIcon color="grey" />
//             // </SmallAvatar>
//             <SmallAvatar>
//             <label htmlFor="fileInput">
//               <PhotoCameraFrontOutlinedIcon color="grey" />
//             </label>
//             <input
//               id="fileInput"
//               type="file"
//               style={{ display: "none" }}
//               onChange={handleFileChange}
//             />
//           </SmallAvatar>
//             //   <PhotoCameraFrontOutlinedIcon color="success" />
//           }
//         >
//           <Avatar
//             alt="Travis Howard"
//             src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
//             sx={{ width: 100, height: 100 }}
//           />
//         </Badge>
//       </Stack>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="firstName"
//             name="firstName"
//             label="First name"
//             fullWidth
//             autoComplete="given-name"
//             variant="standard"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="lastName"
//             name="lastName"
//             label="Last name"
//             fullWidth
//             autoComplete="family-name"
//             variant="standard"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="companyName"
//             name="companyName"
//             label="Company Name"
//             fullWidth
//             autoComplete="company-name"
//             variant="standard"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="meetingPerson"
//             name="meetingPerson"
//             label="Meeting Person"
//             fullWidth
//             autoComplete="meeting-person"
//             variant="standard"
//           />
//           {/* <Grid  xs={12} sm={6}>
//           <TextField
//             id="address2"
//             name="address2"
//             label="Address line 2"
//             fullWidth
//             autoComplete="shipping address-line2"
//             variant="standard"
//           /> */}
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="phoneNumber"
//             name="phoneNumber"
//             label="Phone Number"
//             fullWidth
//             variant="standard"
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="location"
//             name="location"
//             label="Location"
//             fullWidth
//             autoComplete="ocation"
//             variant="standard"
//           />
//         </Grid>

//         <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="purpose"
//             name="purpose"
//             label="Purpose"
//             fullWidth
//             autoComplete="purpose"
//             variant="standard"
//           />
//         </Grid>
//         {/* <Grid item xs={12} sm={6}>
//           <TextField
//             required
//             id="country"
//             name="country"
//             label="Country"
//             fullWidth
//             autoComplete="shipping country"
//             variant="standard"
//           />
//         </Grid> */}
//         {/*<Grid item xs={12}>
//            <FormControlLabel
//             control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
//             label="Use this address for payment details"
//           /> 
//         </Grid>*/}
//       </Grid>
//       </Container>
//     </React.Fragment>
//   );
// }
import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import PhotoCameraFrontOutlinedIcon from "@mui/icons-material/PhotoCameraFrontOutlined";
import CardProfile from "./CardProfile";
import './VehicleForm.css'
import Webcam from "react-webcam";
import profile from "../Images/Profile.png";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 37,
  height: 37,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export default function VisitorForm() {
  const [avatarSrc, setAvatarSrc] = React.useState(
    "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
  );
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle the selected file here
      // For example, you can set it as the source for the Avatar image
      const imageUrl = URL.createObjectURL(file);
      setAvatarSrc(imageUrl); // Assuming you have a state for the Avatar source
    }
  };
  
  const webcamRef = React.useRef(null);
  const [capturedImage, setCapturedImage] = React.useState(null);
  const [showCamera, setShowCamera] = React.useState(false);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setShowCamera(false);
  };

  const handleUploadClick = () => {
    // Implement your file upload logic here
    // For example, you can use an input element to trigger file selection
    // and set the 'capturedImage' state with the selected file.
  };
  // const capture = () => {
  //   const imageSrc = webcamRef.current.getScreenshot();
  //   // 'imageSrc' contains the captured image data, you can use it as needed
  //   console.log("Captured Image:", imageSrc);
  // };

  return (
    
      <div className="vehicle-main" style={{display:'flex' , gap:'1rem'}}>
        
      <div style={{backgroundColor:'#fff',  padding:'1%' }}>
      {/* <CardProfile/> */}
      {showCamera ? (
        <div>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
          />
          <button onClick={capture}>Capture Photo</button>
        </div>
      ) : (
        <div>
          <img
            src={capturedImage || profile }
            alt="Captured"
            style={{ height: "15rem" }}
            className="captured-image"
          />
          {!capturedImage ? (
            <div>
              <input type="file" accept="image/*" onChange={handleUploadClick} />
              <p>Or</p>
              <button onClick={() => setShowCamera(true)}>Open Camera</button>
            </div>
          ) : null}
        </div>
      )}
      </div>
      <div style={{backgroundColor:'#fff', padding:'1%'}}>
      <Typography component="h1" variant="h5" align="center" gutterBottom>
        Visitors Details
      </Typography>
      {/* <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography> */}
      {/* <Stack direction="row" spacing={2} justifyContent={"center"} gutterBottom>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            //   <SmallAvatar alt="Remy Sharp" src={ <PhotoCameraFrontOutlinedIcon color="success" />} />
            // <SmallAvatar>
            //   <PhotoCameraFrontOutlinedIcon color="grey" />
            // </SmallAvatar>
            <SmallAvatar>
            <label htmlFor="fileInput">
              <PhotoCameraFrontOutlinedIcon color="grey" />
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </SmallAvatar>
            //   <PhotoCameraFrontOutlinedIcon color="success" />
          }
        >
          <Avatar
            alt="Travis Howard"
            src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
            sx={{ width: 100, height: 100 }}
          />
        </Badge>
      </Stack> */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="companyName"
            name="companyName"
            label="Company Name"
            fullWidth
            autoComplete="company-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="meetingPerson"
            name="meetingPerson"
            label="Meeting Person"
            fullWidth
            autoComplete="meeting-person"
            variant="standard"
          />
          {/* <Grid  xs={12} sm={6}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          /> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="location"
            name="location"
            label="Location"
            fullWidth
            autoComplete="ocation"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="purpose"
            name="purpose"
            label="Purpose"
            fullWidth
            autoComplete="purpose"
            variant="standard"
          />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid> */}
        {/*<Grid item xs={12}>
           <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          /> 
        </Grid>*/}
      </Grid>
      </div>
      </div>
  );
}
