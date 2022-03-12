import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  function removeTour(id) {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  }

  async function fetchTours() {
    const response = await fetch(url);
    const tours = await response.json();
    setLoading(false);
    setTours(tours);
  }

  useEffect(() => {
    fetchTours();
  }, []);
  if (loading === true) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h4>No Tours Left</h4>
          <button className="btn" onClick={() => fetchTours()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
