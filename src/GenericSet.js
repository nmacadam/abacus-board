import React, { Component } from 'react';

import Utility from './Utility';

class GenericSet extends Component {
    static windowData = {
        title: '💽 Generic Set',
        type: 'react-component',
        component: 'generic-set',
        tooltip: 'generic data set'
    };

    constructor(props){
        super(props);
        this.state = {
          results: {}
        }

        this.variableName = props.variableName || "VARIABLE NAME";
        this.dataSet = [];

        //GenericSet.windowData.title = "💽 Generic Set [" + this.variableName + "]"

        for (let i = 0; i < 30; i++)
        {
            this.dataSet.push({time: i, data: Utility.randomScalingFactor()});
        }
    }

    render()
    {
        // build HTML table elements out of data set
        const tableData = this.dataSet.map((data, index) =>
            <tr className="dataTableRow" key={index}>
                <td className="dataTableCell">{data.time}</td>
                <td className="dataTableCell">{data.data}</td>
            </tr>
        );

        return (
            <div className="Window-Content">
                <table className="dataTable">
                    <tbody>
                        <tr>
                            <th className="dataTableCell">Time</th>
                            <th className="dataTableCell">Value</th>
                        </tr>
                        {tableData}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default GenericSet;