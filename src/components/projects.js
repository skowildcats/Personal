import React from 'react';

class Projects extends React.Component {
  render() {
    return (
      <div id="projects">
        <div id="project-header">
          Projects
        </div>
        <div id="comfortbnb">
          <div id="comfortbnb-container">
            <div id="img-container">
              <img id="profile-pic" src={process.env.PUBLIC_URL + "/comfortbnb.png"} alt="headshot" />
            </div>
            <div id="description-container">
              <div id="projects-header">
                ComfortBnb
                <div>
                  Full Stack Clone of AirBnB
                </div>
                <div id="full-links">
                  <a href="https://github.com/skowildcats/ComfortBnB" target="_blank">Github Repo</a>
                  <a href="https://comfortbnb.herokuapp.com/?#/" target="_blank">Live Link</a>
                </div>
              </div>
              <div id="technologies">
                <div>
                  React/Redux
                </div>
                <div>
                  Ruby on Rails
                </div>
                <div>
                  PostgreSQL
                </div>
                <div>
                  Google Maps API
                </div>
              </div>
              <div id="transition-links">
                  <a href="https://github.com/skowildcats/ComfortBnB" target="_blank">Github Repo</a>
                  <a href="https://comfortbnb.herokuapp.com/?#/" target="_blank">Live Link</a>
              </div>
            </div>
          <div>
            </div>
          </div>
        </div>
        <div id="moneta">
          <div id="moneta-container">
            <div id="img-container">
              <img id="profile-pic" src={process.env.PUBLIC_URL + "/moneta.png"} alt="headshot" />
            </div>
            <div id="description-container">
              <div id="projects-header">
                Moneta
                <div>
                  Single Page Interactive Stock Market Demo
                </div>
                <div id="full-links">
                  <a href="https://github.com/skowildcats/Moneta" target="_blank">Github Repo</a>
                  <a href="https://skowildcats.github.io/Moneta/" target="_blank">Live Link</a>
                </div>
              </div>
              <div id="technologies">
                <div>
                  Javascript
                </div>
                <div>
                  HTML Canvas
                </div>
                <div>
                  Chart.js
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="wabbit">
          <div id="wabbit-container">
            <div id="img-container">
              <img id="profile-pic" src={process.env.PUBLIC_URL + "/wabbit.png"} alt="headshot" />
            </div>
            <div id="description-container">
              <div id="projects-header">
                Wabbit
                <div>
                  A data-driven task organization app
                </div>
                <div id="full-links">
                  <a href="https://github.com/skowildcats/Wabbit" target="_blank">Github Repo</a>
                  <a href="https://wabbitask.herokuapp.com/#/" target="_blank">Live Link</a>
                </div>
              </div>
              <div id="technologies">
                <div>
                  MongoDB
                </div>
                <div>
                  Express.js
                </div>
                <div>
                  React/Redux
                </div>
                <div>
                  Node.js
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects