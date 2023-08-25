import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, working, role, phoneNo, email, shift, checkInTime, experience) {
  return { name, working, role, phoneNo, email, shift, checkInTime, experience };
}

const rows = [
  createData('John Doe', 'Watchman', 'Patrol', '123-456-7890', 'john@example.com', 'Night', '08:00 PM', 'Senior'),
  createData('Jane Smith', 'Watchman', 'Fire Hazards', '987-654-3210', 'jane@example.com', 'Day', '09:30 AM', 'Junior'),
  createData('Michael Johnson', 'Watchman', 'Incident Reports', '555-123-4567', 'michael@example.com', 'Night', '10:15 PM', 'Senior'),
  createData('Emily Williams', 'Watchman', 'Construction Sites', '111-222-3333', 'emily@example.com', 'Day', '11:45 AM', 'Junior'),
  createData('David Brown', 'Watchman', 'Security Cameras', '444-555-6666', 'david@example.com', 'Night', '08:30 PM', 'Junior'),
];

export default function StaffTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 600}}>Name</TableCell>
            <TableCell sx={{fontWeight: 600}}>Role</TableCell>
            <TableCell sx={{fontWeight: 600}}>Phone No.</TableCell>
            <TableCell sx={{fontWeight: 600}}>Email Id</TableCell>
            <TableCell sx={{fontWeight: 600}}>Shift</TableCell>
            <TableCell sx={{fontWeight: 600}}>Check-In Time</TableCell>
            <TableCell sx={{fontWeight: 600}}>Experience</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>{row.phoneNo}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.shift}</TableCell>
              <TableCell>{row.checkInTime}</TableCell>
              <TableCell>{row.experience}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
