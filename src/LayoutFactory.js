import Splitwatch from "./Splitwatch";

// Constructs the layout from the input files
class LayoutFactory {
    constructor(files) 
    {
        this.files = files;
        this.contents = [];

        this.config = undefined;
        this.onLayoutBuilt = function() {};
    }

    build()
    {
        for (let i = 0; i < this.files.length; i++)
        {
            if (this.files[i]) this.parseFile(this.files[i]);
        }
    }

    // where the magic will eventually happen
    assignContents(evt)
    {
        //console.log(evt.target.result);

        // process file contents into window components
        //let components = [];
        
        // 
        this.contents.push(Splitwatch.windowData
            /* {
                title: '⏲ Splitwatch',
                type: 'react-component',
                component: 'splitwatch',
                tooltip: 'sequential event durations',
                props: { value: 'I\'m on the left' }
            } */
        );

        if (this.contents.length === this.files.length)
        {
            this.config = {
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