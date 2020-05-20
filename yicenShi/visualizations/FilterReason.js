var fs=require('fs');

//read the US dataset and get the results part
var dataAll=JSON.parse(fs.readFileSync('/Users/yicenshi/Desktop/major_studio_2/visualizations/parsed_data/food_enforcement_US.json'));


var bacteria =['Salmonella','Norovirus','Campylobacter','E. coli','Listeria','Clostridium perfringens'];


var reason_bacteria=[];
var reason_other=[];

for (var i in dataAll){

   var description= dataAll[i].reason_for_recall;

      //recalls because of different kinds of bacteria
      if (description.search(/Salmonella/g) > -1 ||
          description.search(/Norovirus/g) > -1 ||
          description.search(/Campylobacter/g) > -1 ||
          description.search(/coli/g) > -1 ||
          description.search(/Listeria/g) > -1 ||
          description.search(/Clostridium/g) > -1) {
          
          reason_bacteria.push(dataAll[i]);

      }
      else { reason_other.push(dataAll[i]); }

};

fs.writeFileSync('/Users/yicenshi/Desktop/major_studio_2/visualizations/parsed_data/food_enforcement_US_bacteria.json',JSON.stringify(reason_bacteria));
fs.writeFileSync('/Users/yicenshi/Desktop/major_studio_2/visualizations/parsed_data/food_enforcement_US_other.json',JSON.stringify(reason_other));

