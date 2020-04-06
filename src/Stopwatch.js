import React, { Component } from 'react';

class Stopwatch extends Component {
    static windowData = {
        title: '⏱ Stopwatch',
        type: 'react-component',
        component: 'stopwatch',
        tooltip: 'repeated event durations'
    };

    constructor(props){
        super(props);
        this.state = {
          results: {}
        }

        this.name = props.variableName || "VARIABLE NAME";
        this.dataSet = [];

        //Stopwatch.windowData = "⏱ Stopwatch " + this.name;

        for (let i = 0; i < 30; i++)
        {
            let start = i;
            let finish = i + 2;
            let duration = finish - start;
            this.dataSet.push({start: start, finish: finish, duration: duration});
        }
    }

    render() {
        // build HTML table elements out of data set
        const tableData = this.dataSet.map((data, index) =>
            <tr className="dataTableRow" key={index}>
                <td className="dataTableCell">{data.start}</td>
                <td className="dataTableCell">{data.finish}</td>
                <td className="dataTableCell">{data.duration}</td>
            </tr>
        );

        return (
            <div className="Window-Content">
                <table className="dataTable">
                    <tbody>
                        <tr>
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

export default Stopwatch;