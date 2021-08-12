import React from 'react';

class NavBar extends React.Component {
  // componentDidMount() {
  //   window.$("#nav-bar").hover(
  //     () => {
  //       document.getElementById("nav-bar").style.animation = ".75s open ease"
  //       setTimeout(() => {
  //         document.getElementById("nav-bar").style.width = "10vw"
  //         document.getElementById("nav-bar").style.animation = "none"
  //       }, 750);
  //     },
  //     () => {
  //       console.log("out")
  //       document.getElementById("nav-bar").style.animation = ".75s close ease"
  //       setTimeout(() => {
  //         document.getElementById("nav-bar").style.width = "5vw"
  //         document.getElementById("nav-bar").style.animation = "none"
  //       }, 750);
  //     }
  //   )
  // }

  render() {
    return (
      <nav id="nav-bar">
        <div>
          <button>
            About
          </button>
          <button>
            Skills 
          </button>
          <button>
            Projects
          </button>
        </div>
      </nav>
    )
  }
}

export default NavBar