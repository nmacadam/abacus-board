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

        for (let i = 0; i < 30; i++)
        {
            let label = Utility.randomDemoWord();
            let start = i;
            let finish = i + 2;
            let duration = finish - start;
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