import React, { Component } from "react";
import "../App.css";
import styled from "styled-components";
import Layout from "../Layout";

import Reactlogo from "../images/reactlogo.png";
import Crud from "../images/crud.png";
import Nodelogo from "../images/nodejs.png";
import Htmllogo from "../images/htmllogo.png";
import Csslogo from "../images/css3logo.png";
import Mongologo from "../images/mongodb.png";
import Linkedinlogo from "../images/LinkedInLogo.png";
import Github from "../images/githublogo.png";

import Roll from "react-reveal/Roll";
import Mailto from "react-protected-mailto";
import { Link } from "react-scroll";

const Content = styled.p`
  color: black;
  font-size: 20px;
  margin-left: 425px;
  font-family: "Comfortaa", cursive;
  padding: 30px;
  @media (max-width: 480px) {
    font-size: 18px;
    margin-left: 0vw;
    padding: 5px;
  }
  @media ( max-width: 800px ) and ( min-width: 481px ) {
    margin-left: 0px;
  }
`;
const Welcome = styled.div`
  font-size: 40px
  margin-bottom: 10px;
  margin-top: 3em;  
  font-family: 'Baloo', cursive;
  @media (max-width: 480px) {
    font-size: 27px
    margin-bottom: -400px;
    margin-top: 60vh;  
  }

  @media ( max-width: 800px ) and ( min-width: 481px ) {
    margin-top: 500px;
  }
`;
const AbtMe = styled.div`
  margin-bottom: 15em;
  margin-top: 10em;
  @media (max-width: 480px) {
    margin-bottom: 15em;
    margin-top: 10em;
  }
`;

const Projs = styled.div`
  margin-bottom: 10em;
  margin-top: 10em;
  @media (max-width: 480px) {
    margin-bottom: 15em;
    margin-top: 10em;
  }
`;

const Exp = styled.div`
  margin-bottom: 20em;
  margin-top: 15em;
  @media (max-width: 480px) {

  }
`;

const Contact = styled.div`
  margin-top: 10em;
  margin-bottom: 10em;
  @media (max-width: 480px) {
    margin-top: 20em;
    margin-bottom: 20em;
  }
`;

export default class Main extends Component {
  render() {
    return (
      <div className="mainpage">
        <Content>
          <Welcome>
            {" "}
            <h1>
              {" "}
              <span Style="color: crimson">
                <Roll left cascade duration={2500}>
                  Welcome
                </Roll>{" "}
              </span>
              to my Portfolio
            </h1>
            <div class="container">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-170}
                duration={800}
              > 
                <a href="#about">
                  <div class="arrow" /> 
                </a>
              </Link>
            </div>
            <div id="full" />
          </Welcome>

          <ul className="ul">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-170}
              duration={300}
            >
              <li className="li">
                <a class="active" href="#about">
                  About
                </a>
              </li>{" "}
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-170}
              duration={300}
            >
              <li className="li">
                <a href="#projects">Projects</a>
              </li>
            </Link>
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-170}
              duration={300}
            >
              <li className="li">
                <a href="#skills">Skills</a>
              </li>
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-170}
              duration={300}
            >
              <li className="li">
                <a href="#contact">Contact</a>
              </li>
            </Link>
          </ul>

          <AbtMe id="about">
            <h1 className="mainheaders">About Bryce</h1>

            <p>
              I am a Full-Stack Web Developer, looking to expand my knowledge in
              the field. Still new, I'm trying to learn as much as I can and am
              looking forward to my future in web development.
              <span Text="underlined"> I'm a graduate</span> from the Helio
              Training Full-Stack Immersive Course in Salt Lake City, Utah.
            </p>

            <p>
              In early 2019 I decided to find a new career path, and I can't
              tell <br />
              you how intrigued and passionate I am with code. I love learning
              it and understanding how it all works and ties together. I code
              when <br /> in my freetime at home.
            </p>

            <p>
              I come from a construction background, but as you can <br /> tell
              I've made the the switch to the tech world. It's the best decision{" "}
              <br /> I've made. I'm originally from Ketchikan, Alaska and I have
              recently moved to Utah.
            </p>
          </AbtMe>

          <hr />

          <Projs id="projects">
            <h1 className="mainheaders">Projects</h1>

            <h6>ToDo List</h6>
            <p className="crudparagraph">
              {" "}
              For this project I used <br />
              react.js, Express, Node, <br />
              and MongoDB.
            </p>
            <a href="https://thawing-reaches-34753.herokuapp.com/">
              {" "}
              <img
                className="crudpic"
                src={Crud}
                alt=""
                height={200}
                width={250}
              />{" "}
            </a>
          </Projs>

          <hr />

          <Exp id="experience">
            <h1 className="mainheaders">Skills</h1>{" "}
            <img src={Reactlogo} alt="" width={170} height={120} />{" "}
            <img src={Nodelogo} alt="" width={170} height={120} />{" "}
            <img src={Mongologo} alt="" width={170} height={120} />{" "}
            <img src={Htmllogo} alt="" width={170} height={120} />
            <img src={Csslogo} alt="" width={170} height={120} />
          </Exp>
          <hr />
          <Contact id="contact">
            <h1 className="mainheaders"> Contact </h1>
            <p>
              Contact me with any questions or comments. I'd be happy to get
              back to you as soon as I can!
            </p>{" "}
            <p>
              Phone: 907-617-9895
              <br />
              Email:{" "}
              <Mailto
                email="bryce.may.8@hotmail.com"
                headers={{ subject: "Question from the website" }}
              />
            </p>
            <a href="https://www.linkedin.com/in/bryce-may/">
              <img className="socmedia" src={Linkedinlogo} alt="" />
            </a>
            <a href="https://www.github.com/brycemay/">
              <img className="socmedia" src={Github} alt="" />{" "}
            </a>
          </Contact>
        </Content>
        <Layout />
      </div>
    );
  }
}
