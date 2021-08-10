import React from 'react';
import "../stylesheets/application.scss";
import NavBar from './nav_bar/nav_bar';

const App = () => (
  <div id="app">
    <NavBar/>
    <div id="body">
      Hello
    </div>
    <div>
      Test
    </div>
  </div>
);

export default App;