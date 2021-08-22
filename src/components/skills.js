import React from 'react';
import {SiRails, SiReact, SiRedux, SiPython, SiRuby, SiHtml5, SiCss3, SiPostgresql,
  SiJavascript, SiNpm, SiJquery, SiGithub, SiMongodb, SiNodeDotJs} from 'react-icons/si'

class Skills extends React.Component {

  render() {
    return (
      <div id="skills">
        <div id="skills-header">
          Skills  
        </div>
        <div id="skills-container">
          <div id="skills-text">
            I have experience in a wide variety of frontend and backend languages,  
            along with a background in consulting. This has allowed me to leverage my 
            problems solving skills with the technologies necessary to 
            create elegant and user friendly products.
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
      </div>
    )
  }
}

export default Skills