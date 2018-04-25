import React, { Component } from 'react';

import Content from './content';
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addmenu: false,
      scrollDist: 'about',
      lastScrollTime: 0,
      yScroll: [0,"down"],
      projectFilter: ['Full Stack'],
      hiddenSection: ['about','skills', 'education', 'contact']
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollUp = this.scrollUp.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.Interval = setInterval(() => {
      //start timer interval update every sec
      this.setState({
        lastScrollTime: this.state.lastScrollTime + 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    clearInterval(this.Interval);
  }

  handleScroll() {
    const yScrollCopy=[...this.state.yScroll]
    yScrollCopy[1] =  window.pageYOffset < yScrollCopy[0] ? "up" : "down"
    yScrollCopy[0] = window.pageYOffset
    this.setState({
      scrollDist: '',
      lastScrollTime: 0,
      yScroll: yScrollCopy
    });
  }
  scrollUp() {
    //must refactor
    const allSections = [
      'containAbout',
      'containProjects',
      'containSkills',
      'containEducation',
      'containContact'
    ];
    const expandedSections = allSections.filter(s => {
      //filter out unexpanded sections
      return document.getElementById(s);
    });
    if (!expandedSections.length) {
      return;
    } //all sections collapsed
    let filteredSections = expandedSections.filter(section => {
      //filter out sections outside of viewport
      let boundingBox = document
        .getElementById(section)
        .getBoundingClientRect();
      let bottom = boundingBox.bottom;
      let top = boundingBox.top;
      return !(bottom < 0 || top > window.innerHeight);
    });

    //sometimes there is only one section in viewport if no two sections overlap, always use the last element in array
    let ans = filteredSections[filteredSections.length - 1]
      .split('contain')[1]
      .toLowerCase();

    let beforeScrollBounding = document
      .getElementById(filteredSections[filteredSections.length - 1])
      .getBoundingClientRect();

    let contentBox = document.getElementById('content').getBoundingClientRect();

    if (beforeScrollBounding.top > 200 && beforeScrollBounding.top < 202) {
      //already scrolled up(100 = section heading height, 75 main header height)
      this.hideSection(ans); //if already scrolled up just hide
    } else if (contentBox.bottom <= window.innerHeight + 1) {
      this.hideSection(ans);
    } else {
      this.scrolltoSection(ans);
    }
  }
  scrolltoSection(elem) {
    this.setState({
      scrollDist: elem
    });
  }
  hideSection(toHide) {
    let currentlyHidden = [...this.state.hiddenSection];
    if (currentlyHidden.includes(toHide)) {
      //unhide
      const indexOfHidden = currentlyHidden.findIndex(s => toHide === s);
      currentlyHidden = [
        ...currentlyHidden.slice(0, indexOfHidden),
        ...currentlyHidden.slice(indexOfHidden + 1)
      ];
      this.scrolltoSection(toHide);
    } else {
      //hide again
      currentlyHidden = [...currentlyHidden, toHide];
    }
    this.setState({
      hiddenSection: currentlyHidden
    });
  }
  resetFilter(pf) {
    /*note this promise causes a warning -->
    bundle.js:621 Warning: Can only update a mounted or mounting component. This usually means you called setState, replaceState, or forceUpdate on an unmounted component. This is a no-op.
    Please check the code for the Content component.
    */
    return new Promise((resolve, reject) => {
      this.setState(
        {
          projectFilter: pf
        },
        () => {
          resolve(this.state.projectFilter);
        }
      );
    });
  }
  controlScroll() {
    if (this.state.hiddenSection.length === 5 || this.state.lastScrollTime > 2 || this.state.yScroll[1]==="down") {
      return null;
    }
    const scrollerButton = (
      <div className="scroller" onClick={this.scrollUp}>
        <i className="fas fa-arrow-alt-circle-up" />
      </div>
    );

    return scrollerButton;
  }
  render() {
    return (
      <div id="Holder">
        <div id="menu" className="collapsed">
          <div className="collapsed contents">
            <h2 className="name">Dereje Getahun</h2>
            <h4 className="minor">Full Stack Web Development Portfolio</h4>
          </div>
        </div>
        <Content
          addMargin="top"
          scrollpoint={this.state.scrollDist}
          projectFilter={this.state.projectFilter}
          filterCallBack={d => this.resetFilter(d)}
          sectionHide={s => this.hideSection(s)}
          hidden={this.state.hiddenSection}
        />
        {this.controlScroll()}
      </div>
    );
  }
}

export default Menu;
