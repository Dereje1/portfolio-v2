import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import Menu from './menu'

class App extends Component {
  mquery(){
    return (
      <MediaQuery maxWidth={2000}>
         {
           (mat) => {return <Menu collapsed={mat}/>;}
         }
      </MediaQuery>
    )
  }
  render() {
    return this.mquery()
  }
}

export default App;
