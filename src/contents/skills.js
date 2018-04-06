import React, { Component } from 'react';

class Skills extends Component {

  render() {
    if(this.props.hidden){return null}
    return (
      <div id="containSkills" className="containers">
          <div className="skillholder">
              <p className="title">Primary Focus</p>
              <hr className="divider"/>
              <div className="alliconholder">
                  <figure className="figflex">
                    <img className="skillicons" src="./images/icons/javascript.png" alt=""/>
                    <figcaption>JavaScript</figcaption>
                  </figure>
                  <figure className="figflex">
                    <img className="skillicons" src="./images/icons/mongodb.png" alt=""/>
                    <figcaption>mongoDB</figcaption>
                  </figure>
                  <figure className="figflex">
                    <img className="skillicons" src="./images/icons/express.png" alt=""/>
                    <figcaption>Express</figcaption>
                  </figure>
                  <figure className="figflex">
                    <img className="skillicons" src="./images/icons/react.png" alt=""/>
                    <figcaption>React</figcaption>
                  </figure>
                  <figure className="figflex">
                    <img className="skillicons" src="./images/icons/nodejs.png" alt=""/>
                    <figcaption>Node.js</figcaption>
                  </figure>
              </div>
          </div>
          <div className="skillholder">
              <p className="title">Front End Tools</p>
              <hr className="divider"/>
              <div className="alliconholder">
                  <figure className="figflex">
                    <img className="skillicons" src="./images/icons/react.png" alt=""/>
                    <figcaption>React</figcaption>
                  </figure>
                  <figure className="figflex">
                    <img className="skillicons" src="./images/icons/d3js.png" alt=""/>
                    <figcaption>D3.js</figcaption>
                  </figure>
                  <figure className="figflex">
                    <img className="skillicons" src="./images/icons/redux.png" alt=""/>
                    <figcaption>Redux</figcaption>
                  </figure>
                  <figure className="figflex">
                    <img className="skillicons" src="./images/icons/jquery.png" alt=""/>
                    <figcaption>jQuery</figcaption>
                  </figure>
                  <figure className="figflex">
                    <img className="skillicons" src="./images/icons/sass.png" alt=""/>
                    <figcaption>Sass</figcaption>
                  </figure>
              </div>
              <div className="alliconholder">
                <figure className="figflex">
                  <img className="skillicons" src="./images/icons/svg.png" alt=""/>
                  <figcaption>SVG</figcaption>
                </figure>
                <figure className="figflex">
                  <img className="skillicons" src="./images/icons/canvas.png" alt=""/>
                  <figcaption>Canvas</figcaption>
                </figure>
                <figure className="figflex">
                  <img className="skillicons" src="./images/icons/css3.png" alt=""/>
                  <figcaption>CSS</figcaption>
                </figure>
                <figure className="figflex">
                  <img className="skillicons" src="./images/icons/bootstrap.png" alt=""/>
                  <figcaption>Bootstrap</figcaption>
                </figure>
                <figure className="figflex">
                  <img className="skillicons" src="./images/icons/html5.png" alt=""/>
                  <figcaption>HTML5</figcaption>
                </figure>
              </div>
          </div>
          <div className="skillholder">
              <p className="title">Back End Tools</p>
              <hr className="divider"/>
              <div className="alliconholder">
                  <figure className="figflex">
                    <img className="skillicons" src="./images/icons/nodejs.png" alt=""/>
                    <figcaption>Node.js</figcaption>
                  </figure>
                  <figure className="figflex">
                    <img className="skillicons" src="./images/icons/express.png" alt=""/>
                    <figcaption>Express</figcaption>
                  </figure>
                  <figure className="figflex">
                    <img className="skillicons" src="./images/icons/mongodb.png" alt=""/>
                    <figcaption>mongoDB</figcaption>
                  </figure>
                  <figure className="figflex">
                    <img className="skillicons" src="./images/icons/passport.png" alt=""/>
                    <figcaption>passport.js</figcaption>
                  </figure>
                  <figure className="figflex">
                    <img className="skillicons" src="./images/icons/socket.png" alt=""/>
                    <figcaption>socket.io</figcaption>
                  </figure>
              </div>
          </div>
          <div className="skillholder">
              <p className="title">Other Exposure</p>
              <hr className="divider"/>
              <div className="alliconholder">
                  <figure className="figflex">
                    <img className="skillicons" src="./images/icons/python.png" alt=""/>
                    <figcaption>Python</figcaption>
                  </figure>
                  <figure className="figflex">
                    <img className="skillicons" src="./images/icons/octave.png" alt=""/>
                    <figcaption>GNU Octave</figcaption>
                  </figure>
                  <figure className="figflex">
                    <img className="skillicons" src="./images/icons/Webpack.png" alt=""/>
                    <figcaption>Webpack</figcaption>
                  </figure>
                  <figure className="figflex">
                    <img className="skillicons" src="./images/icons/matplotlib.png" alt=""/>
                    <figcaption>Matplotlib</figcaption>
                  </figure>
                  <figure className="figflex">
                    <img className="skillicons" src="./images/icons/router.png" alt=""/>
                    <figcaption>React Router</figcaption>
                  </figure>
              </div>
              <div className="alliconholder">
                  <figure className="figflex">
                    <img className="skillicons" src="./images/icons/mongoose.png" alt=""/>
                    <figcaption>Mongoose</figcaption>
                  </figure>
                  <figure className="figflex">
                    <img className="skillicons" src="./images/icons/numpy.png" alt=""/>
                    <figcaption>NumPy</figcaption>
                  </figure>
                  <figure className="figflex">
                    <img className="skillicons" src="./images/icons/scipy.png" alt=""/>
                    <figcaption>SciPy</figcaption>
                  </figure>
                  <figure className="figflex">
                    <img className="skillicons" src="./images/icons/web2py.png" alt=""/>
                    <figcaption>WEB2PY</figcaption>
                  </figure>
                  <figure className="figflex">
                    <img className="skillicons" src="./images/icons/powershell.png" alt=""/>
                    <figcaption>PowerShell</figcaption>
                  </figure>
              </div>
          </div>
      </div>
    );
  }

}

export default Skills;
