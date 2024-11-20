import React from "react"

export default function Main({card}) {
  const { title, location, googleMapsUrl, startDate, endDate, description, imageUrl } = card;
  return (
    <div className="card">
      <img
        src={`${imageUrl}`}
        height="168px"
        width="125px"
        className="travel-image"
      />
      <div className="text-container">
        <div>📍 {location}</div>
        <h1 className="location--title">{title}</h1>
        <p class="date"><strong>{startDate} - {endDate}</strong></p>
        <p class="description">{description}</p>
      </div>
    </div>
  );
}