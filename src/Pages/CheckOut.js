import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';

export default function CheckOut() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
      }}
      noValidate
      autoComplete="off"
    >
        <Typography> Thank You for Visiting </Typography>
      <TextField id="outlined-basic" label="Check-Out Code" variant="outlined" />
      <Button sx={{ color:'primary'}}> Submit </Button>
    </Box>
  );
}