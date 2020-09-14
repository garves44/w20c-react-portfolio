import React from "react";
import { Link } from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";

const HeaderComponent = () => {
  return (
    <Layout>
      <Header
        className="header-color"
        title={
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            Jeremy Collins
          </Link>
        }
        scroll
      >
        <Navigation>
          <Link to="/aboutme">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </Navigation>
      </Header>
    </Layout>
  );
};

export default HeaderComponent;
