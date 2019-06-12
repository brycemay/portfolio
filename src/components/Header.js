import React from "react";
import "../App.css";
import Footer from "./Footer";
import Avatar from "../images/myavatar.JPG";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 2em;
  text-align: center;
  color: black;
  margin: 15px;
  margin-top: -10px;
  padding: 15px;
  font-family: 'Comfortaa', cursive;
  @media (max-width: 800px) and (min-width: 481px) {
    margin-top 4vw;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  color: black;
  text-align: center;
  opacity: 0.5;

`;

class Header extends React.Component {
  render() {
    return (
      <header className="background">
        <div className="hdr-cont">
          <img
            className="avatar"
            width={110}
            height={160}
            src={Avatar}
            alt=""
            
          />{" "}
          <Title>
            Hi, I'm <span Style="color: crimson">Bryce!</span> <br />
            <Desc>
            Web Developer <br />
            </Desc>
          </Title>
          
        </div>
        <Footer />
      </header>
    );
  }
}

export default Header;
