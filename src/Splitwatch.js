import React, { Component } from 'react';
import Utility from './Utility';

class Splitwatch extends Component {
    static windowData = {
        title: '⏲ Splitwatch',
        type: 'react-component',
        component: 'splitwatch',
        tooltip: 'sequential event durations'
    };

    constructor(props){
        super(props);
        this.state = {
          results: {}
        }

        //this.variableName = props.variableName || "VARIABLE NAME";
        this.dataSet = [];

        for (let i = 0; i < props.dataSet.length; i++)
        {
            let label = props.dataSet[i].Name;
            let start = props.dataSet[i].StartTime.toFixed(2);
            let finish = props.dataSet[i].EndTime === -1 ? '-' : props.dataSet[i].EndTime.toFixed(2);
            let duration = props.dataSet[i].Duration.toFixed(2);
            this.dataSet.push({label: label, start: start, finish: finish, duration: duration});
        }
    }

    render() {
        // build HTML table elements out of data set
        const tableData = this.dataSet.map((data, index) =>
            <tr className="dataTableRow" key={index}>
                <td className="dataTableCell">{data.label}</td>
                <td className="dataTableCell">{data.start}</td>
                <td className="dataTableCell">{data.finish}</td>
                <td className="dataTableCell">{data.duration}</td>
            </tr>
        );

        return (
            <div className="Window-Content dataTableContainer">
                <table className="dataTable">
                    <tbody>
                        <tr>
                            <th className="dataTableCell">Label</th>
                            <th className="dataTableCell">Start</th>
                            <th className="dataTableCell">Finish</th>
                            <th className="dataTableCell">Duration</th>
                        </tr>
                        {tableData}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Splitwatch;