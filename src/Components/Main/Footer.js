import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <footer className="footer">
  <p>
    Made By: <a href="https://hamood.dev">HaMoOoOd25</a>
  </p>
  <p>
  </p><ul>
    <li>
      <Link to="https://github.com/HaMoOoOd25" className="fab fa-github fa-2x" aria-hidden="true" />
    </li>
    <li>
      <Link to="https://www.linkedin.com/in/HaMoOoOd25" className="fab fa-linkedin fa-2x" />
    </li>
  </ul>
  <p />
  <p>©Copyright 2020 HaMoOoOd25</p>
</footer>

  );
};

export default Header;
