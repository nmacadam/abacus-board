import React, { Component } from 'react';

import ProjectData from './ProjectData';
import FileDialogue from './FileDialogue';

class Toolbar extends Component {
    constructor(props){
      super(props);
      this.state = {
        results: {}
      }

      this.hasFiles = props.hasFiles;
    }
  
    render() {
      return (
        <div className="ToolbarContainer">
            <div className="ToolbarInner">
                <h1>📋abacus board</h1>
            </div>
            <div className="ToolbarInner" style={{marginLeft: "25px"}}>
                <ProjectData />
            </div>
            { this.hasFiles &&
              <div className="ToolbarInner">
                <FileDialogue buttonLabel='Regenerate' />
              </div>
            }
        </div>
      );
    }
}

export default Toolbar;