import React, { Component } from "react";
import "./main.css";
import Header from "./Components/Main/Header";
import Footer from "./Components/Main/Footer";
import {Switch, Route, BrowserRouter } from "react-router-dom";

import FiveDays from "./Components/FiveDays/FiveDays";
import OneDay from "./Components/OneDay/OneDay";

class App extends Component {

  
  render() {
    return (
      <BrowserRouter>
        <div className="App">

        <Header />
        
          <div className="container-fluid content-wrapper">

          <Switch>

            <Route exact path="/" component={FiveDays} />
            
            <Route path="/day/:date" component={OneDay} />

          </Switch>

          <Footer />
          </div>
          
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
