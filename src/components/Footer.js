import React from "react";
import styled from "styled-components";
import Github from "../images/githublogo.png";

const Title = styled.h2`
  font-size: 0.8em;
  text-align: center;
  color: white;
  margin-top: 13em;
  @media (max-width: 800px) and (min-width: 481px) {
    margin-top 30vw;
  }
`;

class Footer extends React.Component {
  render() {
    return (
      <header>
        <div>
          <Title>
            © Bryce May 2019 <br />Portfolio made with React.JS <br />
            
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
