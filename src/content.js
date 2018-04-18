//for the content of the portfolio

import React, { Component } from 'react';
import * as Scroll from 'react-scroll';

import About from './contents/about';
import Projects from './contents/projects';
import Skills from './contents/skills';
import Education from './contents/education';
import Contact from './contents/contact';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: '',
      projectView: []
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.scrollpoint !== this.props.scrollpoint) {
      if (!this.props.scrollpoint) {
        return;
      }
      let off =
        this.props.addMargin === 'top left' || this.props.addMargin === 'top'
          ? -100
          : 0;
      var scroller = Scroll.scroller;
      scroller.scrollTo(this.props.scrollpoint, {
        duration: 1000,
        delay: 100,
        smooth: true,
        spy: true,
        offset: off // Scrolls to element + 50 pixels down the page
      });
    }
  }

  sectionHeader(section) {
    if (this.props.hidden.includes(section)) {
      return (
        <div
          id={section}
          className="sectiondiv"
          onClick={() => this.props.sectionHide(section)}
        >
          {section}
          <i className="far fa-arrow-alt-circle-down" />
        </div>
      );
    } else {
      return (
        <div
          id={section}
          className="sectiondiv"
          onClick={() => this.props.sectionHide(section)}
        >
          {section}
          <i className="far fa-arrow-alt-circle-up" />
        </div>
      );
    }
  }
  render() {
    return (
      <div
        id="content"
        className={this.props.addMargin}
        onClick={this.props.contract}
      >
        {this.sectionHeader('about')}
        <About hidden={this.props.hidden.includes('about')} />

        {this.sectionHeader('projects')}
        <Projects
          hidden={this.props.hidden.includes('projects')}
          projectFilter={this.props.projectFilter}
          filterCallBack={c => this.props.filterCallBack(c)}
        />

        {this.sectionHeader('skills')}
        <Skills hidden={this.props.hidden.includes('skills')} />

        {this.sectionHeader('education')}
        <Education hidden={this.props.hidden.includes('education')} />

        {this.sectionHeader('contact')}
        <Contact hidden={this.props.hidden.includes('contact')} />

        <p id="copyright">Dereje Getahun {'\u00A9'} 2018</p>
      </div>
    );
  }
}

export default Content;

/*
<About hidden={this.state.hiddenSection.includes("about")}/>
<Skills hidden={this.state.hiddenSection.includes("skills")}/>
*/
