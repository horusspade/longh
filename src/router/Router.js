import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "../components/Header";
import Article from "../components/Article";
import Jobs from "../components/Jobs";

const MyRouter = () => (
    <Router>
      <div>
      <Header/>
          <Route exact path="/" component={Article} />
          <Route exact path="/jobs" component={Jobs} />
     </div>
    </Router>
  );
  
  export default MyRouter;