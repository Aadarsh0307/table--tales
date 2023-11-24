import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Dashboard.css';
import AdminProfile from './AdminProfile';
import RestaurantForm from './RestaurantForm';

const restaurants = {
  background: `url(${process.env.PUBLIC_URL}/profile-background.jpg)`,
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'row',
};

const contentArray = [
  {
    id: 1,
    name: 'Content 1',
  },
  {
    id: 2,
    name: 'Content 2',
  },
  {
    id: 3,
    name: 'Content 3',
  },
];


const AdminRestoContainer = ({ content }) => {
  return (
    <Link to={`/booking-list/1`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="content-card-container">
        <div className="content-card" style={restaurants}>
          <div className="card-body">
            <div className="content-text">{content}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const pageStyle = {
  background: `url(${process.env.PUBLIC_URL}/admindashboard.jpg)`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const Dashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.classList.remove('modal-open');
  };

  const navigate = useNavigate();

  const handlingLogout = () => {
    const isConfirmed = window.confirm('Are you sure you want to log out?');

    if (isConfirmed) {
    alert('Logging out...');

    navigate('/'); // Redirect to home page after logout
    }
  };


  const handleAddRestoClick = () => {
    openModal();
  };

  return (
    <div className="admin-page-container" style={pageStyle}>
      <AdminProfile />
      <div className="admin-heading">Your Restaurants</div>
      <div className="admin-container">
        {contentArray.map((content, index) => (
          <AdminRestoContainer key={index} content={content.name} />
        ))}
        <div className="admin-card" onClick={openModal} style={{ width: '200px' }}>
          <button className="add-restro-button">+</button>
        </div>
      </div>
      {modalIsOpen && <RestaurantForm closeModalProp={closeModal} />}
      <div className="Logout-ButtonContainer">
        <button onClick={handlingLogout} className="Logout-Button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;