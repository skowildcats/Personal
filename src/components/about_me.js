import React from 'react';

class AboutMe extends React.Component {
  componentDidMount() {
    document.getElementById("typerwriter-content").textContent = "<div> Hello World! </div>"  
    document.getElementById("typerwriter-content").style.color = "transparent"   
    document.getElementById("typerwriter-content").style.textShadow = "none"  
    setTimeout(() => {
      let typeContent = ["<div> Hello World! </div>", "console.log(\"Hello World!\")", "print(\"Hello World!\")", "puts \"Hello World!\""]
      let i = 0
      document.getElementById("typerwriter-content").textContent = typeContent[i]
      document.getElementById("typerwriter-content").style.color = "#FFD580"
      document.getElementById("typerwriter-content").style.textShadow = "5px 5px #FA8D3E , 4.5px 4.5px #FA8D3E, 4px 4px #FA8D3E , 3.5px 3.5px #FA8D3E, 3px 3px #FA8D3E , 2.5px 2.5px #FA8D3E, 2px 2px #FA8D3E , 1.5px 1.5px #FA8D3E, 1px 1px #FA8D3E , .5px .5px #FA8D3E"
      document.getElementById("typerwriter-content").style.animation = "typing 5s steps(25, end) infinite, blink-caret .85s step-end infinite"
      setInterval(() => {
        i + 1 > 3 ? i = 0: i+=1
        document.getElementById("typerwriter-content").textContent = ""
        document.getElementById("typerwriter-content").style.animation = "none"
        document.getElementById("typerwriter-content").textContent = typeContent[i]
        document.getElementById("typerwriter-content").style.animation = "typing 5s steps(25, end) infinite, blink-caret .85s step-end infinite"
      }, 5000);
    }, 1400)
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
              {/* <div>
                <div>
                  Team Player
                </div>
              </div> */}
              <img id="profile-pic" src={process.env.PUBLIC_URL + "/headshot.png"} alt="headshot" />
            </div>
            <div>
              <div id="text-container">
                <span>Hi, I'm Jon. </span>
                <br/>
                I'm a full stack software engineer with a passion for problem solving.
                Looking to make an impact through beautiful and user-centric products.
                Learn about some of my <span><a href="#skills">skills</a></span> and <span><a href="#projects">projects</a></span> below.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe