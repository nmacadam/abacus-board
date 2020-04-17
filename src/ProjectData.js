import React, { Component } from 'react';

class ProjectData extends Component {
    constructor(props){
      super(props);
      this.state = {
        results: {}
      }
    }
  
    render() {
      let data = this.props.data;
      let isEmpty = !data || Object.keys(data).length === 0 && data.constructor === Object;

      if (isEmpty)
      {
        return <div className="Project-Data" />
      }
      else
      {
        return (
          <div className="Project-Data">
              <p>{data.Name} v.{data.Version}</p>
              <p>{data.Platform}, unity {data.UnityVersion}</p>
              <p>by {data.Author}</p>
              <p>dataset from {data.StartTime} - {data.EndTime}, {data.Date} ({data.Duration})</p>
          </div>
        );
      }
      
    }
}

  
export default ProjectData;