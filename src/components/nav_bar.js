import React from 'react';
import { BiHomeAlt } from 'react-icons/bi'
import { FiTool } from 'react-icons/fi'
import { AiOutlineProject } from 'react-icons/ai'
import { BsFileText } from 'react-icons/bs'

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
          <BiHomeAlt/>
          <FiTool />
          <AiOutlineProject />
          <BsFileText />
        </div>
      </nav>
    )
  }
}

export default NavBar