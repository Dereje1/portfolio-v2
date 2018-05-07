//for the content of the portfolio

import React, { Component } from 'react';
import * as Scroll from 'react-scroll';

import About from './contents/about';
import Projects from './contents/projects';
import Skills from './contents/skills';
import Education from './contents/education';
import Contact from './contents/contact';

class Content extends Component {

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.pageState.scrollDist !== this.props.pageState.scrollDist) {
      if (!this.props.pageState.scrollDist) {
        return;
      }
      const off = -100 //compenstate for header block
      var scroller = Scroll.scroller;
      scroller.scrollTo(this.props.pageState.scrollDist, {
        duration: 500,
        delay: 100,
        smooth: true,
        spy: true,
        offset: off // Scrolls to element + 50 pixels down the page
      });
    }
  }

  sectionHeader(section) {
    if(section==='resume'){
      return (
        <div
          id={section}
          className="sectiondiv resume"
        >
          {section}
          <i className="fa fa-download" aria-hidden="true"
             title ="Download"
             onClick={()=>window.open("https://drive.google.com/file/d/1nqQ1IeXEBVQuVgxJSJfomNNjdmcT_cGe/view?usp=sharing")}
          />
        </div>
      );
    }
    return (
      <div
        id={section}
        className="sectiondiv"
        onClick={() => this.props.sectionHide(section)}
      >
        {section}
        {this.props.pageState.hiddenSection.includes(section) ? 
        <i className="fa fa-plus-square" aria-hidden="true"/> :
        <i className="fa fa-minus-square" aria-hidden="true"/>}
      </div>
    );
  }
  render() {
    return (
      <div
        id="content"
        onClick={this.props.contract}
      >
        {this.sectionHeader('about')}
        <About hidden={this.props.pageState.hiddenSection.includes('about')} />

        {this.sectionHeader('projects')}
        <Projects
          hidden={this.props.pageState.hiddenSection.includes('projects')}
          projectFilter={this.props.pageState.projectFilter}
          filterCallBack={c => this.props.filterCallBack(c)}
        />

        {this.sectionHeader('skills')}
        <Skills hidden={this.props.pageState.hiddenSection.includes('skills')} />

        {this.sectionHeader('education')}
        <Education hidden={this.props.pageState.hiddenSection.includes('education')} />

        {this.sectionHeader('contact')}
        <Contact hidden={this.props.pageState.hiddenSection.includes('contact')} />

        {this.sectionHeader('resume')}
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
