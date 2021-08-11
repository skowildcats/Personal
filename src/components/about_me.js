import React from 'react';

class AboutMe extends React.Component {
  componentDidMount() {
    let typeContent = ["<div> Hello World! </div>", "console.log(\"Hello World!\")", "print(\"Hello World!\")", "puts \"Hello World!\""]
    let i = 0
    document.getElementById("typerwriter-content").textContent = typeContent[i]
    document.getElementById("typerwriter-content").style.animation = "typing 5s steps(25, end) infinite, blink-caret .85s step-end infinite"
    setInterval(() => {
      i + 1 > 3 ? i = 0: i+=1
      document.getElementById("typerwriter-content").textContent = typeContent[i]
      console.log("changed")
      document.getElementById("typerwriter-content").style.animation = "typing 5s steps(25, end) infinite, blink-caret .85s step-end infinite"
    }, 5000);
  }

  render() {
    return (
      <div id="about-me">
        <div id="about-me-container">
          <div id="typewriter">
            <div id="typerwriter-content"></div>
          </div>
          <div id="about-me-content"> 
            <div id="picture">
              <img id="profile-pic" src={process.env.PUBLIC_URL + "/headshot.png"} alt="headshot" />
            </div>
            <div>
              <span>Hi, I'm Jon </span>
              <br/>
              I'm a full stack software engineer with a passion for problem solving
              looking to make an impact through beautiful and user-centric products.
              Learn more about my <span><a href="#skills">skills</a></span> and <span><a href="#projects">projects</a></span> below.
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe