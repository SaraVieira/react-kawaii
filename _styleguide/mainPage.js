import React from 'react';
import { Grid, Row, Col } from 'joyent-react-styled-flexboxgrid';
import Flex from 'styled-flex-component';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  background: ${props => props.theme.blue};
  position: relative;
  padding-bottom: 10vw;
`;

const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
`;

const Li = styled.li`
  padding-right: 20px;

  a {
    color: ${props => props.theme.text};
    text-decoration: none;
    text-transform: uppercase;
  }
`;

const Heading = styled.h1`
  text-transform: uppercase;
  font-size: 24px;
  margin: 16px 0;
`;

const Img = styled.img`
  max-width: 50%;
  display: block;
  margin: auto;
`;

const Angle = styled.svg`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10vw;
`;

const H2 = styled.h2`
  text-align: center;
  margin: 0;
`;

const Star = styled.iframe`
  margin: auto;
  display: block;
  margin-top: 20px;
  width: 85px;
`;

const Header = () => (
  <HeaderStyled>
    <Grid>
      <Flex justifyBetween>
        <Heading>React Kawaii</Heading>
        <List>
          <Li>
            <a href="#">Docs</a>
          </Li>
          <Li>
            <a href="https://github.com/SaraVieira/react-kawaii">Github</a>
          </Li>
        </List>
      </Flex>
      <Img
        src="https://raw.githubusercontent.com/miukimiu/react-kawaii/master/docs/images/react-kawaii-logo%402x.png"
        alt="logo"
      />
      <H2>Cute svg Illustrations</H2>
      <Star
        src="https://ghbtns.com/github-btn.html?user=miukimiu&repo=react-kawaii&type=star&count=true"
        frameBorder="0"
        scrolling="0"
        width="170px"
        height="20px"
        title="Star on Gh"
      />
    </Grid>
    <Angle
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <polygon fill="white" points="0,100 100,0 100,100" />
    </Angle>
  </HeaderStyled>
);

export default () => <Header />;
