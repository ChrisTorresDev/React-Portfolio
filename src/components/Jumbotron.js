import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import undrwater from '../assets/undrwater.jpg';

const Styles = styled.div`

  .jumbo {
    background-color: #929292;
    font-weight: bold;
    color: white;
    padding-top: 5em;
  }

  .sub-title {
    padding-top: .5em;
    line-height: 0.5em;
  }

  hr {
    border-top: 1px solid #962D3E;
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
          <h3 className="lead">Software Engineer</h3>
        </div>
        <hr className="my-4" />
        <div className="text-center sub-title">
          <p>Working with you to solve problems.</p>
        </div>
      </Container>
    </Jumbo>
  </Styles>
)

