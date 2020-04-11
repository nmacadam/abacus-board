import Splitwatch from "./Splitwatch";
import GenericSet from "./GenericSet";

// Constructs the layout from the input files
class LayoutFactory {
    constructor(files) 
    {
        this.files = files;
        this.contents = [];

        this.config = undefined;
        this.projectData = undefined;

        this.onLayoutBuilt = function() {};

        this.windowCount = -1;
    }

    build()
    {
        for (let i = 0; i < this.files.length; i++)
        {
            if (this.files[i]) this.parseFile(this.files[i]);
        }
    }

    constructSet(record)
    {
        let memberCount = Object.keys(record.Data[0].Value).length;
        let windowContents = {};

        if (memberCount == 0)           // numeric set
        
           return {
               title: '📈 Numeric Set ' + record.VariableName,
               type: 'react-component',
               component: 'numeric-set',
               tooltip: 'numeric data set',
               props: {
                   variableName: record.VariableName,
                   variableType: record.VariableType,
                   dataSet: record.Data
               }
           }
        
        else if (memberCount > 0)        // generic set
        {
           return {
               title: '💽 Generic Set ' + record.VariableName,
               type: 'react-component',
               component: 'generic-set',
               tooltip: 'generic data set',
               props: {
                   variableName: record.VariableName,
                   variableType: record.VariableType,
                   dataSet: record.Data
               }
           }
        }
    }

    constructTimestamp(record)
    {
        return {
            title: '⌛ Timestamp',
            type: 'react-component',
            component: 'timestamp',
            tooltip: 'timestamped events',
            props: {
                variableName: record.VariableName,
                dataSet: record.Data
            }
        } 
    }

    constructStopwatch(record)
    {
        return {
            title: '⏱ Stopwatch',
            type: 'react-component',
            component: 'stopwatch',
            tooltip: 'repeated event durations',
            props: {
                variableName: record.VariableName,
                dataSet: record.Data
            }
        } 
    }

    constructSplitwatch(record)
    {
        return {
            title: '⏲ Splitwatch',
            type: 'react-component',
            component: 'splitwatch',
            tooltip: 'sequential event durations',
            props: {
                variableName: record.VariableName,
                dataSet: record.Data
            }
        } 
    }

    // where the magic will eventually happen
    assignContents(evt)
    {
        //console.log(evt.target.result);

        // process file contents into window components
        let input = JSON.parse(evt.target.result);
        this.windowCount = input.Records.length;

        this.projectData = input.ProjectData;

        for (let i = 0; i < input.Records.length; i++)
        {
            let record = input.Records[i];
            if (record.Data.length === 0) continue;

            //let windowContents = {};

            //let memberCount = Object.keys(record.Data[0].Value).length;
            
            let windowContent;

            switch (record.DisplayType)
            {
                case "set": 
                    windowContent = this.constructSet(record); 
                    this.contents.push(windowContent);
                    break;
                case "splitwatch": 
                    windowContent = this.constructSplitwatch(record); 
                    this.contents.push(windowContent);
                    break;
                case "stopwatch": 
                    windowContent = this.constructStopwatch(record); 
                    this.contents.push(windowContent);
                    break;
                case "timestamp": 
                    windowContent = this.constructTimestamp(record);
                    this.contents.push(windowContent);
                    break;
                default: console.log("invalid display type");
            }
            
            //console.log("Constructed window contents");
            //console.log(windowContents);
        }

        if (this.contents.length === this.windowCount)
        {
            this.config = {
                dimensions: {
                    borderWidth: 1,
                    minItemHeight: 10,
                    minItemWidth: 10,
                    headerHeight: 20,
                    dragProxyWidth: 300,
                    dragProxyHeight: 200
                },
                labels: {
                    close: 'close',
                    maximise: 'maximise',
                    minimise: 'minimise',
                    popout: 'open in new window'
                },
                content: [{
                    type: 'row',
                    content: this.contents
                }]
            };
            this.onLayoutBuilt();
        }
    }

    parseFile(file)
    {
        var reader = new FileReader();

        // assign on load callback using => function so the 'this' instance persists into the callback scope 
        reader.onload = (evt) => { this.assignContents(evt); }

        reader.onerror = function (evt) {
            console.log("error reading file");
        }
        
        reader.readAsText(file, "UTF-8");
    }
}

export default LayoutFactory;