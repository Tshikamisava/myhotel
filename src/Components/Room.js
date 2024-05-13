import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";

export default function Room({ room }) {
  if (!room || !room.images || !Array.isArray(room.images)) {
    // Handle the case where room data is missing or not in the expected format
    return <div>Error: Invalid room data</div>;
  }

  const { name, slug, images, price } = room;
  return (
    <div className="col-md-4 col-12 mx-auto p-2">
      <div className="card shadow-lg border-0 room">
        <div className="img-container">
          <img
            src={images[0]?.fields?.file?.url || defaultImg}
            alt="single room"
            className="img-fluid"
          />
          <div className="price-top">
            <h6>R {price}</h6>
            <p>per night</p>
          </div>
          <Link
            to={`/rooms/${slug}`}
            className="btn-warning room-link text-center"
          >
            Features
          </Link>
        </div>
        <p className="room-info">{name}</p>
        {/* Additional images */}
        <div className="room-images">
          {images.slice(1).map((image, index) => (
            <img
              key={index}
              src={image.fields?.file?.url || defaultImg}
              alt={`Room ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
