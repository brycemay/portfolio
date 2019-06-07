import React from "react";
import "../App.css";
import Footer from "./Footer";
import Avatar from "../images/me.jpg.png";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 2em;
  text-align: right;
  color: black;
  margin: 15px;
  padding: 15px;
  font-family: 'Comfortaa', cursive;
`;

const Desc = styled.p`
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  color: black;
  text-align: right;
  opacity: .6;
`;

class Header extends React.Component {
  render() {
    return (
      <header className="background">
        <div className="hdr-cont">
          <img
            className="avatar"
            width={120}
            height={120}
            src={Avatar}
            alt=""
            
          />{" "}
          <Title>
            Hi, I'm <span Style="color: crimson">Bryce!</span> <br />
            <Desc>
            I'm in Love with Web Development <br />
            </Desc>
          </Title>
        </div>
        <Footer />
      </header>
    );
  }
}

export default Header;
