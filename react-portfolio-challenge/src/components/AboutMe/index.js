import React from "react";
import { Grid, Cell } from "react-mdl";

const AboutMe = () => {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Grid className="landing-grid">
        <Grid>
          <Cell col={6}>
            <img
              src="/images/jeremy.jpg"
              alt="Jeremy Profile Picture"
              style={{
                borderRadius: "50%",
                overflow: "visible",
                boxShadow:
                  "0 8px 24px 0 rgba(0, 0, 0, 0.5), 0 8px 24px 0 rgba(0, 0, 0, 0.5)",
                height: "300px",
                width: "300px",
                marginTop: "100px",
                border: "solid 3px black",
              }}
            />
          </Cell>
          <Cell col={5}>
            <p
              style={{
                color: "white",
                width: "75%",
                margin: "auto",
                paddingTop: "10em",
                paddingRight: "15em",
              }}
            >
              Hello, welcome to my portfolio website! I'm a professional
              software engineer with a lot of passion to code and improve my own
              personal skills. I'm going to learn as much as I can in the coding
              world and move into a job utilizing the skills I obtain. I love
              creating new apps, and staying up to speed with today’s market. I
              want to always produce the best code, so I can take pride in what
              I do. I am constantly learning new ways to code and getting new
              ideas on projects I want to do someday. Feel free to contact me!
            </p>
          </Cell>
        </Grid>

        <div className="banner-text">
          <h1>Full Stack Software Engineer</h1>

          <Grid className="skills-grid">
            <Cell className="skill-cell" col={2} offset={1}>
              <span className="image-wrapper">
                <img
                  src="/images/icons8-react-120.png"
                  alt="react logo"
                  className="skill-image"
                />
              </span>
              <div>
                <h4 className="skill-title">Frontend</h4>
                <p>React, Gatsby, WordPress</p>
              </div>
            </Cell>
            <Cell className="skill-cell" col={2}>
              <span className="image-wrapper">
                <img
                  src="/images/icons8-visual-studio-code-2019-240.png"
                  alt="vscode logo"
                  className="skill-image"
                />
              </span>
              <div>
                <h4 className="skill-title">Tools</h4>
                <p>VSCode, Git, Github, DBeaver, Robo 3T, Postman, Insomnia</p>
              </div>
            </Cell>
            <Cell className="skill-cell" col={2}>
              <span className="image-wrapper">
                <img
                  src="/images/leaf.png"
                  alt="leaf"
                  className="skill-image"
                />
              </span>
              <div>
                <h4 className="skill-title">Databases</h4>
                <p>MongoDB, MySQL, Firebase, Contentful</p>
              </div>
            </Cell>
            <Cell className="skill-cell" col={2}>
              <span className="image-wrapper">
                <img
                  src="/images/nodejs.png"
                  alt="Node logo"
                  className="skill-image "
                />
              </span>
              <div>
                <h4 className="skill-title">Backend</h4>
                <p>Node, ExpressJS, GraphQL, PHP</p>
              </div>
            </Cell>
            <Cell className="skill-cell" col={2}>
              <span className="image-wrapper">
                <img
                  src="/images/servers.png"
                  alt="Node logo"
                  className="skill-image "
                />
              </span>
              <div>
                <h4 className="skill-title">Servers</h4>
                <p>Netlify, Heroku, AWS EC2, AWS s3, Digital Ocean, Antsle</p>
              </div>
            </Cell>
          </Grid>
        </div>
      </Grid>
    </div>
  );
};

export default AboutMe;
