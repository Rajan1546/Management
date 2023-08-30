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

// ... (imports and other parts of the code remain the same)

const columns = [
  { field: "id", headerName: "ID Code", width: 120 },
  {
    field: "vehicleimage",
    headerName: "Vehicle's Image",
    width: 170,
    renderCell: (params) => (
      <Avatar alt="Visitor" src={params.row.vehicleimage} sx={{ width: 40, height: 40 }} />
    ),
  },
  { field: "name", headerName: "Name", width: 170 },
  { field: "companyname", headerName: "Company's Name", width: 260 },
  { field: "phoneNumber", headerName: "Phone Number", width: 160 },
  { field: "meetingperson", headerName: "Meeting Person", description: "This column has a value getter and is not sortable.", sortable: false, width: 180 },
  { field: "purpose", headerName: "Purpose", width: 150 },
  { field: "checkIn", headerName: "Check-In", width: 200 },
  { field: "checkOut", headerName: "Check-Out", width: 200 },
  { field: "location", headerName: "Location", width: 150 },
  { field: "bay", headerName: "Bay", width: 130 }, // New 'Bay' column
  { field: "bayCode", headerName: "Bay Code", width: 130 }, // New 'Bay Code' column
];

const rows = [
  { id: "#G5617", vehicleimage: "https://i.pravatar.cc/150?img=1", name: "Jon Snow", companyname: "Stark Industries", meetingperson: "Person 1", purpose: "Meeting", checkIn: "08:00 AM", checkOut: "05:00 PM", location: "Winterfell", bay: "Parking", bayCode: "P-2", phoneNumber: "123-456-7890" },
  { id: "#G5618", vehicleimage: "https://i.pravatar.cc/150?img=50", name: "Cersei Lannister", companyname: "Lannister Holdings", meetingperson: "Person 2", purpose: "Delivery", checkIn: "09:30 AM", checkOut: "04:30 PM", location: "Casterly Rock", bay: "Dock", bayCode: "D-1", phoneNumber: "987-654-3210" },
  { id: "#G5619", vehicleimage: "https://i.pravatar.cc/150?img=13", name: "Jaime Lannister", companyname: "Golden Hand Enterprises", meetingperson: "Person 3", purpose: "Meeting", checkIn: "10:15 AM", checkOut: "06:45 PM", location: "King's Landing", bay: "Parking", bayCode: "P-3", phoneNumber: "555-123-4567" },
  { id: "#G5620", vehicleimage: "https://i.pravatar.cc/150?img=34", name: "Arya Stark", companyname: "Faceless Co.", meetingperson: "Person 4", purpose: "Delivery", checkIn: "11:30 AM", checkOut: "03:15 PM", location: "Braavos", bay: "Dock", bayCode: "D-2", phoneNumber: "777-888-9999" },
  { id: "#G5621", vehicleimage: "https://i.pravatar.cc/150?img=25", name: "Daenerys Targaryen", companyname: "Targaryen Ventures", meetingperson: "Person 5", purpose: "Meeting", checkIn: "08:45 AM", checkOut: "07:30 PM", location: "Dragonstone", bay: "Parking", bayCode: "P-4", phoneNumber: "444-555-6666" },
  { id: "#G5622", vehicleimage: "https://i.pravatar.cc/150?img=36", name: "Melisandre None", companyname: "Shadow Mysteries Ltd.", meetingperson: "Person 6", purpose: "Delivery", checkIn: "09:00 AM", checkOut: "04:00 PM", location: "Asshai", bay: "Dock", bayCode: "D-3", phoneNumber: "111-222-3333" },
  { id: "#G5623", vehicleimage: "https://i.pravatar.cc/150?img=67", name: "Ferrara Clifford", companyname: "Crystal Innovations", meetingperson: "Person 7", purpose: "Meeting", checkIn: "10:30 AM", checkOut: "06:15 PM", location: "Braavos", bay: "Dock", bayCode: "D-4", phoneNumber: "888-999-0000" },
  { id: "#G5624", vehicleimage: "https://i.pravatar.cc/150?img=28", name: "Rossini Frances", companyname: "Harmonious Harmonies", meetingperson: "Person 8", purpose: "Delivery", checkIn: "11:15 AM", checkOut: "05:45 PM", location: "Harmony City", bay: "Parking", bayCode: "P-5", phoneNumber: "111-222-3333" },
  { id: "#G5625", vehicleimage: "https://i.pravatar.cc/150?img=39", name: "Harvey Roxie", companyname: "Infinite Ventures", meetingperson: "Person 9", purpose: "Meeting", checkIn: "08:30 AM", checkOut: "06:30 PM", location: "Infinity Town", bay: "Parking", bayCode: "P-6", phoneNumber: "555-666-7777" },
  { id: "#G5626", vehicleimage: "https://i.pravatar.cc/150?img=22", name: "Tyrion Lannister", companyname: "Wine & Wit Ltd.", meetingperson: "Person 10", purpose: "Meeting", checkIn: "09:45 AM", checkOut: "05:15 PM", location: "King's Landing", bay: "Parking", bayCode: "P-1", phoneNumber: "222-333-4444" },
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
    <Container maxWidth="unset" sx={{ mt: 4, mb: 4 ,marginTop:'7.5%' }}>
    <div style={{ height: "77.6vh", width: "100%" , backgroundColor:'#fff', padding : "1rem 1rem 2.7rem 1rem"}}> 
    <div style={{display:'flex', justifyContent:'space-between' , alignItems:'center', marginBottom:'5px'}}>
      <p style={{fontWeight:'bold' , margin:'0'}}>Visitors</p>
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
        
        // components={{
        //   Pagination: CustomPagination, // Use the custom pagination component
        // }}
      />
    </div>
    </Container>
  );
}
