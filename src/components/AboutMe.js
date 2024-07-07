import React from "react";
import styled from "styled-components/macro";
import { useNav } from "../hooks/useNav";
import { Fade } from "react-awesome-reveal";
const StyledAboutMeWrapper = styled.section`
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const StyledAboutMe = styled.section`
  box-sizing: border-box;
  min-height: 100vh;
  width: 80%;
  /* border: 1px solid red; */
  margin: 0 auto;

  /* color: #404040; */
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 500px) {
    padding: 0 1.2rem;
  }
`;

const H1 = styled.h1`
  font-size: clamp(40px, 5.5vw, 60px);
  margin-bottom: 2rem;
  margin-top: 4rem;
  padding-top: 1rem;
  font-family: "Inter", sans-serif;
  @media (max-width: 500px) {
    margin-top: 4.5rem;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  @media (max-width: 913px) {
    flex-direction: column;
  }
`;
const StyledLeft = styled.div`
  /* border: 3px solid palegoldenrod; */
  width: 50%;
  @media (max-width: 913px) {
    width: 100%;
  }
`;
const StyledRight = styled.div`
  /* border: 3px solid green; */
  width: 50%;
  @media (max-width: 913px) {
    width: 100%;
  }
`;
const Article = styled.article`
  /* border: 3px solid purple; */
  line-height: 1.2;
  font-size: clamp(18px, 4vw, 22px);
  color: ${(props) => props.theme.lightText};
  letter-spacing: 0.8px;
  img {
    height: 20px;
    width: 20px;
    vertical-align: bottom;
    &:hover {
      height: 40px;
      width: auto;
      transition: height 0.4s ease-in-out;
    }
    &:not(:hover) {
      transition: height 0.2s ease-in-out;
    }
  }
`;
const H3Left = styled.h3`
  font-family: "Inter", sans-serif;
  margin: 1.5rem 0;
  font-size: clamp(10px, 5.5vw, 22px);
  padding: 1rem 3.8rem;
  padding-bottom: 0;

  @media (max-width: 913px) {
    font-size: clamp(10px, 5.5vw, 25px);
    text-align: center;
  }
  @media (max-width: 500px) {
    padding: 1rem 0;
  }
`;

const H3 = styled.h3`
  font-family: "Inter", sans-serif;
  margin: 1.5rem 0;
  font-size: clamp(10px, 5.5vw, 22px);
  padding: 1rem 3.8rem;
  padding-bottom: 0;

  &:nth-child(1) {
    font-size: clamp(20px, 3vw, 30px);
    text-align: center;
  }
`;
const StyledExp = styled.div`
  border-radius: 15px;
  padding: 1rem 2rem;

  @media (max-width: 913px) {
    padding: 0;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 500px) {
    padding: 0;
  }
`;

const StyledUl = styled.ul``;

const StyledLiContent = styled.div`
  max-width: 400px;
  padding: 1rem;
  border-radius: 10px;
  color: ${(props) => props.theme.text};
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  @media (max-width: 500px) {
    width: 95%;
    padding: 0.5rem;
  }
`;
const StyledLi = styled.li`
  padding-bottom: 2rem;
  border-left: 2px solid #abaaed;
  position: relative;
  padding-left: 20px;
  margin-left: 10px;
  font-family: "Roboto Mono", monospace;

  &:last-child {
    border: 0;
    /* border-left: 2px solid #abaaed; */
    padding-bottom: 0rem;
  }
  &:before {
    content: "";
    width: 15px;
    height: 15px;
    background: white;
    border: 1px solid #4e5ed3;
    box-shadow: 3px 3px 0px #bab5f8;
    box-shadow: 3px 3px 0px #bab5f8;
    border-radius: 50%;
    position: absolute;
    left: -10px;
    top: 0px;
  }
  letter-spacing: -0.5px;
  line-height: 1.5rem;
  div {
    font-weight: 500;
    font-size: 1.01rem;
  }

  p {
    font-weight: 400;
    font-size: 0.985rem;
    color: ${(props) => props.theme.lightText};
  }
  span {
    font-weight: 400;
    font-size: 0.9rem;
    color: ${(props) => props.theme.lightText};
  }

  @media (max-width: 500px) {
    margin-left: 0;

    div {
      font-size: 0.95rem;
    }
    p {
      font-size: 0.8rem;
    }
    span {
      font-size: 0.7rem;
    }
    &:last-of-type {
      div {
        font-size: 0.91rem;
      }
    }
  }
`;
const StyledLogosWrapper = styled.div`
  /* border: 1px solid red; */
  display: grid;
  /* padding-top: 8rem; */
  grid-template-columns: repeat(3, minmax(80px, 130px));
  grid-template-rows: repeat(4, 1fr);
  gap: 1.5rem;
  text-align: center;
  justify-content: center;
  align-items: end;

  a {
    text-decoration: none;
  }
`;
const StyledLogos = styled.div`
  padding: 0.8rem 0.5rem 0.5rem 0.5rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  /* box-shadow: rgb(0 0 0 / 10%) 0px 4px 20px; */
  opacity: 1;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: translateY(-3px) translateZ(0px);
  }

  img {
    width: 50px;
    height: 50px;
  }
  p {
    color: ${(props) => props.theme.text};
    margin-top: 0.5rem;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    letter-spacing: 0.5px;

    @media (max-width: 500px) {
      font-size: 0.8rem;
      letter-spacing: 0.2px;
    }
  }
`;

const AboutMe = () => {
  const aboutRef = useNav("About");

  return (
    <StyledAboutMeWrapper>
      <StyledAboutMe id="aboutContainer" ref={aboutRef}>
        <div style={{ position: "relative" }}>
          <H1>About Me</H1>

          <StyledContainer>
            <StyledLeft>
              <Fade cascade triggerOnce>
                <Article>
                  I&apos;m a front-end developer from Sikandrabad UP, India.
                  <br />I enjoy turning complex problems into simple, beautiful
                  and intuitive designs.
                </Article>
                <Fade delay={300} triggerOnce>
                  <H3Left
                    aria-label="Experience and Education"
                    aria-level="1"
                    title="Experience and education"
                  >
                    Experience &amp; Education
                  </H3Left>
                </Fade>
                <StyledExp>
                  <StyledUl>
                    <StyledLi>
                      <Fade delay={1150} triggerOnce>
                        <StyledLiContent>
                          <div>Frontend Intern</div>
                          <p>Yuwaiting Technologies Pvt. Ltd</p>
                          <span>Nov 2021- Apr 2022</span>
                        </StyledLiContent>
                      </Fade>
                    </StyledLi>
                    <StyledLi>
                      <Fade delay={1350} triggerOnce>
                        <StyledLiContent>
                          <div>HIMT Group Of Institutions</div>
                          <p>Master of Computer Application</p>
                          <span>Aug 2022- Jul 2024 </span>
                        </StyledLiContent>
                      </Fade>
                    </StyledLi>
                    <StyledLi>
                      <Fade delay={1350} triggerOnce>
                        <StyledLiContent>
                          <div>J.S. Post Graduate College</div>
                          <p>Bachelor of Computer Application</p>
                          <span>Aug 2018- Jul 2021 </span>
                        </StyledLiContent>
                      </Fade>
                    </StyledLi>
                  </StyledUl>
                </StyledExp>
              </Fade>
            </StyledLeft>
            <StyledRight>
              <H3 aria-level="1" title="Skills" aria-label="Skills section">
                Skills
              </H3>
              <StyledLogosWrapper>
                <Fade cascade damping="0.25" triggerOnce>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <StyledLogos>
                      <img
                        src="images/html5.svg"
                        alt="html"
                        aria-label="html icon"
                        tabIndex="0"
                      />
                      <p>Html5</p>
                    </StyledLogos>
                  </a>
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <StyledLogos>
                      <img
                        src="images/css3.svg"
                        alt="css3"
                        aria-label="css3 icon"
                        tabIndex="0"
                      />
                      <p>CSS3</p>
                    </StyledLogos>
                  </a>
                  <a
                    href="https://www.javascript.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <StyledLogos>
                      <img
                        src="images/javascript.svg"
                        alt="javascript"
                        aria-label="javascript icon"
                        tabIndex="0"
                      />
                      <p>JavaScript</p>
                    </StyledLogos>
                  </a>
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <StyledLogos>
                      <img
                        src="images/react.svg"
                        alt="react"
                        aria-label="react icon"
                        tabIndex="0"
                      />
                      <p>React</p>
                    </StyledLogos>
                  </a>
                  <a
                    href="https://www.mongodb.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <StyledLogos>
                      <img
                        src="images/typescript.svg"
                        alt="mongodb"
                        aria-label="mongodb icon"
                        tabIndex="0"
                      />
                      <p>TypeScript</p>
                    </StyledLogos>
                  </a>

                  <a
                    href="https://sass-lang.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <StyledLogos>
                      <img
                        src="images/sass.svg"
                        alt="sass"
                        aria-label="sass icon"
                        tabIndex="0"
                      />
                      <p>Sass</p>
                    </StyledLogos>
                  </a>
                  <a
                    href="https://www.cplusplus.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <StyledLogos>
                      <img
                        src="images/material-ui.svg"
                        alt="mui"
                        aria-label="mui icon"
                        tabIndex="0"
                      />
                      <p>MUI</p>
                    </StyledLogos>
                  </a>
                </Fade>
              </StyledLogosWrapper>
            </StyledRight>
          </StyledContainer>
        </div>
      </StyledAboutMe>
    </StyledAboutMeWrapper>
  );
};

export default AboutMe;
