import * as React from "react";
import { DataGrid, GridPagination  } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import './PendingActions.css'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import check from '../Images/check.png';
import cross from '../Images/cross.png'
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const columns = [
  { field: "id", headerName: "ID Code", width: 120 },
  {
    field: "visitorimage",
    headerName: "Visitor's Image",
    width: 170,
    renderCell: (params) => (
      <Avatar alt="Visitor" src={params.row.visitorimage} sx={{ width: 40, height: 40 , display:'flex' ,justifyContent:'center'}} />
    ),
  },
  {
    field: "name",
    headerName: "Name",
    width: 170,
    valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: "companyname",
    headerName: "Company's Name",
    width: 260,
  },
  {
    field: "meetingperson",
    headerName: "Meeting Person",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 180,
  },
  {
    field: "location",
    headerName: "Location",
    width: 160,
  },
  {
    field: "vehicle",
    headerName: "Vehicle Number",
    width: 160,
  },
  {
    field: "purpose",
    headerName: "Purpose",
    width: 180,
  },
  {
    field: "checkIn",
    headerName: "Check-In",
    width: 150,
  },
  {
    field: "checkOut",
    headerName: "Check-Out",
    width: 150,
  },
];

const generateRandomLocation = () => {
  const locations = ["City A", "City B", "City C", "City D", "City E"];
  return locations[Math.floor(Math.random() * locations.length)];
};

const generateRandomVehicleNumber = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";
  const randomLetters = Array.from({ length: 2 }, () => letters.charAt(Math.floor(Math.random() * letters.length))).join('');
  const randomDigits = Array.from({ length: 2 }, () => digits.charAt(Math.floor(Math.random() * digits.length))).join('');
  return `IN-${randomLetters}-${randomDigits}-${randomDigits}`;
};

const rows = [
  { id: "#G5617", visitorimage: "https://i.pravatar.cc/150?img=70", firstName: "Jon", lastName: "Snow", companyname: "Stark Industries", meetingperson: "Person 1", location: generateRandomLocation(), vehicle: generateRandomVehicleNumber(), purpose: "Meeting", checkIn: "08:00 AM", checkOut: "05:00 PM" },
  { id: "#G5618", visitorimage: "https://i.pravatar.cc/150?img=50", firstName: "Cersei", lastName: "Lannister", companyname: "Lannister Holdings", meetingperson: "Person 2", location: generateRandomLocation(), vehicle: generateRandomVehicleNumber(), purpose: "Delivery", checkIn: "09:30 AM", checkOut: "04:30 PM" },
  { id: "#G5619", visitorimage: "https://i.pravatar.cc/150?img=13", firstName: "Jaime", lastName: "Lannister", companyname: "Golden Hand Enterprises", meetingperson: "Person 3", location: generateRandomLocation(), vehicle: generateRandomVehicleNumber(), purpose: "Meeting", checkIn: "10:15 AM", checkOut: "06:45 PM" },
  { id: "#G5620", visitorimage: "https://i.pravatar.cc/150?img=34", firstName: "Arya", lastName: "Stark", companyname: "Faceless Co.", meetingperson: "Person 4", location: generateRandomLocation(), vehicle: generateRandomVehicleNumber(), purpose: "Delivery", checkIn: "11:00 AM", checkOut: "04:00 PM" },
  { id: "#G5621", visitorimage: "https://i.pravatar.cc/150?img=25", firstName: "Daenerys", lastName: "Targaryen", companyname: "Targaryen Ventures", meetingperson: "Person 5", location: generateRandomLocation(), vehicle: generateRandomVehicleNumber(), purpose: "Meeting", checkIn: "12:30 PM", checkOut: "07:30 PM" },
  { id: "#G5622", visitorimage: "https://i.pravatar.cc/150?img=36", firstName: "Melisandre", lastName: "None", companyname: "Shadow Mysteries Ltd.", meetingperson: "Person 6", location: generateRandomLocation(), vehicle: generateRandomVehicleNumber(), purpose: "Delivery", checkIn: "02:00 PM", checkOut: "06:00 PM" },
  { id: "#G5623", visitorimage: "https://i.pravatar.cc/150?img=67", firstName: "Ferrara", lastName: "Clifford", companyname: "Crystal Innovations", meetingperson: "Person 7", location: generateRandomLocation(), vehicle: generateRandomVehicleNumber(), purpose: "Meeting", checkIn: "09:45 AM", checkOut: "05:15 PM" },
  { id: "#G5624", visitorimage: "https://i.pravatar.cc/150?img=28", firstName: "Rossini", lastName: "Frances", companyname: "Harmonious Harmonies", meetingperson: "Person 8", location: generateRandomLocation(), vehicle: generateRandomVehicleNumber(), purpose: "Delivery", checkIn: "11:30 AM", checkOut: "04:45 PM" },
  { id: "#G5625", visitorimage: "https://i.pravatar.cc/150?img=39", firstName: "Harvey", lastName: "Roxie", companyname: "Infinite Ventures", meetingperson: "Person 9", location: generateRandomLocation(), vehicle: generateRandomVehicleNumber(), purpose: "Meeting", checkIn: "01:15 PM", checkOut: "07:00 PM" },
];
  

export default function VehicleTable() {
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '20%',
    border: '1px solid #ccc',
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1.5),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(0.5, 0.5, 0.5, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      width: '100%',
    },
  }));

  const CustomPagination = () => (
    <Stack spacing={2}>
      <Pagination count={10}  />
    </Stack>
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
    <div style={{ height: "77.6vh", width: "100%" , backgroundColor:'#fff', padding : "1rem 1rem 2.7rem 1rem"}}> 
    <div style={{display:'flex', justifyContent:'space-between' , alignItems:'center', marginBottom:'5px'}}>
      <p style={{fontWeight:'bold' , margin:'0'}}>Vehicles</p>
      <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        // sx={{backgroundColor:'#ccc'}}
      />
    </Search>
    </div>
      <DataGrid
        rows={rows}
        columns={columns}
        
        components={{
          Pagination: CustomPagination, // Use the custom pagination component
        }}
      />
    </div>
    </Container>
  );
}
