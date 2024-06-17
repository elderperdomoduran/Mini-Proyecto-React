import React from "react";

const Card = ({ stay }) => (
  <div className="card">
    {stay.superHost && <span className="superhost">Super Host</span>}
    <img src={stay.photo} alt={stay.title} />
    <div className="card-info">
      <span className="type">{stay.type}</span>
      <span className="rating">★ {stay.rating}</span>
    </div>
    <h3>{stay.title}</h3>
  </div>
);

export default Card;
