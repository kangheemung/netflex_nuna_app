import React from 'react';
import { Link } from 'react-router-dom';
import './Notfoundpage.style.css';

const Notfoundpage = () => {
  return (
    <div className="not-found_container">
      <div className="not-found">
        <h1>SORRY 😿</h1>
        <h3>we could't find that page</h3>
        <Link to="/">
          <button>Go to Main Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Notfoundpage;
