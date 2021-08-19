import React from 'react';
import "../stylesheets/application.scss";
import NavBar from "./nav_bar"
import AboutMe from './about_me';
import Skills from './skills';
import LoadingPage from './loading_page';
import Projects from './projects';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {loading: true}
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false})
      window.addEventListener('scroll', e => {
        if (window.$(window).scrollTop() > window.innerHeight / 2) {
          if (document.getElementById("back-to-top").style.display !== "block") {
            document.getElementById("back-to-top").style.animation = ".25s appear-opacity"
            setTimeout(() => {
              document.getElementById("back-to-top").style.display = "block"
            }, 250)
          }
        } 
        else {
          if (document.getElementById("back-to-top").style.display === "block") {
          document.getElementById("back-to-top").style.animation = ".25s appear-opacity-reverse"
          setTimeout(() => {
            document.getElementById("back-to-top").style.display = "none"
          }, 250)
          }
        }
      })
    }, 2250);
  }

  render() {
    if (this.state.loading) {
      return (
        <LoadingPage />
      )
    } else {
      return (
        <div id="app">
          <NavBar/>
          <div id="body">
            <div id="back-to-top">
              <a href="#">Back to top</a>
            </div>
            <div id="footer"></div>
            <AboutMe />
            <Skills/>
            <Projects />
            <div>
              Contact
            </div>
          </div>
        </div>
      )
    }
  }
};

export default App;