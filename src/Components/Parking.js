// import React, { useState, useEffect } from 'react';
// import './Parking.css'

// const Parking = () => {
//   const [ticketPrice, setTicketPrice] = useState(250);
//   const [selectedSeats, setSelectedSeats] = useState([]);
  
//   useEffect(() => {
//     updateSelectedCount();
//   }, [selectedSeats]);

//   const updateSelectedCount = () => {
//     const selectedSeatsCount = selectedSeats.length;
//     const totalPrice = selectedSeatsCount * ticketPrice;
//     document.getElementById('count').innerText = selectedSeatsCount;
//     document.getElementById('total').innerText = totalPrice;
//   };

//   const handleMovieChange = (e) => {
//     setTicketPrice(+e.target.value);
//     updateSelectedCount();
//   };

//   const handleSeatClick = (e) => {
//     if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
//       const seatIndex = selectedSeats.indexOf(e.target);
//       if (seatIndex > -1) {
//         const updatedSelectedSeats = [...selectedSeats];
//         updatedSelectedSeats.splice(seatIndex, 1);
//         setSelectedSeats(updatedSelectedSeats);
//       } else {
//         setSelectedSeats([...selectedSeats, e.target]);
//       }
//     }
//   };

//   return (
//     <div className="movie-container">
//       <label>Pick a movie: </label>
//       <select id="movie" onChange={handleMovieChange}>
//         <option value="250">Interstellar (Rs. 250)</option>
//         <option value="200">Kabir Singh (Rs. 200)</option>
//         <option value="150">Duniyadari (Rs. 150)</option>
//         <option value="100">Natsamrat (Rs. 100)</option>
//       </select>

//       <ul className="showcase">
//         <li>
//           <div className="seat"></div>
//           <small>N/A</small>
//         </li>
//         <li>
//           <div className="seat selected"></div>
//           <small>Selected</small>
//         </li>
//         <li>
//           <div className="seat occupied"></div>
//           <small>Occupied</small>
//         </li>
//       </ul>

//       <div className="container">
//         <div className="row">
//         <div className="seat"></div>
//         <div className="seat"></div>
//         <div className="seat"></div>
//         <div className="seat"></div>
//         <div className="seat"></div>
//         <div className="seat"></div>
//         <div className="seat"></div>
//         <div className="seat"></div>
//         </div>
//         <div className="row">
//         <div className="seat"></div>
//         <div className="seat"></div>
//         <div className="seat"></div>
//         <div className="seat occupied"></div>
//         <div className="seat occupied"></div>
//         <div className="seat"></div>
//         <div className="seat"></div>
//         <div className="seat"></div>
//       </div>
//       <div className="row">
//         <div className="seat"></div>
//         <div className="seat"></div>
//         <div className="seat"></div>
//         <div className="seat"></div>
//         <div className="seat"></div>
//         <div className="seat"></div>
//         <div className="seat occupied"></div>
//         <div className="seat occupied"></div>
//       </div>
//       <div className="row">
//         <div className="seat"></div>
//         <div className="seat"></div>
//         <div className="seat"></div>
//         <div className="seat"></div>
//         <div className="seat"></div>
//         <div className="seat"></div>
//         <div className="seat"></div>
//         <div className="seat"></div>
//       </div>
//       <div className="row">
//         <div className="seat"></div>
//         <div className="seat"></div>
//         <div className="seat"></div>
//         <div className="seat occupied"></div>
//         <div className="seat occupied"></div>
//         <div className="seat"></div>
//         <div className="seat"></div>
//         <div className="seat"></div>
//       </div>
//       <div className="row">
//         <div className="seat"></div>
//         <div className="seat"></div>
//         <div className="seat"></div>
//         <div className="seat"></div>
//         <div className="seat occupied"></div>
//         <div className="seat occupied"></div>
//         <div className="seat occupied"></div>
//         <div className="seat"></div>
//       </div>
//         {/* More rows... */}
//         <p className="text">
//           You have selected <span id="count">0</span> seats for the total price of Rs.{' '}
//           <span id="total">0</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Parking;

import React, { useState } from 'react';
import './Parking.css'

const Parking = () => {
  const [ticketPrice, setTicketPrice] = useState(250);
  const [selectedSeats, setSelectedSeats] = useState([]);
  

  const occupiedSeats = [4, 12, 17, 25];

  const handleMovieChange = (e) => {
    setTicketPrice(+e.target.value);
  };

  const handleSeatClick = (seatIndex) => {
    if (!selectedSeats.includes(seatIndex)) {
      setSelectedSeats([...selectedSeats, seatIndex]);
    } else {
      setSelectedSeats(selectedSeats.filter(index => index !== seatIndex));
    }
  };

  const generateSeats = () => {
  const seats = [];
  const totalRows = 5; // Assuming there are 5 rows

  for (let row = 0; row < totalRows; row++) {
    const seatRow = [];

    for (let seatNumber = 0; seatNumber < 8; seatNumber++) {
      const seatIndex = row * 8 + seatNumber;
      const isOccupied = occupiedSeats.includes(seatIndex);
      const isSelected = selectedSeats.includes(seatIndex);
      const seatClassName = isOccupied ? 'seat occupied' : isSelected ? 'seat selected' : 'seat';
      const clickHandler = isOccupied ? null : () => handleSeatClick(seatIndex);

      seatRow.push(
        <div
          key={seatIndex}
          className={seatClassName}
          onClick={clickHandler}
        ></div>
      );
    }

    seats.push(
      <div key={row} className="row">
        {seatRow}
      </div>
    );
  }

  return (
    <div className="seating">
      {seats}
    </div>
  );
};


  return (
    <div className="movie-container">
      <label>Pick a movie: </label>
      <select id="movie" onChange={handleMovieChange}>
        <option value="250">Interstellar (Rs. 250)</option>
        <option value="200">Kabir Singh (Rs. 200)</option>
        <option value="150">Duniyadari (Rs. 150)</option>
        <option value="100">Natsamrat (Rs. 100)</option>
      </select>

      <ul className="showcase">
        <li>
          <div className="seat"></div>
          <small>N/A</small>
        </li>
        <li>
          <div className="seat selected"></div>
          <small>Selected</small>
        </li>
        <li>
          <div className="seat occupied"></div>
          <small>Occupied</small>
        </li>
      </ul>

      <div className="container">
        <div className="row">
          {generateSeats()}
        </div>
        <p className="text">
          You have selected <span id="count">{selectedSeats.length}</span> seats for the total price of Rs.{' '}
          <span id="total">{selectedSeats.length * ticketPrice}</span>
        </p>
      </div>
    </div>
  );
};

export default Parking;
