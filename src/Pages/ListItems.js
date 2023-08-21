import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CommuteOutlinedIcon from '@mui/icons-material/CommuteOutlined';
import car from '../Images/car.png'

export const mainListItems = (setSelectedComponent) => (
  <React.Fragment>
    <ListItemButton onClick={() => setSelectedComponent('dashboard')}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton onClick={() => setSelectedComponent('pendingActions')}>
      <ListItemIcon>
        <PendingActionsIcon/>
      </ListItemIcon>
      <ListItemText primary="Pending Actions" />
    </ListItemButton>
    <ListItemButton onClick={() => setSelectedComponent('visitors')}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Visitors" />
    </ListItemButton>
    <ListItemButton onClick={() => setSelectedComponent('vehicles')}>
      <ListItemIcon>
        <CommuteOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Vehicles" />
    </ListItemButton>
    <ListItemButton onClick={() => setSelectedComponent('parking')}Linking>
      <ListItemIcon>
        <img src={car} alt='car' width={'28px'}/>
      </ListItemIcon>
      <ListItemText primary="Parkings" />
    </ListItemButton>
  </React.Fragment>
);

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Saved reports
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItemButton>
//   </React.Fragment>
// );