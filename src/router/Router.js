import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Article from "../components/Article";

const MyRouter = () => (
    <Router>
      <div>
      <Header/>
          <Route exact path="/" component={Article} />
     </div>
    </Router>
  );
  
  export default MyRouter;