import React from 'react'

function OptionPopUp({onClose}) {
    return (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={onClose}>
              &times;
            </span>
            <p>This is the popup content</p>
          </div>
        </div>
      );
}

export default OptionPopUp