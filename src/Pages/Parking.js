import React from 'react';
import './Parking.css'; 
import Container from "@mui/material/Container";

const Parking = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
    <div className="wrap">
      <div className="tile">
        <img src='https://5.imimg.com/data5/KE/IW/EM/GLADMIN-5311256/selection-249-500x500.png' alt="Tile 1" />
        <div className="text">
          <h1>Lorem ipsum.</h1>
          <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
          <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className="tile">
        <img src='https://5.imimg.com/data5/IY/AO/MY-35087935/aluminum-container-body.jpg' alt="Tile 2" />
        <div className="text">
          <h1>Lorem ipsum.</h1>
          <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
          <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className="tile">
        <img src='https://5.imimg.com/data5/LF/UD/MW/SELLER-70564270/container-truck-body.jpeg' alt="Tile 3" />
        <div className="text">
          <h1>Lorem ipsum.</h1>
          <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
          <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
    </Container>
  );
}

export default Parking;
