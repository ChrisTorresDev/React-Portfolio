import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
  .section {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .btn {
    background-color: #FFB121;
    border: none;
  }
`;

export const Home = () => (
  <Styles>
    <div className="container">
      <div>
        <h2>Welcome!</h2>
        <hr />
        <p>Hello, I'm a software developer based in San Diego, California. Keep scrolling to see my Resume, projects, and contact information, or follow the links.</p>
      </div>
      <div className="text-center">
        <div className="row section">
          <div className="col  justify-content-center">
            <a className="btn btn-primary" href="/#resume" role="button">My Resume</a>
          </div>
          <div className="col">
            <a className="btn btn-primary" href="/#projects" role="button">My Projects</a>
          </div>
          <div className="col">
            <a className="btn btn-primary" href="/#contact" role="button">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  </Styles>
)