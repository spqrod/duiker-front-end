import React, { useState, useEffect } from 'react';
import '../styles/whats-app-button.css';
import whatsAppIcon from "../images/whatsapp-green.png";

function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 2-second delay

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className={`whats-app-button-container ${isVisible ? 'visible' : ''}`}>
      <a className='link' href="https://wa.me/+260771708041" target="_blank" rel="noopener noreferrer">
        <img src={whatsAppIcon} alt="WhatsApp" />
      </a>
    </div>
  );
}

export default WhatsAppButton;