import React from 'react';

class Projects extends React.Component {
  render() {
    return (
      <div id="projects">
        <div id="comfortbnb">
          <div id="comfortbnb-container">
            <div id="img-container">
              <img id="profile-pic" src={process.env.PUBLIC_URL + "/comfortbnb.png"} alt="headshot" />
            </div>
            <div id="description-container">
              <div id="projects-header">
                ComfortBnb
                <div>
                  Full Stack Clone of AirBnB with Google Maps API Integration and CRUD functionalities
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
            <div>
              <div id="projects-header">
                Moneta
              </div>
            </div>
          </div>
        </div>
        <div id="wabbit">
          <div id="wabbit-container">
            <div id="img-container">
              <img id="profile-pic" src={process.env.PUBLIC_URL + "/wabbit.png"} alt="headshot" />
            </div>
            <div>
              <div id="projects-header">
                Wabbit
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects