import React, { Component } from 'react';

class Contact extends Component {
  render() {
    if (this.props.hidden) {
      return (
        <div className="fadeout">
        </div>
      );
    }
    return (
      <div id="containContact" className="fadein">
        <span className="contactHolder">
          <i className="fas fa-envelope" />
          <a className="contactdetail" href="mailto:dereje.jobs@gmail.com">
            dereje.jobs@gmail.com
          </a>
        </span>
        <span className="contactHolder">
          <i className="fas fa-file" aria-hidden="true" />
          <a
            className="contactdetail"
            href="https://drive.google.com/file/d/1nqQ1IeXEBVQuVgxJSJfomNNjdmcT_cGe/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Resume
          </a>
        </span>
        <span className="contactHolder">
          <i className="fab fa-github-square" aria-hidden="true" />
          <a
            className="contactdetail"
            href="https://github.com/Dereje1"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            github.com/Dereje1
          </a>
        </span>
      </div>
    );
  }
}

export default Contact;
