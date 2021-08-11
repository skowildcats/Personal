import React from 'react';
import "../stylesheets/application.scss";
import NavBar from "./nav_bar"
import AboutMe from './about_me';

const App = () => (
  <div id="app">
    <NavBar/>
    <div id="body">
      <AboutMe />
      <div id="skills">
        Skills
      </div>
      <div id="projects">
        Projects
      </div>
      <div>
        Contact
      </div>
    </div>
  </div>
);

export default App;