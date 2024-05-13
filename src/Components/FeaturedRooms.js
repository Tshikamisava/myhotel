import React from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
import data from "../data";

const FeaturedRooms = () => {
  const featuredRooms = useSelector((state) => state.rooms?.featuredRooms || []);

  // Display only the first 3 rooms as featured rooms
  const FeaturedRooms = data.slice(0, 3);

  return (
    <section className="featured-rooms container">
      <Title title="Featured Rooms" />
      <div className="row">
        {FeaturedRooms.length > 0 ? (
          FeaturedRooms.map((room) => (
            <Room key={room.id} room={room} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </section>
  );
};

export default FeaturedRooms;
