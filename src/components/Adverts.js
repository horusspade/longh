import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Article from './Article';
//Adverts Recieve props from store of type of advert
const Adverts  = () => (
    <ul>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );

  export default Adverts;