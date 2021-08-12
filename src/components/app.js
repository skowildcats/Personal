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
            <div id="header"></div>
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