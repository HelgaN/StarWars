import React from 'react';
import './error-indicator.css';
import icon from './death-star.svg';

const ErrorIndicator = () => {
  return (
    <div className="boom">
      {console.log(icon)}
      <p>BOOM! UNLOADED!</p>
      <img src={icon} alt="Error icon Death Star" />
    </div>
  );
};

export default ErrorIndicator;
