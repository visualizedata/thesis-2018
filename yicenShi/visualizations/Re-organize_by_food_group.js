fs = require('fs');

var data = JSON.parse(fs.readFileSync('./parsed_data/food_enforcement_US_bacteria_clustered.json'));


var categories={};

var Meats = [];
var Seafood = [];
var Vegetables = [];
var Cheese = [];
var Fruits = [];
var Ice_Creams = [];
var Desserts = [];
var Snacks = [];
var Salads = [];
var Drinks = [];
var Flour = [];
var Condiments = [];
 

for (var i in data){

	var food_group = data[i].food_group;

	if (food_group == 'Meats'){
       Meats.push(data[i]);
	}

	if (food_group == 'Seafood'){
		Seafood.push(data[i]);
	}

	if (food_group == 'Vegetables'){
		Vegetables.push(data[i]);
	}

	if (food_group == 'Cheese'){
		Cheese.push(data[i]);
	}

	if (food_group == 'Fruits'){
		Fruits.push(data[i]);
	}

	if (food_group == 'Ice Creams'){
		Ice_Creams.push(data[i]);
	}

	if (food_group == 'Dessert\/Sweets'){
		Desserts.push(data[i]);
	}

	if (food_group == 'Snacks'){
		Snacks.push(data[i]);
	}

	if (food_group == 'Salads'){
		Salads.push(data[i]);
	}

	if (food_group == 'Drinks'){
		Drinks.push(data[i]);
	}

	if (food_group == 'Flour'){
		Flour.push(data[i]);
	}

	if (food_group == 'Condiments\/Dips'){
		Condiments.push(data[i]);
	}

}

categories.Meats = Meats;
categories.Seafood = Seafood;
categories.Vegetables = Vegetables;
categories.Cheese = Cheese;
categories.Fruits = Fruits;
categories.Ice_Creams = Ice_Creams;
categories.Desserts = Desserts;
categories.Snacks = Snacks;
categories.Salads = Salads;
categories.Drinks = Drinks;
categories.Flour = Flour;
categories.Condiments = Condiments;

fs.writeFileSync('./parsed_data/Clustered_N_Organized_By_Food_Group.json',JSON.stringify(categories));