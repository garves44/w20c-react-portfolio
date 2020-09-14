import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={AboutMe}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
