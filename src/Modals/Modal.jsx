import React from 'react';

const Modal = ({ isOpen, winner, onClose }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>{winner ? `Winner: ${winner}` : 'It\'s a draw!'}</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
