// import React from "react";
// import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import { red } from "@mui/material/colors";
// import StaffTable from "./StaffTable";
// import "./Box.css";
// import Button from '@mui/material/Button';
// import { useNavigate } from "react-router-dom"; 
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faCarBus } from "@fortawesome/free-solid-svg-icons";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://werqlabs.com/">
//         Made with
//         <FavoriteIcon
//           sx={{
//             height: 15,
//             width: 15,
//             color: red[500],
//             verticalAlign: "middle",
//           }}
//         />
//         by WerqLabs
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const DashboardContainer = () => {
//   const navigate = useNavigate(); // Initialize the useNavigate hook

//   const handleAddButtonClick = () => {
//     // Handle the "Add" button click and navigate to the "/arriving" route
//     navigate("/arriving");
//   };

//   return (
//     <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//       <Grid container spacing={3}>
//         {/* Chart */}
//         <Grid item xs={6} md={3} lg={3}>
//           {/* <Paper
//             sx={{
//               p: 2,
//               display: "flex",
//               flexDirection: "column",
//               height: 240,
//               // clipPath: "circle(56.5% at 50% 0)",
//             }}
//           > */}
//             <figure className="snip1533">
//               <figcaption>
//                 {/*<FontAwesomeIcon icon="fa-solid fa-car-bus" />*/}
//                 <h3 style={{ textDecoration: "#9e9e9e}" }}>Total Entry</h3>
//                 <blockquote>
//                   <h1>174</h1>
//                 </blockquote>

//                 {/* <h4>Google Inc.</h4> */}
//               </figcaption>
//             </figure>
//           {/* </Paper> */}
//         </Grid>
//         <Grid item xs={6} md={3} lg={3}>
//           {/* <Paper
//             sx={{
//               p: 2,
//               display: "flex",
//               flexDirection: "column",
//               height: 240,
//             }}
//           > */}
//             <figure className="snip1533">
//               <figcaption>
//                 {/*<FontAwesomeIcon icon="fa-solid fa-car-bus" />*/}
//                 <h3 style={{ textDecoration: "#9e9e9e}" }}> Visitors</h3>
//                 <blockquote>
//                   <h1>98</h1>
//                 </blockquote>

//                 {/* <h4>Google Inc.</h4> */}
//               </figcaption>
//             </figure> 
//           {/* </Paper> */}
//         </Grid>
//         <Grid item xs={6} md={3} lg={3}>
//           {/* <Paper
//             sx={{
//               p: 2,
//               display: "flex",
//               flexDirection: "column",
//               height: 240,
//             }}
//           > */}
//             <figure className="snip1533">
//               <figcaption>
//                 {/*<FontAwesomeIcon icon="fa-solid fa-car-bus" />*/}
//                 <h3 style={{ textDecoration: "#9e9e9e}" }}> Vehicles</h3>
//                 <blockquote>
//                   <h1>76</h1>
//                 </blockquote>

//                 {/* <h4>Google Inc.</h4> */}
//               </figcaption>
//             </figure> 
//           {/* </Paper> */}
//         </Grid>
//         {/* Recent Deposits */}
//         <Grid item xs={6} md={3} lg={3}>
//           {/* <Paper
//             sx={{
//               p: 2,
//               display: "flex",
//               flexDirection: "column",
//               height: 240,
//             }}
//           > */}
//            <figure className="snip1533">
//               <figcaption>
//                 {/*<FontAwesomeIcon icon="fa-solid fa-car-bus" />*/}
//                 <h3 style={{ textDecoration: "#9e9e9e}" }} >Any Guest ?</h3>
//                 <blockquote>
//                   <Button variant="outlined" color="primary" sx={{margin:' 12px 0px'}} onClick={handleAddButtonClick}>Add</Button>
//                 </blockquote>

//                 {/* <h4>Google Inc.</h4> */}
//               </figcaption>
//             </figure> 
//             {/* <Deposits /> */}
//           {/* </Paper> */}
//         </Grid>
//         {/* Recent Orders */}
//         <Grid item xs={12}>
//           <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
//             <Typography sx={{fontSize:20 , fontWeight:600 }}>Staff Working :</Typography>
//             <StaffTable />
//           </Paper>
//         </Grid>
//       </Grid>
//       <Copyright sx={{ pt: 4 }} />
//     </Container>
//   );
// };

// export default DashboardContainer;


import React from "react";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import StaffTable from "./StaffTable";
import "./Box.css";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Avatar from "@mui/material/Avatar";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://werqlabs.com/">
        Made with
        <FavoriteIcon
          sx={{
            height: 15,
            width: 15,
            color: red[500],
            verticalAlign: "middle",
          }}
        />
        by WerqLabs
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// ... (other imports)

const DashboardContainer = () => {
  const navigate = useNavigate();

  const handleAddButtonClick = () => {
    navigate("/arriving");
  };

  const cardData = [
    { title: "Total Entry", count: 174 },
    { title: "Visitors", count: 98 },
    { title: "Vehicles", count: 76 },
    { title: "Any Guest ?", count: "", button: true },
  ];

  return (
    <Container maxWidth="unset" sx={{ mt: 4, mb: 4, marginTop: '7.5%', backgroundColor: '#EFF8FF' }}>
      <Grid container spacing={3} >
        {cardData.map((card, index) => (
          <Grid item xs={6} md={3} lg={3} key={index}>
            {/* <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            > */}
            <figure className='snip1533'>
              {/* <figcaption> */}
              {/* <div className="icon-container">
                    {card.icon} 
                  </div> */}
              <Avatar sx={{ width:'55px' , height:'55px' }}>
                {card.title.slice(0, 1)}
              </Avatar>
              <div>
              <h3 style={{ textDecoration: "#9e9e9e" }}>{card.title}</h3>
              <blockquote>
                <h1>{card.count}</h1>
              </blockquote>
              {card.button && (
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ margin: '12px 0px' }}
                  onClick={handleAddButtonClick}
                >
                  Add
                </Button>
              )}
              </div>
              {/* </figcaption> */}
            </figure>
            {/* </Paper> */}
          </Grid>
        ))}
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
              Staff Working :
            </Typography>
            <StaffTable />
          </Paper>
        </Grid>
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </Container>
  );
};

export default DashboardContainer;


// import React from "react";
// import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import StaffTable from "./StaffTable";
// import "./Box.css";
// import Button from '@mui/material/Button';
// import { useNavigate } from "react-router-dom";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://werqlabs.com/">
//         Made with
//         <FavoriteIcon
//           sx={{
//             height: 15,
//             width: 15,
//             color: red[500],
//             verticalAlign: "middle",
//           }}
//         />
//         by WerqLabs
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// // ... (other imports)

// const DashboardContainer = () => {
//   const navigate = useNavigate();

//   const handleAddButtonClick = () => {
//     navigate("/arriving");
//   };

//   const cardData = [
//     { title: "Total Entry", count: 174 },
//     { title: "Visitors", count: 98 },
//     { title: "Vehicles", count: 76 },
//     { title: "Any Guest ?", count: "", button: true },
//   ];

//   const iconClasses = [
//     "fa-car", // Corresponds to "Total Entry"
//     "fa-user", // Corresponds to "Visitors"
//     "fa-bus", // Corresponds to "Vehicles"
//     "fa-plus", // Corresponds to "Any Guest ?"
//   ];

//   return (
//     <Container maxWidth="unset" sx={{ mt: 4, mb: 4 , marginTop:'7.5%' , backgroundColor:'#EFF8FF'}}>
//       <Grid container spacing={3}>
//       <Grid>
//       </Grid>
//         {/* Recent Orders */}
//         <Grid item xs={12}>
//           <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
//             <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
//               Staff Working :
//             </Typography>
//             <StaffTable />
//           </Paper>
//         </Grid>
//       </Grid>
//       <Copyright sx={{ pt: 4 }} />
//     </Container>
//   );
// };

// export default DashboardContainer;

