define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension) {
    var API = new APIConstructor();
    function iatExtension(options) {
        var API = new APIConstructor();
        var scorer = new Scorer();
        var piCurrent = API.getCurrent();
        var iatObj = {
            isTouch: true,
            canvas: {
                maxWidth: 725,
                proportions: 0.7,
                background: '#ffffff',
                borderWidth: 5,
                canvasBackground: '#ffffff',
                borderColor: 'lightblue',
                css: { "touch-action": "manipulation" }
            },
            return: iatExtension({
                category1: {
                    name: 'Words A-M',
                    title: {
                        media: { word: 'A-M' },
                        css: { color: '#31940F', 'font-size': '2em' },
                        height: 4 //Used to position the "Or" in the combined block.
                    },
                    stimulusMedia: [
                        { word: 'Emma' },
                        { word: 'Liam' },
                        { word: 'Elijah' },
                        { word: 'Mia' },
                        { word: 'James' },
                        { word: 'Ellie' },
                        { word: 'Aria' },
                        { word: 'Ethan' },
                    ],
                    //Stimulus css (style)
                    stimulusCss: { color: '#31940F', 'font-size': '1.8em' }
                },
                category2: {
                    name: 'N-Z',
                    title: {
                        media: { word: 'N-Z' },
                        css: { color: '#31940F', 'font-size': '2em' },
                        height: 4 //Used to position the "Or" in the combined block.
                    },
                    stimulusMedia: [
                        { word: 'Olivia' },
                        { word: 'Noah' },
                    ],
                    //Stimulus css
                    stimulusCss: { color: '#31940F', 'font-size': '1.8em' }
                },
            })
        };
    }
});
