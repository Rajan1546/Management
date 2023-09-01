// import * as React from "react";
// import {
//   styled,
//   createTheme,
//   ThemeProvider,
//   useTheme,
//   makeStyles,
// } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import MuiDrawer from "@mui/material/Drawer";
// import Box from "@mui/material/Box";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import Badge from "@mui/material/Badge";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// // import NotificationsIcon from "@mui/icons-material/Notifications";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
// import { mainListItems } from "./ListItems";
import gati from "../Images/gati.png";
// // secondaryListItems
// // import Chart from './Chart';
// // import Deposits from './Deposits';
// // import Orders from './Orders';
// import "./Dashboard.css";
// import DashboardContainer from "../Components/DashboardContainer ";
// import PendingActions from "./PendingActions";
// import Docks from "./Docks";
// import VisitorTable from "./VisitorTable";
// import VehicleTable from "./VehicleTable";
import { useNavigate } from "react-router-dom";

// const drawerWidth = 240;

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   "& .MuiDrawer-paper": {
//     position: "relative",
//     whiteSpace: "nowrap",
//     width: drawerWidth,
//     transition: theme.transitions.create("width", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     boxSizing: "border-box",
//     ...(!open && {
//       overflowX: "hidden",
//       transition: theme.transitions.create("width", {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//       width: theme.spacing(0),
//       [theme.breakpoints.up("sm")]: {
//         width: theme.spacing(9),
//       },
//     }),
//   },
// }));

// // TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

// export default function Dashboard() {
//   const [open, setOpen] = React.useState(true);
//   const theme = useTheme();
//   const [isSmallScreenDrawerOpen, setIsSmallScreenDrawerOpen] =
//     React.useState(false);

//   const toggleDrawer = () => {
//     setOpen(!open);
//   };

//   const [selectedComponent, setSelectedComponent] = React.useState("dashboard");
  // const navigate = useNavigate(); // Initialize the useNavigate hook

  // const handleAddButtonClick = () => {
  //   // Handle the "Add" button click and navigate to the "/arriving" route
  //   navigate("/");
  // };
//   const renderSelectedComponent = () => {
//     switch (selectedComponent) {
//       case "dashboard":
//         return <DashboardContainer />;
//       case "pendingActions":
//         return <PendingActions />;
//       case "visitors":
//         return <VisitorTable />;
//       case "vehicles":
//         return <VehicleTable />;
//       case "Docks":
//         return <Docks />;
//       // Add more cases for other components if needed
//       default:
//         return <DashboardContainer />;
//     }
//   };

//   React.useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < theme.breakpoints.values.sm) {
//         setIsSmallScreenDrawerOpen(true);
//       } else {
//         setIsSmallScreenDrawerOpen(false);
//       }
//     };
//     // Initial check
//     handleResize();

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [theme.breakpoints.values.sm]);

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Box sx={{ display: "flex" }}>
//         <CssBaseline />
//         <AppBar position="absolute" open={open} >
//           <Toolbar
//             sx={{
//               pr: "24px", // keep right padding when drawer closed
//               justifyContent:'flex-end'
//             }}
//           >
//             <IconButton
//               edge="start"
//               color="inherit"
//               aria-label="open drawer"
//               onClick={toggleDrawer}
//               sx={{
//                 marginRight: "36px",
//                 ...(open && { display: "none" }),
//               }}
//             >
//               <MenuIcon />
//             </IconButton>
//             {!open && ( // Conditionally render the image when the drawer is closed
//               <Typography
//                 component="h1"
//                 variant="h6"
//                 color="inherit"
//                 noWrap
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   flexGrow: 1,
//                 }}
//               >
//                 <img
//                   src={gati}
//                   alt="Dashboard Main Logo"
//                   style={{
//                     width: isSmallScreenDrawerOpen ? "50%" : "9.8%",
//                     height: "10%",
//                   }}
//                   // style={{ width: "9.8%", height: "10%" }}
//                 />
//               </Typography>
//             )}
//             {/* <Typography
//               component="h1"
//               variant="h6"
//               color="inherit"
//               noWrap
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 flexGrow: 1,
//               }}
//             >
//               <img
//                 src={gati}
//                 alt="Dashboard Main Logo"
//                 style={{ width: "9.8%", height: "10%" }}
//               />
//             </Typography> */}
//             <IconButton color="inherit" sx={{alignItems:'center'}} onClick={handleAddButtonClick}>

//                 <PowerSettingsNewOutlinedIcon />
//                 <Typography sx={{marginLeft:'4%' , fontWeight:500}}>Logout</Typography>
//             </IconButton>
//           </Toolbar>
//         </AppBar>
//         <Drawer
//           variant="permanent"
//           open={open}
//           sx={{
//             position: isSmallScreenDrawerOpen ? "absolute" : "static", // Change position based on small screen drawer status
//             zIndex: isSmallScreenDrawerOpen ? theme.zIndex.drawer + 0 : "auto", // Higher z-index for small screen drawer
//             transition: "none", // Disable transition on position change
//             ...(isSmallScreenDrawerOpen && { width: 0 }),

//           }}
//         >
//           <Toolbar
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               px: [1],
//               backgroundColor:'#1976D2'
//             }}
//           >
//             <img
//               src={gati}
//               alt="Drawer Logo"
//               style={{
//                 width: isSmallScreenDrawerOpen ? "50%" : "60%",
//                 height: "75%",
//               }}
//             />
//             <IconButton onClick={toggleDrawer}>
//               <ChevronLeftIcon />
//             </IconButton>
//           </Toolbar>
//           <Divider />
//           <List
//             component="nav"
//             sx={{
//               width: "100%",
//               overflowX: "hidden",
//             }}
//           >
//             {mainListItems(setSelectedComponent)}
//           </List>
//         </Drawer>
//         <Box
//           component="main"
//           sx={{
//             backgroundColor: (theme) =>
//               theme.palette.mode === "light"
//                 ? theme.palette.grey[100]
//                 : theme.palette.grey[900],
//             flexGrow: 1,
//             height: "100vh",
//             overflow: "auto",
//           }}
//         >
//           <Toolbar />
//           {renderSelectedComponent()}
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// }

import React, { useState, useEffect } from "react";
import "./Dashboard.css"; // Import your CSS file
import DashboardContainer from "../Components/DashboardContainer";
import PendingActions from "./PendingActions";
import VehicleTable from "./VehicleTable";
import VisitorTable from "./VisitorTable";
// import Docks from "./Docks";
import Forms from "./Forms";
import InOut from "./InOut";

const HomeContent = () => <div>Home Content</div>;
const AboutContent = () => <div>About Content</div>;
const PortfolioContent = () => <div>Portfolio Content</div>;
const ServicesContent = () => <div>Services Content</div>;
const ContactContent = () => <div>Contact Content</div>;

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark-mode") {
      setDarkMode(true);
    }
  }, []);

  const [activeContent, setActiveContent] = useState(<DashboardContainer />);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleAddButtonClick = () => {
    // Handle the "Add" button click and navigate to the "/arriving" route
    navigate("/");
  };
  const handleNavigationClick = (contentComponent) => {
    setActiveContent(contentComponent);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => {
      const newMode = !prevDarkMode;
      localStorage.setItem("mode", newMode ? "dark-mode" : "light-mode");
      return newMode;
    });
  };

  const toggleSidebar = () => {
    setSidebarActive((prevSidebarActive) => !prevSidebarActive);
  };

  const closeSidebar = (e) => {
    const clickedElm = e.target;
    if (
      !clickedElm.classList.contains("sidebarOpen") &&
      !clickedElm.classList.contains("menu")
    ) {
      setSidebarActive(false);
    }
  };

  return (
    <div>
      <nav className={sidebarActive ? "active" : ""}>
        <div className={`nav-bar`}>
          <i className="bx bx-menu sidebarOpen" onClick={toggleSidebar}></i>
          <span
            className="logo navLogo"
            style={{ width: "8.5%", display: "flex", justifyContent: "center" }}
          >
            <img src={gati} alt="Dashboard Main Logo" width="100%" />
          </span>

          <div className="menu">
            <div className="logo-toggle">
              <span className="logo">
                <img
                  src={gati}
                  alt="Dashboard Main Logo"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "60%",
                    height: "10%",
                  }}
                />
              </span>
              <i className="bx bx-x siderbarClose" onClick={toggleSidebar}></i>
            </div>

            <ul className="nav-links">
              <li>
                <a
                  href="#"
                  onClick={() => handleNavigationClick(<DashboardContainer />)}
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleNavigationClick(<PendingActions />)}
                >
                  Pending Actions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleNavigationClick(<VehicleTable />)}
                >
                  Vehicles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => handleNavigationClick(<VisitorTable />)}
                >
                  Visitors
                </a>
              </li>
              <li>
                <a href="#" onClick={() => handleNavigationClick(<InOut/>)}>
                  Add
                </a>
              </li>
            </ul>
          </div>
          <div className="darkLight-searchBox">
            {/* <div className="dark-light">
            <i
              className={`bx ${darkMode ? 'bx-sun sun' : 'bx-moon moon'}`}
              onClick={toggleDarkMode}
            ></i>
          </div> */}

            {/* <div className="searchBox">
            <div className="searchToggle" onClick={() => setSearchActive(!searchActive)}>
              <i className="bx bx-x cancel"></i>
              <i className="bx bx-search search"></i>
            </div>

            <div className={`search-field ${searchActive ? 'active' : ''}`}>
              <input type="text" placeholder="Search..." />
              <i className="bx bx-search"></i>
            </div>
          </div> */}
            <IconButton color="inherit" sx={{ alignItems: "center" }}>
              <PowerSettingsNewOutlinedIcon sx={{ color: "white" }} />
              <Typography
                sx={{ marginLeft: "4%", fontWeight: 500, color: "white" }} onClick={handleAddButtonClick}
              >
                Logout
              </Typography>
            </IconButton>
          </div>
        </div>
      </nav>
      <div className="content">
        {/* Display active content component */}
        {activeContent}
      </div>
    </div>
  );
};

export default Dashboard;
