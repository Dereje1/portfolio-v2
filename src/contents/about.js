import React, { Component } from 'react';

class About extends Component {
  render() {
    if (this.props.hidden) {
      return null;
    }
    return (
      <div id="containAbout" className="containers">
        <div className="aboutHolder">
          <p>
            Hi, I am Dereje, a formally trained Mechanical Engineer, a
            self-taught currency trader, an aspiring full stack web developer
            and a life-long learner living in Washington, DC.
          </p>
          <p>
            While I am primarily focused on finding web development solutions
            using the MERN stack, I would also love to expand this focus to
            include areas of machine learning and data science in the future.
          </p>
          <p>
            If you find that you can use any of the skills showcased in my
            portfolio below, feel free to contact me. You can be assured of my
            full commitment to use my extensive technical problem solving skills
            to provide a web development solution that is custom fit to your
            needs.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
