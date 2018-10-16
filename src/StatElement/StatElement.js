import React from 'react';

const StatElement = ({ label, value }) => (
  <div className="StatElement">
    <div className="StatElement__label">{label}</div>
    <div className="StatElement__value">{value}</div>
  </div>
);

export default StatElement;
