import React, { Component } from 'react';

import Content from './content';
import Scroller from './scroller'
class App extends Component {
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
  
  render() {
    return (
      <div id="App">
        <div id="Header">
          <h2 className="name">Dereje Getahun</h2>
          <h4 className="minor">Full Stack Web Development Portfolio</h4>
        </div>
        <Content
          addMargin="top"
          scrollpoint={this.state.scrollDist}
          projectFilter={this.state.projectFilter}
          filterCallBack={d => this.resetFilter(d)}
          sectionHide={s => this.hideSection(s)}
          hidden={this.state.hiddenSection}
        />
        <Scroller 
          pageState={this.state} 
          hideByScroller={(section)=>this.hideSection(section)}
          scrollTo={(section)=>this.scrolltoSection(section)}
        />
      </div>
    );
  }
}

export default App;
