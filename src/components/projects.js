import React from 'react';

class Projects extends React.Component {
  render() {
    return (
      <div id="projects">
        <div id="comfortbnb">
          <div id="projects-header">
            ComfortBnb
          </div>
          <div id="comfortbnb-container">
            <div id="img-container">
              <img id="profile-pic" src={process.env.PUBLIC_URL + "/comfortbnb.png"} alt="headshot" />
            </div>
            <div>
              Content
            </div>
          </div>
        </div>
        <div id="moneta">
          <div id="projects-header">
            Moneta
          </div>
          <div id="moneta-container">
            <div id="img-container">
              <img id="profile-pic" src={process.env.PUBLIC_URL + "/moneta.png"} alt="headshot" />
            </div>
            <div>
              Content
            </div>
          </div>
        </div>
        <div id="wabbit">
          <div id="projects-header">
            Wabbit
          </div>
          <div id="wabbit-container">
            <div id="img-container">
              <img id="profile-pic" src={process.env.PUBLIC_URL + "/wabbit.png"} alt="headshot" />
            </div>
            <div>
              Content
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects