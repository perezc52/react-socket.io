import React, { useState } from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')

const UsernameModal = ({ isOpen, onRequestClose, onUsernameSubmit }) => {
  const [username, setUsername] = useState('');
  const [roomNumber, setRoomNumber] = useState('');

  const handleUsernameSubmit = () => {
    onUsernameSubmit(username, roomNumber);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Enter Username and Room Number</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Room Number (optional)"
        value={roomNumber}
        onChange={(e) => setRoomNumber(e.target.value)}
      />
      <button onClick={handleUsernameSubmit}>Submit</button>
    </Modal>
  );
};

export default UsernameModal;
