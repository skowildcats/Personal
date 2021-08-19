import React from 'react';
import { BiHomeAlt } from 'react-icons/bi'
import { FiTool } from 'react-icons/fi'
import { AiOutlineProject } from 'react-icons/ai'

class NavBar extends React.Component {
  componentDidMount() {
    const classes = document.body.classList;
    let timer = 0;
    window.addEventListener('resize', function () {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        else
            classes.add('stop-transitions');

        timer = setTimeout(() => {
            classes.remove('stop-transitions');
            timer = null;
        }, 100);
    });
  }

  render() {
    return (
      <nav id="nav-bar">
        <div id="button-container">
          <a href="#">
            <BiHomeAlt/>
            <div id="icon-text">
              Home
            </div>
          </a>
          <a href="#skills">
            <FiTool />
            <div id="icon-text">
              Skills
            </div>
          </a>
          <a href="#projects">
            <AiOutlineProject />
            <div id="icon-text">
              Projects
            </div>
          </a>
          <a id="resume" href={process.env.PUBLIC_URL + "/Jonathan_Chen_Resume.pdf"} target="_blank">
            <img id="resume-photo" src={process.env.PUBLIC_URL + "/Jonathan_Chen_Resume.png"} alt="resume">
            </img>
          </a>
        </div>
      </nav>
    )
  }
}

export default NavBar