import React from 'react';

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