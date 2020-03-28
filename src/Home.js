import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .section {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const Home = () => (
  <Styles>
    <div className="container">
      <h2>Welcome!</h2>
      <hr />
      <div className="section">
        <p>Hello, I'm a software developer based in San Diego, California. Keep scrolling to see my CV, projects, and contact information, or follow the links.</p>
      </div>
    </div>
  </Styles>
)