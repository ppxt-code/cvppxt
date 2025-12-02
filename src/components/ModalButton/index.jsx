import { useState } from 'react';

export const ModalButton = ({ 
  buttonText = "le projet", 
  modalTitle = "Détails", 
  modalContent, 
  className = "" 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <button  className={`modalButton ${className}`}  onClick={openModal} >
        {buttonText}
      </button>
      {isOpen && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="modalClose" onClick={closeModal}>×</button>
            <div className="modalBody">
              <p className="modalTitle">{modalTitle}</p>
              <div className="modalText">{modalContent}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
