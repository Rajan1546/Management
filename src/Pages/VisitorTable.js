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
      <Avatar alt="Visitor" src={params.row.visitorimage} sx={{ width: 40, height: 40 }} />
    ),
  },
  { field: "firstName", headerName: "First name", width: 170 },
  { field: "lastName", headerName: "Last name", width: 170 },
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
    field: "purpose",
    headerName: "Purpose",
    width: 150,
  },
  {
    field: "checkIn",
    headerName: "Check-In ",
    width: 200,
  },
  {
    field: "checkOut",
    headerName: "Check-Out ",
    width: 200,
  },
];

const rows = [
  { id: "#G5617", visitorimage: "https://i.pravatar.cc/150?img=70", firstName: "Jon", lastName: "Snow", companyname: "Stark Industries", meetingperson: "Person 1", purpose: "Meeting", checkIn: "08:00 AM", checkOut: "05:00 PM" },
  { id: "#G5618", visitorimage: "https://i.pravatar.cc/150?img=50", firstName: "Cersei", lastName: "Lannister", companyname: "Lannister Holdings", meetingperson: "Person 2", purpose: "Delivery", checkIn: "09:30 AM", checkOut: "04:30 PM" },
  { id: "#G5619", visitorimage: "https://i.pravatar.cc/150?img=13", firstName: "Jaime", lastName: "Lannister", companyname: "Golden Hand Enterprises", meetingperson: "Person 3", purpose: "Meeting", checkIn: "10:15 AM", checkOut: "06:45 PM" },
  { id: "#G5620", visitorimage: "https://i.pravatar.cc/150?img=34", firstName: "Arya", lastName: "Stark", companyname: "Faceless Co.", meetingperson: "Person 4", purpose: "Delivery", checkIn: "11:30 AM", checkOut: "03:15 PM" },
  { id: "#G5621", visitorimage: "https://i.pravatar.cc/150?img=25", firstName: "Daenerys", lastName: "Targaryen", companyname: "Targaryen Ventures", meetingperson: "Person 5", purpose: "Meeting", checkIn: "08:45 AM", checkOut: "07:30 PM" },
  { id: "#G5622", visitorimage: "https://i.pravatar.cc/150?img=36", firstName: "Melisandre", lastName: "None", companyname: "Shadow Mysteries Ltd.", meetingperson: "Person 6", purpose: "Delivery", checkIn: "09:00 AM", checkOut: "04:00 PM" },
  { id: "#G5623", visitorimage: "https://i.pravatar.cc/150?img=67", firstName: "Ferrara", lastName: "Clifford", companyname: "Crystal Innovations", meetingperson: "Person 7", purpose: "Meeting", checkIn: "10:30 AM", checkOut: "06:15 PM" },
  { id: "#G5624", visitorimage: "https://i.pravatar.cc/150?img=28", firstName: "Rossini", lastName: "Frances", companyname: "Harmonious Harmonies", meetingperson: "Person 8", purpose: "Delivery", checkIn: "11:15 AM", checkOut: "05:45 PM" },
  { id: "#G5625", visitorimage: "https://i.pravatar.cc/150?img=39", firstName: "Harvey", lastName: "Roxie", companyname: "Infinite Ventures", meetingperson: "Person 9", purpose: "Meeting", checkIn: "08:30 AM", checkOut: "06:30 PM" },
  // Add more rows as needed
];


export default function VisitorTable() {
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
        
        components={{
          Pagination: CustomPagination, // Use the custom pagination component
        }}
      />
    </div>
    </Container>
  );
}
