import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './restaurantAddForm.css';

const RestaurantForm = ({ isOpen, closeModalProp }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    address: '',
    about: '',
    mobile: '',
    menu: '',
    category: 'veg', // default value
    cuisine: {
      northIndian: false,
      chinese: false,
      southIndian: false,
      italian: false,
      continental: false,
    },
    averagePrice: '',
  });

  useEffect(() => {
    // Open the modal when the component mounts
    if (isOpen) {
      setModalIsOpen(true);
    }
  }, [isOpen]);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    // Reset the form if needed
    setFormData({
      name: '',
      city: '',
      address: '',
      about: '',
      mobile: '',
      menu: '',
      category: 'veg',
      cuisine: {
        northIndian: false,
        chinese: false,
        southIndian: false,
        italian: false,
        continental: false,
      },
      averagePrice: '',
    });
    // Call the prop function to close the modal in the parent component
    closeModalProp();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        cuisine: {
          ...prevData.cuisine,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Close the modal
    closeModal();
  };

  useEffect(() => {
    // Open the modal when the component mounts
    openModal();
  }, []);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Restaurant Form"
      className="modal-container"
      overlayClassName="modal-overlay"
    >
      <div className="restaurant-form-wrapper">
        <form onSubmit={handleSubmit}>
          <label className="modal-label">
            Restaurant Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="modal-input"
            />
          </label>
          <label className="modal-label">
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="modal-input"
            />
          </label>
          <label className="modal-label">
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="modal-input"
            />
          </label>
          <label className="modal-label">
            About:
            <textarea
              name="about"
              value={formData.about}
              onChange={handleChange}
              className="modal-textarea"
            ></textarea>
          </label>
          <label className="modal-label">
            Mobile Number:
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="modal-input"
            />
          </label>
          <label className="modal-label">
            Menu:
            <input
              type="text"
              name="menu"
              value={formData.menu}
              onChange={handleChange}
              className="modal-input"
            />
          </label>
          <label className="modal-label">
            Category:
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="modal-select"
            >
              <option value="veg">Veg</option>
              <option value="nonVeg">Non-Veg</option>
            </select>
          </label>
          <label className="modal-label">
            Cuisine:
            <div className="cuisine-checkbox">
              <input
                type="checkbox"
                name="northIndian"
                checked={formData.cuisine.northIndian}
                onChange={handleChange}
              />
              <label>North Indian</label>
            </div>
            <div className="cuisine-checkbox">
              <input
                type="checkbox"
                name="chinese"
                checked={formData.cuisine.chinese}
                onChange={handleChange}
              />
              <label>Chinese</label>
            </div>
            <div className="cuisine-checkbox">
              <input
                type="checkbox"
                name="southIndian"
                checked={formData.cuisine.southIndian}
                onChange={handleChange}
              />
              <label>South Indian</label>
            </div>
            <div className="cuisine-checkbox">
              <input
                type="checkbox"
                name="italian"
                checked={formData.cuisine.italian}
                onChange={handleChange}
              />
              <label>Italian</label>
            </div>
            <div className="cuisine-checkbox">
              <input
                type="checkbox"
                name="continental"
                checked={formData.cuisine.continental}
                onChange={handleChange}
              />
              <label>Continental</label>
            </div>
          </label>
          <label className="modal-label">
            Average Price:
            <input
              type="text"
              name="averagePrice"
              value={formData.averagePrice}
              onChange={handleChange}
              className="modal-input"
            />
          </label>
          <button type="submit" className="modal-button">
  Submit
</button>
        </form>
        <button onClick={closeModal} className="close-button">
  X
</button>
      </div>
    </Modal>
  );
};

export default RestaurantForm;
