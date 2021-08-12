import React from 'react';
import "../stylesheets/application.scss";
import NavBar from "./nav_bar"
import AboutMe from './about_me';
import Skills from './skills';

const App = () => (
  <div id="app">
    {/* <NavBar/> */}
    <div id="body">
      <AboutMe />
      <Skills/>
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