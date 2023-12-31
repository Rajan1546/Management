// import React from 'react';
// import './Docks.css'; 
// import Container from "@mui/material/Container";

// const Docks = () => {
//   return (
//     <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//     <div className="wrap">
//       <div className="tile">
//         <img src='https://5.imimg.com/data5/KE/IW/EM/GLADMIN-5311256/selection-249-500x500.png' alt="Tile 1" />
//         <div className="text">
//           <h1>Lorem ipsum.</h1>
//           <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
//           <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
//           <div className="dots">
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         </div>
//       </div>

//       <div className="tile">
//         <img src='https://5.imimg.com/data5/IY/AO/MY-35087935/aluminum-container-body.jpg' alt="Tile 2" />
//         <div className="text">
//           <h1>Lorem ipsum.</h1>
//           <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
//           <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
//           <div className="dots">
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         </div>
//       </div>

//       <div className="tile">
//         <img src='https://5.imimg.com/data5/LF/UD/MW/SELLER-70564270/container-truck-body.jpeg' alt="Tile 3" />
//         <div className="text">
//           <h1>Lorem ipsum.</h1>
//           <h2 className="animate-text">More lorem ipsum bacon ipsum.</h2>
//           <p className="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
//           <div className="dots">
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         </div>
//       </div>
//     </div>
//     </Container>
//   );
// }

// export default Docks;


import React from "react";
 // import "./Docks.css";Import your NewsCard.css file

const NewsCard = ({ tag, time, title, creator }) => {
  const cardStyles = `
    /* Your card styles here */
  `;

  return (
    <div className={`card card-container ${cardStyles}`}>
      <div className="card card-1">
        <div className="card-img"></div>
        <a href="" className="card-link">
          <div className="card-img-hovered"></div>
        </a>
        <div className="card-info">
          <div className="card-about">
            <a className={`card-tag ${tag}`}>{tag}</a>
            <div className="card-time">{time}</div>
          </div>
          <h1 className="card-title">{title}</h1>
          <div className="card-creator">
            by {creator}
          </div>
        </div>
      </div>
    </div>
  );
};

const Docks = () => {
  const newsData = [
    {
      tag: "Dock #1",
      time: "28/08/2023",
      title: "Stark Industries",
      creator: "Cersei Usmonov",
    },
    {
      tag: "Dock #2",
      time: "29/08/2023",
      title: "Golden Enterprises",
      creator: "Tyler Platt",
    },
    {
      tag: "Dock #3",
      time: "29/08/2023",
      title: "Faceless Co.",
      creator: "Jhon Doe",
    },
    {
      tag: "Dock #4",
      time: "29/08/2023",
      title: "Lannister Holdings",
      creator: "Ferrara Clifford",
    },
    {
      tag: "Dock #5",
      time: "29/08/2023",
      title: "Crystal Innovations",
      creator: "Harvey Roxie",
    },
    // Add more data entries here
  ];

  return (
    <div style={{display:'flex' ,flexWrap:'wrap' , justifyContent:'center' , marginTop:'7.5%' , backgroundColor:'EFF8FF'}}>
      {newsData.map((data, index) => (
        <NewsCard key={index} {...data} />
      ))}
    </div>
  );
};

export default Docks;
