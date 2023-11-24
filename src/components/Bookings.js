import React from 'react';
import ReservationCard from './ReservationCard';
import './Bookings.css';

const Bookings = () => {
  return (
    <>
      <div className="booking-heading">Reservation Details</div>
      <div className="booking-container">
        <div className="row my-3">
          {[...Array(0)].map((_, index) => (
            <ReservationCard
              key={index}
              name="John Doe"
              email="john@example.com"
              phoneNumber="123-456-7890"
              numberOfPeople={4}
              table="Table 1"
              date="2023-11-06"
              time="18:00"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Bookings;