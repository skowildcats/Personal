import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <div id="nav-bar">
        <div>
          Jonathan Chen
        </div>

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
      </div>
    )
  }
}

export default NavBar