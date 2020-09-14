import React from "react";
import { Footer, Grid, Cell, FooterSection, FooterLinkList } from "react-mdl";

const FooterComponent = () => {
  return (
    <Footer
      size="mini"
      style={{ width: "100%" }}
      className="social-links footer-color"
    >
      <FooterSection type="right">
        <FooterLinkList>
          <a
            href="https://www.linkedin.com/in/jeremycollins44/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
          <a
            href="https://github.com/garves44"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.freecodecamp.org/garves"
          >
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCHWSg52EeOcRd1n8a8ZKJOg?view_as=subscriber"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>
        </FooterLinkList>
      </FooterSection>
      {/* LinkedIn
      <Grid className="footer-grid">
        <Cell col={3}>
          <a
            href="https://www.linkedin.com/in/jeremycollins44/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
        </Cell>
        <Cell col={3}>
          <a
            href="https://github.com/garves44"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
        </Cell>
        <Cell col={3}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.freecodecamp.org/garves"
          >
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>
        </Cell>
        <Cell col={3}>
          <a
            href="https://www.youtube.com/channel/UCHWSg52EeOcRd1n8a8ZKJOg?view_as=subscriber"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>
        </Cell>
      </Grid> */}
    </Footer>
  );
};

export default FooterComponent;
