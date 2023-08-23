import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import checkin from '../Images/check-in.png';
import hotel from '../Images/hotel.png'
import back from '../Images/back.png';
import logout from '../Images/logout.png'
import { useNavigate } from 'react-router-dom';
import './InOut.css';

function InOut() {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleCheckInClick = () => {
    // Navigate to "/forms" when Check In button is clicked
    navigate('/forms');
  };
  return (
    <div className="video-container"> 
    <div className='nav-container'>
    <Button className="top-left-btn" variant="text" startIcon={<img src={back} alt='Back' width={'30px'}/>} >Back</Button>
        <Button className="top-right-btn" variant="text" startIcon={<img src={logout} alt='LogOut' width={'30px'}/>} >Log Out</Button>    
    </div>
      <div className="avatar-container">
        <Avatar sx={{ m: 1, background: "none", width: 100, height: 100 }}>
          <img
            width={"90px"}
            src="https://companieslogo.com/img/orig/GATI.NS-cf96bb0a.png?t=1604870862"
            alt="logo img"
          />
        </Avatar>
      </div>
      <div className="btn-container">
      <Button variant="outlined" endIcon={<img src={checkin} alt='CheckIn' width={'50px'} />} onClick={handleCheckInClick}>
      Check In
      </Button>
        <Button variant="outlined" endIcon={<img src={hotel} alt='CheckOut' width={'50px'}/>}>
        Check Out
      </Button>
      </div>
      <video autoPlay loop muted>
        <source src="https://v4.cdnpk.net/videvo_files/video/free/video0468/large_watermarked/_import_616678f21c95f1.93207458_FPpreview.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay">
      {/* <Button className="top-left-btn" variant="text" startIcon={<img src={back} alt='CheckIn' width={'30px'}/>} >Back
      </Button>
      <Button className="top-right-btn" variant="text" startIcon={<img src={logout} alt='CheckIn' width={'30px'}/>} >Log Out
      </Button> */}
      </div>
    </div>
  );
}

export default InOut;
