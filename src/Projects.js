import React from 'react';
import site from './assets/atsinc.jpg';
import weather from './assets/weatherapp.jpg';
import todo from './assets/vstda.jpg';


export const Projects = () => (
  <div className='container'>
    <h2>Projects</h2>
      <hr />
    <div class="card-group">
      <div class="card">
        <img className="card-img-top" src={site} alt="ATS Site" />
        <div class="card-body">
          <h5 class="card-title">ATS Inc.</h5>
          <p class="card-text">This Site was built using React.js</p>
        </div>
        <div class="card-body">
          <a href="http://atsincidaho.com" class="card-link">Visit Site</a>
        </div>
      </div>
      <div class="card">
        <img className="card-img-top" src={weather} alt="ATS Site" />
        <div class="card-body">
          <h5 class="card-title">Weather App</h5>
          <p class="card-text">description</p>
        </div>
        <div class="card-body">
          <a href="https://cthackathon.herokuapp.com" class="card-link">Weather App</a>
        </div>
      </div>
      <div class="card">
        <img className="card-img-top" src={todo} alt="To Do App" />
        <div class="card-body">
          <h5 class="card-title">Todo App</h5>
          <p class="card-text">Description</p>
        </div>
        <div class="card-body">
          <a href="https://ctvstda.herokuapp.com/" class="card-link">Todo App</a>
        </div>
      </div>
    </div>
  </div>
)