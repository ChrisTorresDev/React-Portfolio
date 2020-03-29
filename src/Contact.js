import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  #contact {
    padding-top: 5em;
  }
`;

export const Contact = () => (
  <Styles>
    <div className="container" id="contact">
      <h2>Contact Me</h2>
      <hr />
      <p>Chris Torres</p>
    </div>
  </Styles>
)