import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Article from './Article';

const Header  = () => (
  <nav>
     <ul>
  <li>
  <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/jobs">Jobs</Link>
  </li>
  <li>
    <Link to="/topics">Topics</Link>
  </li>
</ul>  </nav>
    
  );

  export default Header;