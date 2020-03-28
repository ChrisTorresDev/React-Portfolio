import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import undrwater from '../assets/undrwater.jpg';

const Styles = styled.div`

  .jumbo {
    padding-top: 100px;
    padding-bottom:50px;
    background: url(${undrwater}) no-repeat fixed;
    background-size: cover;
    background-position: center;
    color: #fff;
    position: relative;
    z-index: -2;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute; 
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .sub-title {
    padding-top: .5em;
    line-height: 0.5em;
  }

  hr {
    border-top: 1px solid #15519c;
    width: 50%;
  }

  btn {
    color: #15519c;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <div className="text-center title">
          <h1 className="display-4">Chris Torres</h1>
          <p className="lead">Full Stack Software Developer</p>
        </div>
        <hr className="my-4" />
        <div className="text-center sub-title">
          <p>Working with you to solve problems.</p>
        </div>
      </Container>
    </Jumbo>
  </Styles>
)

