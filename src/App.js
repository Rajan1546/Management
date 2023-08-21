 import './App.css';
import Dashboard from './Pages/Dashboard';
import InOut from './Pages/InOut';
import Login from './Pages/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PendingActions from './Pages/PendingActions';
import Parking from './Pages/Parking';
import FrontDeskPage from './Pages/FrontDeskPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/arriving" element={<InOut />} />
      <Route path="/pendingactions" element={<PendingActions />} />
      <Route path='/park' element={<Parking/>}/>
      <Route path='forms' element={<FrontDeskPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
