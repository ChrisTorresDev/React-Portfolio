import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  #about {
    padding-top: 3em;
  }

  hr {
    border-top: 1px solid #962D3E;
  }
`;

export const About = () => (
  <Styles>
    <div className="container" id="about">
      <h2>About</h2>
      <hr />
      <p>Reasons Why you should choose me:</p>
      <ol>
        <li>Coming soon</li>
      </ol>
    </div>
  </Styles>
)
