import React, { Component } from 'react';

class Education extends Component {

  render() {
    if(this.props.hidden){return null}
    return (
      <div id="containEducation" className="containers">
        <div className="schools">
          <div className="schooltitle">
            Purdue School of Engineering and Technology
          </div>
          <div className="locdate">
            Indianapolis, IN | Dec, 1998
          </div>
          <div className="field">
            Bachelor of Science (B.Sc.), Mechanical Engineering
          </div>
        </div>
        <div className="schools">
          <div className="schooltitle">
            Purdue School of Engineering and Technology
          </div>
          <div className="locdate">
            Indianapolis, IN | May, 2005
          </div>
          <div className="field">
            Master of Science (M.Sc.), Mechanical Engineering
          </div>
        </div>
        <div className="schools">
          <div className="schooltitle">
            freeCodeCamp
          </div>
          <div className="locdate">
            Web | Nov, 2017
          </div>
          <div className="field">
            Full Stack Development Certification, Computer Software Engineering
          </div>
        </div>
      </div>
    );
  }

}

export default Education;
