import React, { Component } from 'react';

import Content from './content';
import Scroller from './scroller'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollDist: 'about',
      lastScrollTime: 0,
      yScroll: [0,"down"],
      projectFilter: ['Full Stack'],
      hiddenSection: ['about','skills', 'education', 'contact']
    };
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

  getScrollDirection = (prevYPos) =>{
    if(window.pageYOffset < prevYPos){
      return "up"
    }
    if(this.state.lastScrollTime < 2){//just scrolled keep scroller for another 2 secs
      return "up"
    }
    return "down"
  }

  handleScroll = () => {
    const yScrollCopy=[...this.state.yScroll]
    yScrollCopy[1] = this.getScrollDirection(yScrollCopy[0])
    yScrollCopy[0] = window.pageYOffset
    this.setState({
      scrollDist: '',
      lastScrollTime: yScrollCopy[1] === "up" ? 0 : this.state.lastScrollTime,
      yScroll: yScrollCopy
    });
  }

  scrolltoSection(elem) {
    this.setState({
      scrollDist: elem,
      lastScrollTime: 0
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
          pageState={this.state}
          filterCallBack={d => this.resetFilter(d)}
          sectionHide={s => this.hideSection(s)}
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
