import React, { Component } from 'react';

class ProjectData extends Component {
    constructor(props){
      super(props);
      this.state = {
        results: {}
      }

      this.name = "name";
      this.author = "author";
      this.platform = "platform";
      this.version = "v.1.0.0";
      this.unityVersion = "2019.3";
      this.duration = "12:00am - 12:10am, 1/1/2020"
    }
  
    render() {
      return (
        <div className="Project-Data">
            <p>{this.name} {this.version}</p>
            <p>{this.platform}, unity {this.unityVersion}</p>
            <p>by {this.author}</p>
            <p>dataset from {this.duration}</p>
        </div>
      );
    }
}

  
export default ProjectData;