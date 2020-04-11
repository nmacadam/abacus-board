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

        this.variableName = props.variableName || "NAME";
        this.variableType = props.variableType || "TYPE";
        this.dataSet = props.dataSet || [];

        /*for (let i = 0; i < 30; i++)
        {
            this.dataSet.push({time: i, data: Utility.randomScalingFactor()});
        }*/
    }

    prettyPrintValue(value)
    {
        return Object.keys(value).map((name, index) =>
            <p key={index}>{name} = {value[name]}</p>
        );
    }

    render()
    {
        // build HTML table elements out of data set
        const tableData = this.dataSet.map((data, index) =>
            <tr className="dataTableRow" key={index}>
                <td className="dataTableCell">{data.Time.toFixed(1)}</td>
                <td className="dataTableCell">{this.prettyPrintValue(data.Value)}</td>
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