import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import coffee from '../assets/coffee.jpg';

const Styles = styled.div`

  .jumbo {
    padding-top: 150px;
    padding-bottom: 100px;
    background: url(${coffee}) no-repeat fixed;
    background-size: cover;
    background-position: center top;
    color: #ccc;
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
    padding-top: 0px;
    line-height: 0.5em;
  }

  hr {
    border-top: 1px solid #c50638;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <div className="text-center title">
          <h1 class="display-4">Hello, world!</h1>
          <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        </div>
        <hr class="my-4" />
        <div className="text-center sub-title">
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>
        </Container>
     </Jumbo>
   </Styles>
    )
    
