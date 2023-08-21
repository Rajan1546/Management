import React, { useState } from 'react';
import CarForm from '../Components/CarForm';
import VisitorsForm from '../Components/VisitorsForm';
import './FrontDeskPage.css';

const FrontDeskPage = () => {
  const [showCarForm, setShowCarForm] = useState(true);
  const [showVisitorsForm, setShowVisitorsForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    'https://img.freepik.com/free-photo/semi-truck-delivering-cargo-containers-row-generated-by-ai_24640-86114.jpg?t=st=1692297590~exp=1692301190~hmac=66dc7ebffd0d84aad8f15d8e1ca3df11f012fa99cb564e7b0323d1cb8cdcecc7&w=1380'
  );

  const handleCarFormClick = () => {
    setShowCarForm(true);
    setShowVisitorsForm(false);
    setSelectedImage(
      'https://img.freepik.com/free-photo/white-van-is-parked-driveway-with-word-ford-side_1340-32440.jpg?t=st=1692298048~exp=1692301648~hmac=ebabc3502bc968f85ebe5bde2038f1b27cc56bac1965b517e61c810fd7980bc4&w=1380'
    );
  };

  const handleVisitorsFormClick = () => {
    setShowCarForm(false);
    setShowVisitorsForm(true);
    setSelectedImage(
      'https://img.freepik.com/free-photo/front-view-young-beautiful-lady-white-shirt-black-jacket-working-with-documents-using-her-laptop-front-table-with-leaves-hanging_140725-15209.jpg?w=1060&t=st=1692297783~exp=1692298383~hmac=ea44997ef28029d1d7fea2071532ba1be6c36588e93d519fb8803fcf812fd14f' // Replace with the actual image URL
    );
  };

  return (
    <div className="frontdesk-page-container">
      <div className='form-nav'>
        <img
          src={'https://companieslogo.com/img/orig/GATI.NS-cf96bb0a.png?t=1604870862'}
          alt="Logo"
          className="logo"
        />
        <button className="logout-button">Logout</button>
      </div>
      <div className="form-container"> 
        <button className="car-button" onClick={handleCarFormClick}>Vehicle</button>
        <button className="visitor-button" onClick={handleVisitorsFormClick}>Visitor</button>
        
        {showCarForm && <CarForm />}
        {showVisitorsForm && <VisitorsForm />}
      </div>
      {/* <div className="image-container">
        <img
          src={selectedImage}
          alt="carfrontdeskimage"
          className="form-img"
        />
      </div> */}
    </div>
  );
};

export default FrontDeskPage;

