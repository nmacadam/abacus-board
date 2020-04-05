// Constructs the layout from the input files
//var content = [];

// uhhghghhh async makes this HARD
// this does NOT WORK YET! it just returns a default thing for testing stuff out

class LayoutFactory {
    constructor(files) 
    {
        //this.content = [];

        for (let i = 0; i < files.length; i++)
        {
            if (files[i]) this.parseFile(files[i]);
        }

        this.content = [];
        this.onLayoutBuilt = function() {};
    }

    parseFile(file)
    {
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
            console.log(evt.target.result);
            /* content.push(
                {
                    title: 'A react component',
                    type: 'react-component',
                    component: 'numeric-set',
                    props: { value: 'I\'m on the left' }
                }
            ); */
            
        }
        reader.onerror = function (evt) {
            console.log("error reading file");
        }
    }

    // notice we are returning nested "content" blocks
    build()
    {
        return {
            content: [{
                type: 'row',
                //content: content
                content: [
                    {
                        type: "stack",

                        content: [
                            {
                                title: 'A react component',
                                type: 'react-component',
                                component: 'numeric-set',
                                props: { value: 'I\'m on the left' }
                            },
                            {
                                title: 'A react component',
                                type: 'react-component',
                                component: 'numeric-set',
                                props: { value: 'I\'m on the left' }
                            }
                        ]
                    },
                    {
                        title: 'A react component',
                        type: 'react-component',
                        component: 'numeric-set',
                        props: { value: 'I\'m on the left' }
                    },
                    {
                        title: 'A react component',
                        type: 'react-component',
                        component: 'numeric-set',
                        props: { value: 'I\'m on the left' }
                    }
                ]
            }]
        };
    }
}

export default LayoutFactory;