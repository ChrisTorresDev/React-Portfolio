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
        <p>Welcome to My Site</p>
      </div>
    </div>
  </Styles>
)