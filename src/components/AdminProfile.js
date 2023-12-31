import React, { useState } from 'react';
import './AdminProfile.css';
function AdminProfile() {

    const handleEdit = () => {
      setIsEditing(true);
    };
  
    const handleSave = () => {
      // Make API calls to update the data on the backend with the new values
      // After successful updates, set setIsEditing(false);
      alert('Saving changes...');
      setUsername(newUsername);
      setEmail(newEmail);
      setPhoneNumber(newPhoneNumber);
      setIsEditing(false);
    };
  
    const handleCancel = () => {
      // Reset the new values and set editing to false
      alert('Canceling changes...');
      setNewUsername(username);
      setNewEmail(email);
      setNewPhoneNumber(phoneNumber);
      setIsEditing(false);
    };
  
    const handleProfilePictureChange = (e) => {
      const selectedFile = e.target.files[0];
      setSelectedProfilePicture(selectedFile);
      setProfilePicture(URL.createObjectURL(selectedFile));
    };
  
    const handleEditPhoto = () => {
      // Placeholder for handling the edit photo action
      alert('Editing profile photo...');
    };
    
    const [username, setUsername] = useState('Your Username');
    const [profilePicture, setProfilePicture] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
    const [email, setEmail] = useState('youremail@example.com');
    const [isEditing, setIsEditing] = useState(false);
    const [newUsername, setNewUsername] = useState(username);
    const [newEmail, setNewEmail] = useState(email);
    const [newPhoneNumber, setNewPhoneNumber] = useState(phoneNumber);
    const [selectedProfilePicture, setSelectedProfilePicture] = useState(null);
  
    return (
      <div className="AdminProfileContainer">
        <div className="AdminWhiteBackground">
          <h1>Admin Profile</h1>
  
          <div className="AdminAvatarUpload">
            <div className="AdminAvatarPreview" onClick={() => document.getElementById('fileInput') && document.getElementById('fileInput').click()}>
              {profilePicture ? (
                <img
                  src={profilePicture}
                  alt="Profile"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                  }}
                />
              ) : (
                <div className="AdminDefaultProfilePicture" />
              )}
            </div>
  
            {isEditing && (
              <div className="AdminAvatarEdit">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
                  id="fileInput"
                />
                <label htmlFor="fileInput" onClick={handleEditPhoto}></label>
              </div>
            )}
          </div>
  
          <div className="UserInfoContainer">
            <p>
              <strong>Username:</strong>{' '}
              {isEditing ? (
                <input
                  type="text"
                  value={newUsername}
                  onChange={(e) => setNewUsername(e.target.value)}
                  className="EditInput"
                />
              ) : (
                <span>{username}</span>
              )}
            </p>
  
            <p>
              <strong>Email:</strong>{' '}
              {isEditing ? (
                <input
                  type="text"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="EditInput"
                />
              ) : (
                <span>{email}</span>
              )}
            </p>
  
            <p>
              <strong>Phone Number:</strong>{' '}
              {isEditing ? (
                <input
                  type="text"
                  value={newPhoneNumber}
                  onChange={(e) => setNewPhoneNumber(e.target.value)}
                  className="EditInput"
                />
              ) : (
                <span>{phoneNumber}</span>
              )}
            </p>
          </div>
  
          <div className="AdminEditButtonContainer">
            {isEditing && (
              <>
                <button onClick={handleSave} className="SaveButton">
                  Save
                </button>
                <button onClick={handleCancel} className="CancelButton">
                  Cancel
                </button>
              </>
            )}
          {!isEditing && (
            <>
              <button onClick={handleEdit} className="EditButton">
                Edit Profile
              </button>
            </>
          )}
          </div>
        </div>
      </div>
    )
};
export default AdminProfile;