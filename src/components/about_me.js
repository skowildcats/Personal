import React from 'react';

class AboutMe extends React.Component {
  componentDidMount() {
    let typeContent = ["<div> Hello World! </div>", "console.log(\"Hello World!\")", "print(\"Hello World!\")", "puts \"Hello World!\""]
    let i = 0
    document.getElementById("typerwriter-content").textContent = typeContent[i]
    document.getElementById("typerwriter-content").style.animation = "typing 5s steps(25, end) infinite, blink-caret .85s step-end infinite"
    setInterval(() => {
      i += 1
      document.getElementById("typerwriter-content").textContent = typeContent[i % 4]
      console.log("changed")
      document.getElementById("typerwriter-content").style.animation = "typing 5s steps(25, end) infinite, blink-caret .85s step-end infinite"
    }, 5000);
  }

  render() {
    return (
      <div id="about-me">
        <div id="about-me-container">
          <div id="picture">
            <img id="profile-pic" src={process.env.PUBLIC_URL + "/headshot.png"} alt="headshot" />
          </div>
          <div id="about-me-content">
            <div id="typewriter">
              <div id="typerwriter-content"></div>
            </div>
            <div>
              I'm Jon,
              <br/>
              blurp heresoftware engineer looking to create beautiful and user-centric products
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe