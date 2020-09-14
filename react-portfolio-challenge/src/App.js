import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import AboutMe from "./components/AboutMe";
import FooterComponent from "./components/FooterComponent";
import { Content, Layout } from "react-mdl";

function App() {
  return (
    <Router>
      <Layout>
        <HeaderComponent />

        <Content>
          <Switch>
            <Route path="/" component={AboutMe}></Route>
          </Switch>
        </Content>

        <FooterComponent />
      </Layout>
    </Router>
  );
}

export default App;
