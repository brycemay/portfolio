import React, { Component } from "react";
import "../App.css";
import styled from "styled-components";
import Layout from "../Layout";

import Reactlogo from "../images/reactlogo.png";
import Crud from "../images/crud.png";
import Nodelogo from "../images/nodejs.png";
import Htmllogo from "../images/htmllogo.png";
import Csslogo from "../images/css3logo.png"
import Mongologo from "../images/mongodb.png";
import Linkedinlogo from "../images/LinkedInLogo.png";
import Github from "../images/githublogo.png";

import Zoom from "react-reveal/Zoom";
import Roll from "react-reveal/Roll";
import Mailto from "react-protected-mailto";
import { Link } from "react-scroll";


const Content = styled.p`
  color: grey;
  font-size: 20px;
  margin-left: 35vw;
  font-family: "Comfortaa", cursive;
  padding: 30px;
`;

const Projs = styled.div`
  margin-bottom: 10em;
  margin-top: 10em;
  font-size: 35px;
`;

const Exp = styled.div`
  margin-bottom: 10em;
  margin-top: 10em;
  font-size: 35px;
`;

const AbtMe = styled.div`
  margin-bottom: 15em;
  margin-top: 15em;
`;

const Welcome = styled.div`
font-size: 40px
  margin-bottom: 10em;
  margin-top: 5em;  
`;

const Contact = styled.div`
  margin-top: 10em;
  font-size: 25px;
  margin-bottom: 10em;
`;

export default class Main extends Component {
  render() {
    return (
      <div className="mainpage">
        <Content>
          <navbar className="navbar">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-170}
              duration={300}
            >
              <button className="myButton">About</button>
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-170}
              duration={300}
            >
              <button className="myButton">Projects</button>
            </Link>
            <Link
              activeClass="active"
              to="experience"
              spy={true}
              smooth={true}
              offset={-170}
              duration={300}
            >
              <button className="myButton">Skills</button>
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-200}
              duration={300}
            >
              <button className="myButton">Contact</button>
            </Link>
          </navbar>
          <Welcome>
            {" "}
            <h1>
              {" "}
              <span Style="color: crimson">
                <Roll left cascade>
                  Welcome
                </Roll>{" "}
              </span>
              to my Portfolio
            </h1>
          </Welcome>

          <AbtMe id="about">
            <Zoom right>
              <h1>About Bryce</h1>
            </Zoom>

            <p>
              I am a Full-Stack Web Developer, looking to learn more and expand
              my knowledge in the field. Still new, I'm trying to learn as much
              as I can and am looking forward to my future in web development.
            </p>

            <p>
              In early 2019 I decided to find a new career path, and I can't
              tell <br />
              you how intrigued and passionate I am with code. I love learning
              it and understanding how it all works and ties together. I do it
              as often <br /> as I can when I'm at home.
            </p>

            <p>
              I come from a construction background, but as you can probably{" "}
              <br /> tell, I've made the the switch to the tech world. It's the
              best decision <br /> I've made. I'm originally from Ketchikan,
              Alaska, and I have recently moved to Utah.
            </p>
          </AbtMe>

          <hr />

          <Projs id="projects">
            <Zoom right>
              <h1>Projects</h1>
            </Zoom>
            <h6>ToDo List</h6>
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
            <h1>Skills</h1>{" "}
            <img src={Reactlogo} alt="" width={170} height={120} />{" "}
            <img src={Nodelogo} alt="" width={170} height={120} />{" "}
            <img src={Mongologo} alt="" width={170} height={120} />{" "}
            <img src={Htmllogo} alt="" width={170} height={120} />
            <img src={Csslogo} alt="" width={170} height={120} />
          </Exp>
          <hr />
          <Contact id="contact">
            <h1> Contact </h1>
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
