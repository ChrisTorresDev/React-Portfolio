import React from 'react';
import { Carousel } from 'react-bootstrap';
import moutains from '../assets/moutains.jpg';
import Elk from '../assets/elk.jpg';
import styled from 'styled-components';

const Styles = styled.div`

.item {
  min-height: 380px;
    margin-top: 56px;
    margin-bottom: 30px;
}

#img1 {
  background: url(${moutains});
  background-repeat: no;
}

#img2 {
  background: url(${Elk});
  background-repeat: no;
}

.tint {
  background: #23212187;
}

.carousel-cation {
  padding-top: 30px;
  top: 50%;
  transform: translateY(-50%);
  bottom: initial;
}

  img {
    min-height: 500px;
    margin-top: 56px;
    margin-bottom: 30px;
  }

  .logo {
    min-height: .5em;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  hr {
    border-top: 1px solid #c50638;
  }
`;

export const PicCarousel = () => (
  <Styles>
    <Carousel>
      <Carousel.Item id="img1">
        <div className="tint">
          <img alt="" />
        </div>
        <Carousel.Caption className="carousel-cation">
          <h1>ChrisTorresDev</h1>
          <hr />
          <p>Chris Torres Inc.</p>
          <p>contact@christorresdev.com</p>
          <p>San Diego</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item id="img2" className="tint">
        <div className="tint">
          <img alt="" />
        </div>
        <Carousel.Caption className="carousel-cation">
        <h1>ChrisTorresDev</h1>
          <hr />
          <p>Chris Torres Inc.</p>
          <p>contact@christorresdev.com</p>
          <p>San Diego</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Styles>
)
