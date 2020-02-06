import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .section {
    padding-top: 30px;
    font-size: .75em;
    line-height: 0.5em;
  }
`;

export const Footer = () => (
  <Styles>
    <div className="text-center section">
        <p>ChrisTorresDev</p>
        <p>Inc.</p>
        <p>EMAIL: contact@christorresdev.com</p>
      </div>
  </Styles>
)