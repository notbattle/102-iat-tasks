define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();
	return iatExtension({
		category1 : {
			name : 'Words A-M', //Will appear in the data.
			title : {
				media : {word : 'A-M'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		  {word : 'cup'}, 
    			{word : 'fish'},  
    			{word : 'hanger'}, 
    			{word : 'dagger'},
          {word : 'bangle'},
          {word : 'glue'},
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'N-Z', //Will appear in the data.
			title : {
				media : {word : 'N-Z'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		  {word : 'tiger'}, 
    			{word : 'shelf'},
          {word : 'toy'},
          {word : 'scarf'},
], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		} 
	});
});
