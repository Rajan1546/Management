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

// const columns = [
//   { field: "id", headerName: "ID Code", width: 90 },
//   {
//     field: "visitorimage",
//     headerName: "Visitor's Image",
//     width: 90,
//     renderCell: (params) => (
//         <Avatar alt="Visitor" src={params.row.visitorimage} sx={{ width: 40, height: 40 }} />
//       ),
//   },
//   { field: "firstName", headerName: "First name", width: 130 },
//   { field: "lastName", headerName: "Last name", width: 130 },
//   {
//     field: "companyname",
//     headerName: "Company's Name",
//     width: 200,
//   },
//   {
//     field: "meetingperson",
//     headerName: "Meeting Person",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     // valueGetter: (params) =>
//     //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
//   {
//     field: "email",
//     headerName: "Email ID",
//     width: 150,
//   },
//   {
//     field: "phonenummber",
//     headerName: "Phone Number",
//     width: 150,
//   },
//   {
//     field: "action",
//     headerName: "Action",
//     width: 120,
//     renderCell: (params) => (
//       <div style={{ display: "flex",justifyContent: "space-between" ,width:'25px' , height:'25px'}}>
//         <img src={check} alt="Grant" style={{marginRight:'50%' , cursor:'pointer'}}/>
//         <img src={cross} alt="Reject" style={{cursor:'pointer'}}/>
//       </div>
//     ),
//   },
// ];

// const rows = [
//     { id: "#G5617", visitorimage: "https://i.pravatar.cc/150?img=70", firstName: "Jon", lastName: "Snow", companyname: "Stark Industries", meetingperson: "Person 1", email: "jon@example.com", phonenummber: "1234567890", grant: "Yes", reject: "No" },
//     { id: "#G5618", visitorimage: "https://i.pravatar.cc/150?img=50", firstName: "Cersei", lastName: "Lannister", companyname: "Lannister Holdings", meetingperson: "Person 2", email: "cersei@example.com", phonenummber: "9876543210", grant: "Yes", reject: "No" },
//     { id: "#G5619", visitorimage: "https://i.pravatar.cc/150?img=13", firstName: "Jaime", lastName: "Lannister", companyname: "Golden Hand Enterprises", meetingperson: "Person 3", email: "jaime@example.com", phonenummber: "5678901234", grant: "Yes", reject: "No" },
//     { id: "#G5620", visitorimage: "https://i.pravatar.cc/150?img=34", firstName: "Arya", lastName: "Stark", companyname: "Faceless Co.", meetingperson: "Person 4", email: "arya@example.com", phonenummber: "4321098765", grant: "Yes", reject: "No" },
//     { id: "#G5621", visitorimage: "https://i.pravatar.cc/150?img=25", firstName: "Daenerys", lastName: "Targaryen", companyname: "Targaryen Ventures", meetingperson: "Person 5", email: "daenerys@example.com", phonenummber: "9876541230", grant: "Yes", reject: "No" },
//     { id: "#G5622", visitorimage: "https://i.pravatar.cc/150?img=36", firstName: "Melisandre", lastName: "None", companyname: "Shadow Mysteries Ltd.", meetingperson: "Person 6", email: "melisandre@example.com", phonenummber: "6543127890", grant: "Yes", reject: "No" },
//     { id: "#G5623", visitorimage: "https://i.pravatar.cc/150?img=67", firstName: "Ferrara", lastName: "Clifford", companyname: "Crystal Innovations", meetingperson: "Person 7", email: "ferrara@example.com", phonenummber: "3456789012", grant: "Yes", reject: "No" },
//     { id: "#G5624", visitorimage: "https://i.pravatar.cc/150?img=28", firstName: "Rossini", lastName: "Frances", companyname: "Harmonious Harmonies", meetingperson: "Person 8", email: "rossini@example.com", phonenummber: "8765432109", grant: "Yes", reject: "No" },
//     { id: "#G5625", visitorimage: "https://i.pravatar.cc/150?img=39", firstName: "Harvey", lastName: "Roxie", companyname: "Infinite Ventures", meetingperson: "Person 9", email: "harvey@example.com", phonenummber: "2345678901", grant: "Yes", reject: "No" },
//   ];
  
const columns = [
  { field: "id", headerName: "ID Code", width: 90 },
  {
    field: "visitorimage",
    headerName: "Visitor's Image",
    width: 90,
    renderCell: (params) => (
      <Avatar alt="Visitor" src={params.row.visitorimage} sx={{ width: 40, height: 40 }} />
    ),
  },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "companyname",
    headerName: "Company's Name",
    width: 200,
  },
  {
    field: "meetingperson",
    headerName: "Meeting Person",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
  {
    field: "purpose",
    headerName: "Purpose",
    width: 150,
  },
  {
    field: "phonenummber",
    headerName: "Phone Number",
    width: 150,
  },
  {
    field: "action",
    headerName: "Action",
    width: 120,
    renderCell: (params) => (
      <div style={{ display: "flex", justifyContent: "space-between", width: '25px', height: '25px' }}>
        <img src={check} alt="Grant" style={{ marginRight: '50%', cursor: 'pointer' }} />
        <img src={cross} alt="Reject" style={{ cursor: 'pointer' }} />
      </div>
    ),
  },
];

const rows = [
  { id: "#G5617", visitorimage: "https://i.pravatar.cc/150?img=70", firstName: "Jon", lastName: "Snow", companyname: "Stark Industries", meetingperson: "Person 1", purpose: "Meeting", phonenummber: "1234567890", grant: "Yes", reject: "No" },
  { id: "#G5618", visitorimage: "https://i.pravatar.cc/150?img=50", firstName: "Cersei", lastName: "Lannister", companyname: "Lannister Holdings", meetingperson: "Person 2", purpose: "Delivery", phonenummber: "9876543210", grant: "Yes", reject: "No" },
  { id: "#G5619", visitorimage: "https://i.pravatar.cc/150?img=13", firstName: "Jaime", lastName: "Lannister", companyname: "Golden Hand Enterprises", meetingperson: "Person 3", purpose: "Meeting", phonenummber: "5678901234", grant: "Yes", reject: "No" },
  { id: "#G5620", visitorimage: "https://i.pravatar.cc/150?img=34", firstName: "Arya", lastName: "Stark", companyname: "Faceless Co.", meetingperson: "Person 4", purpose: "Delivery", phonenummber: "4321098765", grant: "Yes", reject: "No" },
  { id: "#G5621", visitorimage: "https://i.pravatar.cc/150?img=25", firstName: "Daenerys", lastName: "Targaryen", companyname: "Targaryen Ventures", meetingperson: "Person 5", purpose: "Meeting", phonenummber: "9876541230", grant: "Yes", reject: "No" },
  { id: "#G5622", visitorimage: "https://i.pravatar.cc/150?img=36", firstName: "Melisandre", lastName: "None", companyname: "Shadow Mysteries Ltd.", meetingperson: "Person 6", purpose: "Delivery", phonenummber: "6543127890", grant: "Yes", reject: "No" },
  { id: "#G5623", visitorimage: "https://i.pravatar.cc/150?img=67", firstName: "Ferrara", lastName: "Clifford", companyname: "Crystal Innovations", meetingperson: "Person 7", purpose: "Meeting", phonenummber: "3456789012", grant: "Yes", reject: "No" },
  { id: "#G5624", visitorimage: "https://i.pravatar.cc/150?img=28", firstName: "Rossini", lastName: "Frances", companyname: "Harmonious Harmonies", meetingperson: "Person 8", purpose: "Delivery", phonenummber: "8765432109", grant: "Yes", reject: "No" },
  { id: "#G5625", visitorimage: "https://i.pravatar.cc/150?img=39", firstName: "Harvey", lastName: "Roxie", companyname: "Infinite Ventures", meetingperson: "Person 9", purpose: "Meeting", phonenummber: "2345678901", grant: "Yes", reject: "No" },
];


  

export default function PendingActions() {
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
      <p style={{fontWeight:'bold' , margin:'0'}}>Pending Actions</p>
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
