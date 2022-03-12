import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  const tourList = tours.map((tour) => {
    return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
  });

  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>{tourList}</div>
    </section>
  );
};

export default Tours;
