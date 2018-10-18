import React from 'react';
import './Stat.scss';

const Stat = ({ label, value }) => (
  <div className="Stat">
    <div className="Stat__label">{label}</div>
    <div className="Stat__value" style={{ color: value < 0 && 'red' }}>{value}</div>
  </div>
);

export default Stat;
