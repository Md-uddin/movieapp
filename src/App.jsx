import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";
import Footer from "./components/footer/footer";
import Header from "./components/header/Header";
import Home from "./components/home/home";
import movieDetail from "./components/moviedetail/movieDetail";
import pageNotFound from "./components/PageNotfound/pageNotFound";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Home}/>
                  <Route path="/movie/:ImdbID" component={movieDetail} />
                  <Route component={pageNotFound} />
            </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
