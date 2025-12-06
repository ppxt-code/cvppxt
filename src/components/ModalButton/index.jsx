import { useState } from 'react';

export const ModalButton = ({ 
  buttonText = "le projet", 
  modalTitle = "Détails", 
  modalContent 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <button  className="modalButton" title="description du projet" onClick={openModal} >
        {buttonText}
      </button>
      {isOpen && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <div className="modalCloseDiv"><button className="modalClose" onClick={closeModal}>×</button></div>
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
