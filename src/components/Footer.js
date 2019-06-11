import React from "react";
import styled from "styled-components";
import Github from "../images/githublogo.png";

const Title = styled.h2`
  font-size: 0.8em;
  text-align: center;
  color: white;
  margin-top: 13em;
`;

class Footer extends React.Component {
  render() {
    return (
      <header>
        <div>
          <Title>
            © Bryce May 2019 <br />
            <a href="https://www.github.com/brycemay/">
              <img className="socmedia" src={Github} alt="" />{" "}
            </a>
          </Title>
        </div>
      </header>
    );
  }
}
export default Footer;
