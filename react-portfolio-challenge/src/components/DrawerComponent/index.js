import React from "react";
import { Navigation, Drawer } from "react-mdl";
import { Link } from "react-router-dom";

const DrawerComponent = () => {
  return (
    <Drawer
      title={
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          Jeremy Collins
        </Link>
      }
    >
      <Navigation>
        <Link to="/aboutme">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </Navigation>
    </Drawer>
  );
};

export default DrawerComponent;
