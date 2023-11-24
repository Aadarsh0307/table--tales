import React from 'react';
import './ReservationCard.css';

const ReservationCard = ({ name, email, phoneNumber, numberOfPeople, table, date, time }) => {

  const handleEditBooking = () => {
    alert('Updating the current booking...');
  };

  const handlingCancelBooking = () => {
    alert('Canceling the current booking...');
  };

  return (
    <div className="reservation-card">
      <div className="card-body">
        <div className="detail">
          <span className="label">Name:</span>
          <span className="answer">{name}</span>
        </div>
        <div className="detail">
          <span className="label">Email:</span>
          <span className="answer">{email}</span>
        </div>
        <div className="detail">
          <span className="label">Phone Number:</span>
          <span className="answer">{phoneNumber}</span>
        </div>
        <div className="detail">
          <span className="label">Number of People:</span>
          <span className="answer">{numberOfPeople}</span>
        </div>
        <div className="detail">
          <span className="label">Table:</span>
          <span className="answer">{table}</span>
        </div>
        <div className="detail">
          <span className="label">Date:</span>
          <span className="answer">{date}</span>
        </div>
        <div className="detail">
          <span className="label">Time:</span>
          <span className="answer">{time}</span>
        </div>
        <div className="EditButtonContainer">
              <button onClick={handleEditBooking} className="EditBookingButton">
                Edit
              </button>
              <button onClick={handlingCancelBooking} className="CancelBooking-Button">
                Cancel
              </button>
            </div>
      </div>
    </div>
  );
};

export default ReservationCard;