import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`

.container {
}

.head {
  margin-top: 5em;
  background-color: #3B93FF;
}

.skill {
  background-color: #3B93FF;
  list-style-type: none;
}

#links {
  margin-top: 5em;
}
`;

export const Resume = () => (
  <Styles>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-sm-8 text-center head">
          <h1>Chris Torres</h1>
          <hr />
          <h3>Software Developer</h3>
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
        <div className="col-sm-8">
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
        <div className="col-sm-4 skill">
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