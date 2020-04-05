import React, { Component } from 'react';
import FileDialogue from './FileDialogue';

class Splash extends Component {
    constructor(props){
      super(props);
      this.state = {
        results: {}
      }
    }
  
    render() {
      return (
        <div className="overlay" id="splashScreen">
            <FileDialogue buttonLabel='Generate' />
        </div>
      );
    }
}

export default Splash;