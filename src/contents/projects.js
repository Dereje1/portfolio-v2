import React, { Component } from 'react';

import { projectList } from './projectlist';
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: '',
      projectView: []
    };
  }
  componentDidMount() {
    this.runFilter(this.props.projectFilter);
    console.log('Projects Mounted! ', this.props.addMargin);
  }

  projectDetailBuild(details) {
    const detailList = details.map((detail, idx) => {
      return <li key={'det' + idx}>{detail}</li>;
    });
    return <ul className="detailbody">{detailList}</ul>;
  }

  activeProject(proj) {
    if (this.state.activeProject === proj) {
      this.setState({ activeProject: '' });
    } else {
      this.setState({ activeProject: proj });
    }
  }

  buildIcons(pid, iconList) {
    if (!iconList) {
      return;
    }
    const allIcons = iconList.map((i, idx) => {
      let iconLink = './images/icons/' + i + '.png';
      return (
        <img key={pid + idx} className="summaryicons" src={iconLink} alt={i} title={i}/>
      );
    });
    return <div className="iconholder">{allIcons}</div>;
  }

  runFilter(newState) {
    const filteredProjects = projectList.filter(project => {
      let flag = false;
      newState.forEach(pf => {
        if (project.tags.includes(pf)) {
          flag = true;
        }
      });
      return flag;
    });
    //filteredProjects.sort(() => (0.5 - Math.random()));
    this.setState({
      projectView: filteredProjects
    });
  }
  filterProjects(pfilter) {
    //const filterButtons = ['Full Stack','Front End','APIs & Microservices','React','D3','jQuery']
    let currentFilter = [...this.props.projectFilter];
    if (currentFilter.includes(pfilter)) {
      const indexOfFilter = currentFilter.findIndex(f => pfilter === f);
      currentFilter = [
        ...currentFilter.slice(0, indexOfFilter),
        ...currentFilter.slice(indexOfFilter + 1)
      ];
    } else {
      currentFilter = [...currentFilter, pfilter];
    }
    /*
    const condition = (currentFilter.length===1)&&(currentFilter[0]===pfilter)
    if((!currentFilter.length)) {
      //will not work with a single variabble assignment unless the array has 2 or more elements don't understand???
      //problem was with the async nature of set state , look at new promise in menu.js, investigate more
      const randIndex = Math.floor(Math.random()*filterButtons.length)
      //currentFilter=[filterButtons[randIndex]]
    }
    */
    this.props.filterCallBack(currentFilter).then(response => {
      this.runFilter(response);
    });
  }
  generateButtons() {
    if (this.props.hidden) {
      return null;
    }
    const filterButtons = [
      'Full Stack',
      'Front End',
      'APIs & Microservices',
      'React',
      'D3',
      'jQuery'
    ];
    const buttons = filterButtons.map(b => {
      if (this.props.projectFilter.includes(b)) {
        return (
          <button
            key={b}
            className="selected"
            onClick={() => this.filterProjects(b, filterButtons)}
          >
            {' '}
            {b} <i className="fa fa-times-circle" aria-hidden="true" />
          </button>
        );
      } else {
        return (
          <button key={b} onClick={() => this.filterProjects(b, filterButtons)}>
            {' '}
            {b}{' '}
          </button>
        );
      }
    });
    return <div className="filterbuttons">{buttons}</div>;
  }
  buildProjects() {
    const projects = this.state.projectView.map(project => {
      if (this.state.activeProject !== project.id) {
        return (
          <div key={project.id} className="project overview">
            <img
              className="projimg"
              src={project.imgLink}
              onClick={() => this.activeProject(project.id)}
              alt={project.title}
            />
            <div className="projdesc">
              <div className="projtitle">
                <p>{project.title}</p>{' '}
                <i
                  className="fa fa-cog"
                  aria-hidden="true"
                  onClick={() => this.activeProject(project.id)}
                />
              </div>
              <hr className="divider" />
              {this.buildIcons(project.id, project.icons)}
            </div>
          </div>
        );
      } else {
        const hostMessage = project.hosting ? (
          <p className="hosting">{project.hosting}</p>
        ) : null;
        return (
          <div key={project.id} className="project detail">
            <div className="detailtop">
              <p className="detailtop title">{project.summary}</p>
              <i
                className="fas fa-times"
                aria-hidden="true"
                onClick={() => this.activeProject(project.id)}
              />
            </div>
            {this.projectDetailBuild(project.details)}
            <hr className="divider" />
            <div className="detailbottom">
              <a href={project.projectLink} target="_blank">
                <i
                  className="fas fa-external-link-square-alt"
                  aria-hidden="true"
                />{' '}
              </a>
              {hostMessage}
              <a href={project.githubLink} target="_blank">
                <i className="fab fa-github-square" aria-hidden="true" />{' '}
              </a>
            </div>
          </div>
        );
      }
    });
    return projects;
  }

  render() {
    if (this.props.hidden) {
      return null;
    }
    return (
      <div id="containProjects" className="containers">
        {this.generateButtons()}
        <div id="holdprojects">{this.buildProjects()}</div>
      </div>
    );
  }
}

export default Projects;
