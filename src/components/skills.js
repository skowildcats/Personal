import React from 'react';
import {SiRails, SiReact, SiRedux, SiPython, SiRuby, SiHtml5, SiCss3, SiPostgresql,
  SiJavascript, SiNpm, SiJquery, SiGithub, SiMongodb, SiNodeDotJs} from 'react-icons/si'

class Skills extends React.Component {

  render() {
    return (
      <div id="skills">
        <div id="skills-text">
          I'm a full stack software engineer with a passion for problem solving
          looking to make an impact through beautiful and user-centric products.
          Learn more about my skills and projects below.
        </div>
        <div id="icon-container">
          <SiRuby />
          <SiRails />
          <SiReact />
          <SiRedux />
          <SiPython />
          <SiHtml5 />
          <SiCss3 />
          <SiPostgresql />
          <SiJavascript />
          <SiJquery />
          <SiMongodb />
          <SiNpm />
          <SiGithub />
          <SiNodeDotJs />
        </div>
      </div>
    )
  }
}

export default Skills