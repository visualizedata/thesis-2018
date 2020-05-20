var fs=require('fs');

//read the dataset and get the results part
var data_raw=JSON.parse(fs.readFileSync('food_enforcement.json'));
//console.log(typeof(data_raw));

var data_US=[];
var data_notUS=[];


//combine address
for (var i in data_raw){
    
    var country=data_raw[i].country;

	if (country =='United States'){

		data_raw[i].complete_address= data_raw[i].address_1+','+' '
										  +data_raw[i].city+','+' '
										  +data_raw[i].state;


	    data_US.push(data_raw[i]);
		
		//console.log(data_raw[i].complete_address);
	}

	else {
		data_notUS.push(data_raw[i]);
	}

}


 
 fs.writeFileSync('/Users/yicenshi/Desktop/major_studio_2/visualizations/parsed_data/food_enforcement_US.json', JSON.stringify(data_US));




