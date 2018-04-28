import React, { Component } from 'react';

class Scroller extends Component {
    constructor(props) {
        super(props);
        this.state = {  };

        this.scrollUp = this.scrollUp.bind(this)
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
          this.props.hideByScroller(ans); //if already scrolled up just hide
        } else if (contentBox.bottom <= window.innerHeight + 1) {
            this.props.hideByScroller(ans);
        } else {
            this.props.scrollTo(ans);
        }
      }

    controlScroll() {
        if (this.props.pageState.hiddenSection.length === 5 || 
            this.props.pageState.lastScrollTime > 2 || 
            this.props.pageState.yScroll[1]==="down") {
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
            <div>
                {this.controlScroll()}
            </div>
        );
    }
}

export default Scroller;