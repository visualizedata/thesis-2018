var fs=require('fs');

var stateData=JSON.parse(fs.readFileSync('./parsed_data/data_for_map_byStates.json'));
var geojson = JSON.parse(fs.readFileSync('state.geo.json'));

geojson = geojson.features;


for(var i=0;i<geojson.length;i++){

	var state=geojson[i].properties.STUSPS10;

	for (var j=0;j<stateData.length;j++){

		if(stateData[j].length !== 0){

			var match = stateData[j][0].state;

			if (state == match){

				geojson[i].cases = stateData[j];
			}

	    }
	}	
}



fs.writeFileSync('./parsed_data/joined_data_for_map.json',JSON.stringify(geojson));
