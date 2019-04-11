import React, { Component } from 'react';

class About extends Component {
  render() {
    if (this.props.hidden) {
      return (
        <div className="fadeout">
        </div>
      );
    }
    return (
      <div id="containAbout" className="fadein">
        <div className="aboutHolder">
          <p>
            Hi, I am Dereje, a formally trained Mechanical Engineer, 
            currency trader, self-taught full stack web developer
            and a life-long learner living in Washington, DC.
          </p>
          <p>
            While I am primarily focused on finding web development solutions
            using the MERN stack, I would also love to expand this focus and
            integrate it into areas of machine learning and data science in
            the future.
          </p>
          <p>
            The portfolio below describes the skill set I have acquired in the
            past few years while following my newly found passion of full stack 
            web development, take a look and <a onClick={this.props.showContact} href='#contact'>contact</a> me if you feel like you can 
            put some of these skills to use.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
