import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import "./App.scss";
import { Helmet } from "react-helmet";

class App extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Apurv Deshpande</title>
        </Helmet>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/resume" component={Resume}></Route>
            <Route path="/portfolio" component={Portfolio}></Route>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
