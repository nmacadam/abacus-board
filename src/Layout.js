import React, { Component } from 'react';

// Dependencies
import GoldenLayout from 'golden-layout';
import LayoutFactory from './LayoutFactory';

// Layout Components
import GenericSet from './GenericSet';
import NumericSet from './NumericSet';
import Timestamp from './Timestamp';
import Stopwatch from './Stopwatch';
import Splitwatch from './Splitwatch';

// Displays the GoldenLayout layout for the project
class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: {}
        }

        this.files = props.files;
        this.hasRendered = false;
        this.buildDemo = props.buildDemo;
        console.log('build demo: ' + this.buildDemo);
        //this.demoContent = props.demoContent;
        //this.callback = function(args) { props.parentCallback(args) };
    }

    // since goldenlayout works outside of the react pipeline we need to give it just a sec
    // to make sure it can initalize before react tries to draw it
    drawLayout() {
        setTimeout(() => {
            let factory = new LayoutFactory(this.files);
            let element = document.getElementById("layoutContainer");
            factory.onLayoutBuilt = e => {
                const layout = new GoldenLayout(factory.config, element);
                /*const layout = new GoldenLayout({
                    content: [{
                        type: 'row',
                        content: [
                            NumericSet.windowData,
                            GenericSet.windowData,
                            Timestamp.windowData,
                            Splitwatch.windowData,
                            Stopwatch.windowData
                        ]
                    }]
                });*/
                layout.registerComponent('numeric-set', NumericSet);
                layout.registerComponent('generic-set', GenericSet);
                layout.registerComponent('timestamp', Timestamp);
                layout.registerComponent('stopwatch', Stopwatch);
                layout.registerComponent('splitwatch', Splitwatch);

                layout.on( 'tabCreated', function( tab ){
                    tab.element.attr('title', tab.contentItem.config.tooltip);
                });

                //layout._isFullPage = true;
                layout.init();
                this.props.parentCallback(factory.projectData);
                //this.callback(factory.projectData);
            }
            
            if (this.props.buildDemo === false)
            {
                console.log("building");
                factory.build();
            }
            else {
                console.log("building demo content");
                factory.buildDirect(`
            {
                "ProjectData": {
                  "Name": "JSON_Example",
                  "Version": "0.1",
                  "Platform": "WindowsEditor",
                  "Author": "DefaultCompany",
                  "UnityVersion": "2019.2.16f1",
                  "StartTime": "6:00:19 PM",
                  "EndTime": "6:00:29 PM",
                  "Date": "4/11/2020",
                  "Duration": "00:00:10.2195326"
                },
                "Records": [
                  {
                    "DisplayType": "set",
                    "VariableName": "Noise",
                    "VariableType": "System.Single",
                    "Data": [
                      {
                        "Value": 0.0,
                        "Time": 0.0
                      },
                      {
                        "Value": 0.465273559,
                        "Time": 1.01499987
                      },
                      {
                        "Value": 0.4652718,
                        "Time": 2.02431583
                      },
                      {
                        "Value": 0.4652898,
                        "Time": 3.03658938
                      },
                      {
                        "Value": 0.465305239,
                        "Time": 4.049621
                      },
                      {
                        "Value": 0.4652255,
                        "Time": 5.064625
                      },
                      {
                        "Value": 0.465273082,
                        "Time": 6.078663
                      },
                      {
                        "Value": 0.465247363,
                        "Time": 7.08807564
                      },
                      {
                        "Value": 0.465360463,
                        "Time": 8.096925
                      },
                      {
                        "Value": 0.460046858,
                        "Time": 9.098421
                      }
                    ]
                  },
                  {
                    "DisplayType": "set",
                    "VariableName": "position",
                    "VariableType": "UnityEngine.Vector3",
                    "Data": [
                      {
                        "Value": {
                          "x": 0.0,
                          "y": 0.0,
                          "z": 0.0
                        },
                        "Time": 0.0
                      },
                      {
                        "Value": {
                          "x": 0.0,
                          "y": 0.0,
                          "z": 0.0
                        },
                        "Time": 1.01499987
                      },
                      {
                        "Value": {
                          "x": 0.0,
                          "y": 0.0,
                          "z": 0.0
                        },
                        "Time": 2.02431583
                      },
                      {
                        "Value": {
                          "x": 0.0,
                          "y": 0.0,
                          "z": 0.0
                        },
                        "Time": 3.03658938
                      },
                      {
                        "Value": {
                          "x": 0.0,
                          "y": 0.0,
                          "z": 0.0
                        },
                        "Time": 4.049621
                      },
                      {
                        "Value": {
                          "x": 0.0,
                          "y": 0.0,
                          "z": 0.0
                        },
                        "Time": 5.064625
                      },
                      {
                        "Value": {
                          "x": 0.0,
                          "y": 0.0,
                          "z": 0.0
                        },
                        "Time": 6.078663
                      },
                      {
                        "Value": {
                          "x": 0.0,
                          "y": 0.0,
                          "z": 0.0
                        },
                        "Time": 7.08807564
                      },
                      {
                        "Value": {
                          "x": 1.2,
                          "y": 0.0,
                          "z": 0.0
                        },
                        "Time": 8.096925
                      },
                      {
                        "Value": {
                          "x": 1.2,
                          "y": 0.0,
                          "z": 0.0
                        },
                        "Time": 9.098421
                      }
                    ]
                  },
                  {
                    "DisplayType": "splitwatch",
                    "VariableName": "Splitwatch",
                    "VariableType": "System.Single",
                    "Data": [
                      {
                        "Name": "Split",
                        "StartTime": 1.68864834,
                        "EndTime": 4.049621,
                        "Duration": 2.360973
                      },
                      {
                        "Name": "Split",
                        "StartTime": 4.72536135,
                        "EndTime": -1.0,
                        "Duration": 5.16479445
                      }
                    ]
                  },
                  {
                    "DisplayType": "stopwatch",
                    "VariableName": "Stopwatch",
                    "VariableType": "System.Single",
                    "Data": [
                      {
                        "StartTime": 1.68864834,
                        "EndTime": 4.049621,
                        "Duration": 2.360973
                      },
                      {
                        "StartTime": 4.72536135,
                        "EndTime": -1.0,
                        "Duration": 5.16479445
                      }
                    ]
                  },
                  {
                    "DisplayType": "timestamp",
                    "VariableName": "Event Timestamper",
                    "VariableType": "System.Single",
                    "Data": [
                      {
                        "Time": 2.851527,
                        "Name": "someName"
                      },
                      {
                        "Time": 5.11529255,
                        "Name": "someName"
                      },
                      {
                        "Time": 5.55360746,
                        "Name": "someName"
                      }
                    ]
                  }
                ]
              }
            `);
            }
            this.hasRendered = true;
        }, 0);
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        return !this.hasRendered;
    }

    componentDidMount() {
        if(this.files && this.files.length !== 0) this.drawLayout();
    }

    /* componentDidUpdate() {
        if(this.files && this.files.length !== 0) this.drawLayout();
    } */

    // Return an empty element, the rendering for the layout isnt react based
    // so we'll just make it draw when react wants stuff rendered
    render() {
        var h = window.innerHeight;
        var ht = 90; // magic! :(
        var hc = h - ht;
        

        return (<div id="layoutContainer" style={{height: hc}} />);
    }
}

export default Layout;