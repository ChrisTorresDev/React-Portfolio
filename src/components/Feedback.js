import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  li {
    list-style-type: none;
  }

  .section {
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

export const Feedback = () => (
  <Styles>
    <Container className="text-center feedback">
      <h2>Client Feedback</h2>
      <hr />
      <div className="section">
        <p>"Comment"</p>
        <h5>client</h5>
        <hr />
        <p>"Comment"</p>
        <h5>client</h5>
      </div>
    </Container>
  </Styles>
)

