import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`

.container {
  box-shadow: 3px 3px 5px 6px #ccc;
  background-color: #d4d4d4; 
}

.head {
  padding-top: 5em;
  padding-bottom: 5em;
  background-color: #929292;
}

.skill {
  background-color: #979C9C;
  list-style-type: none;
  padding-left: 3em;
}

#links {
}

.details {
  padding-top: 3em;
  padding-left: 3em;
}

hr {
  border-top: 1px solid #962D3E;
  width: 50%;
}
`;

export const Resume = () => (
  <Styles>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-sm-8 text-center head">
          <h1>Chris Torres</h1>
          <hr />
          <h3>Software Engineer</h3>
        </div>
        <div className="col-sm-4 text-center" id="links">
          <a href="mailto:ctorresdevelop@gmail.com">ctorresdevelop@gmail.com</a>
          <br />
          <a href="http://christorresdev.com/">christorresdev.com</a>
          <br />
          <a href="https://github.com/ChrisTorresDev">GitHub Repository</a>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8 details">
          <h4>EXPERIENCE</h4>
          <br />
          <h5>SeaWorld, San Diego — Diver</h5>
          <h6>June 2019 - PRESENT</h6>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p>
          <br />
          <h5>Independent Dive Professional, Thailand/Roatan — PADI Open Water Dive Instructor</h5>
          <h6>October 2017 - January 2018</h6>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</p>
        </div>
        <div className="col-sm-4 details skill">
          <h4>Skills</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </div>
    </div>
  </Styles >
)