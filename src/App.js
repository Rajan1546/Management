 import './App.css';
import Dashboard from './Pages/Dashboard';
import InOut from './Pages/InOut';
import Login from './Pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PendingActions from './Pages/PendingActions';
import Parking from './Pages/Docks';
// import FrontDeskPage from './Pages/FrontDeskPage';
import Forms from './Pages/Forms'
import BadgeAvatars from './Components/Icon';
import ConfirmationBill from './Pages/ConfrimationBill';
import Box from './Components/Box';
import CheckOut from './Pages/CheckOut';
// import CardProfile from './Components/CardProfile';
// import Box from './Components/Box';
// import Parking from './Components/Parking';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/arriving" element={<InOut />} />
      <Route path="/pendingactions" element={<PendingActions />} />
      {/* <Route path='/park' element={<Parking/>}/> */}
      <Route path='/forms' element={<Forms/>}/>
      <Route path='/box' element={<Box/>}/>
      <Route path='/confirmation' element={<ConfirmationBill/>}/>
      <Route path='/checkout' element={<CheckOut/>}/>
      {/* <Route path='/hello' element={<CardProfile/>}/> */}
      {/* <Route path='/Parking' element={<Parking/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
