import React from 'react';

const Shows = () => {
  return (
    <div>
      <h2>Upcoming Shows</h2>
      <div>
        <h3>Show 1</h3>
        <p>Location: City, Date: January 20, 2025</p>
        <a href="ticket-link">Buy Tickets</a>
      </div>
      <div>
        <h3>Show 2</h3>
        <p>Location: City, Date: February 15, 2025</p>
        <a href="ticket-link">Buy Tickets</a>
      </div>
      {/* Add more shows here */}
    </div>
  );
};

export default Shows;
