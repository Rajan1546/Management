import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { Height } from '@mui/icons-material';

export default function CheckOut() {
  return (
    <Box
      component="form"
      height='90vh'
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column', // Align children vertically
        alignItems: 'center',
        justifyContent:"center"
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="body1" sx={{display:'flex' , alignItems:'center' , justifyContent:'center'}}>
        Thank You for Visiting <br />
      </Typography>
      <TextField id="outlined-basic" label="Check-Out Code" variant="outlined" />
      <Button variant="contained" color="primary">Submit</Button>
    </Box>
  );
}
