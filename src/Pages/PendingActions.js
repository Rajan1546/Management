import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import './PendingActions.css'
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
    // valueGetter: (params) =>
    //   `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: "email",
    headerName: "Email ID",
    width: 150,
  },
  {
    field: "phonenummber",
    headerName: "Phone Number",
    width: 150,
  },
  {
    field: "grant",
    headerName: "Grant",
    width: 70,
  },
  {
    field: "reject",
    headerName: "Reject",
    width: 70,
  },
];

const rows = [
    { id: "#G5617", visitorimage: "https://i.pravatar.cc/150?img=70", firstName: "Jon", lastName: "Snow", companyname: "Stark Industries", meetingperson: "Person 1", email: "jon@example.com", phonenummber: "1234567890", grant: "Yes", reject: "No" },
    { id: "#G5618", visitorimage: "https://i.pravatar.cc/150?img=50", firstName: "Cersei", lastName: "Lannister", companyname: "Lannister Holdings", meetingperson: "Person 2", email: "cersei@example.com", phonenummber: "9876543210", grant: "Yes", reject: "No" },
    { id: "#G5619", visitorimage: "https://i.pravatar.cc/150?img=13", firstName: "Jaime", lastName: "Lannister", companyname: "Golden Hand Enterprises", meetingperson: "Person 3", email: "jaime@example.com", phonenummber: "5678901234", grant: "Yes", reject: "No" },
    { id: "#G5620", visitorimage: "https://i.pravatar.cc/150?img=34", firstName: "Arya", lastName: "Stark", companyname: "Faceless Co.", meetingperson: "Person 4", email: "arya@example.com", phonenummber: "4321098765", grant: "Yes", reject: "No" },
    { id: "#G5621", visitorimage: "https://i.pravatar.cc/150?img=25", firstName: "Daenerys", lastName: "Targaryen", companyname: "Targaryen Ventures", meetingperson: "Person 5", email: "daenerys@example.com", phonenummber: "9876541230", grant: "Yes", reject: "No" },
    { id: "#G5622", visitorimage: "https://i.pravatar.cc/150?img=36", firstName: "Melisandre", lastName: "None", companyname: "Shadow Mysteries Ltd.", meetingperson: "Person 6", email: "melisandre@example.com", phonenummber: "6543127890", grant: "Yes", reject: "No" },
    { id: "#G5623", visitorimage: "https://i.pravatar.cc/150?img=67", firstName: "Ferrara", lastName: "Clifford", companyname: "Crystal Innovations", meetingperson: "Person 7", email: "ferrara@example.com", phonenummber: "3456789012", grant: "Yes", reject: "No" },
    { id: "#G5624", visitorimage: "https://i.pravatar.cc/150?img=28", firstName: "Rossini", lastName: "Frances", companyname: "Harmonious Harmonies", meetingperson: "Person 8", email: "rossini@example.com", phonenummber: "8765432109", grant: "Yes", reject: "No" },
    { id: "#G5625", visitorimage: "https://i.pravatar.cc/150?img=39", firstName: "Harvey", lastName: "Roxie", companyname: "Infinite Ventures", meetingperson: "Person 9", email: "harvey@example.com", phonenummber: "2345678901", grant: "Yes", reject: "No" },
  ];
  
  

export default function PendingActions() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
    <div style={{ height: "77vh", width: "100%" , backgroundColor:'#fff'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
      />
    </div>
    </Container>
  );
}
