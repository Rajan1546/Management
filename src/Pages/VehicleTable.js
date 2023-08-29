import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';

const generateRandomLocation = () => {
  const locations = ["City A", "City B", "City C", "City D", "City E"];
  return locations[Math.floor(Math.random() * locations.length)];
};

const generateRandomVehicleNumber = (prefix) => {
  const digits = "0123456789";
  const randomDigits = Array.from({ length: 2 }, () => digits.charAt(Math.floor(Math.random() * digits.length))).join('');
  return `${prefix}-${randomDigits}`;
};


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
    width: 150,
    valueGetter: () => generateRandomLocation(),
  },
  {
    field: "number",
    headerName: "Number",
    width: 150,
    valueGetter: (params) => generateRandomVehicleNumber(params.row.waitingat.startsWith('P') ? 'P' : 'D'),
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
  {
    field: "waitingat",
    headerName: "Waiting At",
    width: 150,
    
  },
  {
    field: "vehicleNumber",
    headerName: "Number",
    width: 150,
    valueGetter: (params) => {
      const prefix = params.row.waitingat.startsWith('City') ? 'P' : 'D';
      return generateRandomVehicleNumber(prefix);
    },
  },
];

const rows = [
  { id: "#G5617", visitorimage: "https://i.pravatar.cc/150?img=70", firstName: "Jon", lastName: "Snow", companyname: "Stark Industries", meetingperson: "Person 1", waitingat: "Parking", vehicle: generateRandomVehicleNumber('City'), purpose: "Meeting", checkIn: "08:00 AM", checkOut: "05:00 PM" },
  { id: "#G5618", visitorimage: "https://i.pravatar.cc/150?img=50", firstName: "Cersei", lastName: "Lannister", companyname: "Lannister Holdings", meetingperson: "Person 2", waitingat: "Dock", vehicle: generateRandomVehicleNumber('City'), purpose: "Delivery", checkIn: "09:30 AM", checkOut: "04:30 PM" },
  // ... (more rows)
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

  return (
    <Container maxWidth="unset" sx={{ mt: 4, mb: 4, marginTop:'7.5%' }}>
      <div style={{ height: "77.6vh", width: "100%", backgroundColor:'#fff', padding : "1rem 1rem 2.7rem 1rem" }}> 
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'5px' }}>
          <p style={{ fontWeight:'bold', margin:'0' }}>Vehicles</p>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </div>
        <DataGrid
          rows={rows}
          columns={columns}
        />
      </div>
    </Container>
  );
}
