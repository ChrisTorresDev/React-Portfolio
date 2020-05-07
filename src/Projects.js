import React from 'react';
import site from './assets/atsinc.jpg';
import weather from './assets/weatherapp.jpg';
import todo from './assets/vstda.jpg';
import styled from 'styled-components';

const Styles = styled.div`
  .projects {
    padding-top: 5em;
  }

  .card-columns {
    padding-top: 1em;
  }
  
  .card {
    margin-bottom: 2em;
  }

  hr {
    border-top: 1px solid #962D3E;
  }
`;


export const Projects = () => (
  <Styles>
    <div className='container'>
      <div className="projects">
        <h2>Projects</h2>
        <hr />
        <div className="card-columns">
          <div className="card">
            <img className="card-img-top" src={site} alt="ATS Site" />
            <div className="card-body">
              <h5 className="card-title">ATS Inc.</h5>
              <p className="card-text">This Site was built using React.js</p>
              <a href="http://atsincidaho.com" className="card-link">Visit Site</a>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={weather} alt="ATS Site" />
            <div className="card-body">
              <h5 className="card-title">Weather App</h5>
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
              <a href="https://cthackathon.herokuapp.com" className="card-link">Weather App</a>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={todo} alt="To Do App" />
            <div className="card-body">
              <h5 className="card-title">Todo App</h5>
              <p className="card-text">Lorem ipsum dolor sit amet.</p>
              <a href="https://ctvstda.herokuapp.com/" className ="card-link">Todo App</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Styles>
)