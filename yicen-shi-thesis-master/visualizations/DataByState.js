var fs=require('fs');

var data = JSON.parse(fs.readFileSync('./parsed_data/food_enforcement_US_bacteria_geocoded.json'));

//console.log(data[0]);

//50 states
var AL=[];var AK=[];var AZ=[];var AR=[];var CA=[];
var CO=[];var CT=[];var DE=[];var FL=[];var GA=[];
var HI=[];var ID=[];var IL=[];var IN=[];var IA=[];
var KS=[];var KY=[];var LA=[];var ME=[];var MD=[];
var MA=[];var MI=[];var MN=[];var MS=[];var MO=[];
var MT=[];var NE=[];var NV=[];var NH=[];var NJ=[];
var NY=[];var NC=[];var ND=[];var OH=[];var OK=[];
var OR=[];var PA=[];var RI=[];var SC=[];var SD=[];
var TN=[];var TX=[];var UT=[];var VT=[];var VA=[];
var WA=[];var WV=[];var WI=[];var WY=[];var NM=[];


//by states
var byStates=[];

var newData=[];

for (var i in data){

	var state = data[i].state;
 
 	if (state == 'AL') AL.push(data[i]);
 	if (state == 'AK') AK.push(data[i]);
 	if (state == 'AZ') AZ.push(data[i]);
 	if (state == 'AR') AR.push(data[i]);
 	if (state == 'CA') CA.push(data[i]);
 	if (state == 'CO') CO.push(data[i]);
 	if (state == 'CT') CT.push(data[i]);
 	if (state == 'DE') DE.push(data[i]);
 	if (state == 'FL') FL.push(data[i]);
 	if (state == 'GA') GA.push(data[i]);
 	if (state == 'HI') HI.push(data[i]);
 	if (state == 'ID') ID.push(data[i]);
 	if (state == 'IL') IL.push(data[i]);
 	if (state == 'IN') IN.push(data[i]);
 	if (state == 'IA') IA.push(data[i]);
 	if (state == 'KS') KS.push(data[i]);
 	if (state == 'KY') KY.push(data[i]);
 	if (state == 'LA') LA.push(data[i]);
 	if (state == 'ME') ME.push(data[i]);
 	if (state == 'MD') MD.push(data[i]);
 	if (state == 'MA') MA.push(data[i]);
 	if (state == 'MI') MI.push(data[i]);
 	if (state == 'MN') MN.push(data[i]);
 	if (state == 'MS') MS.push(data[i]);
 	if (state == 'MO') MO.push(data[i]);
 	if (state == 'NJ') NJ.push(data[i]);
 	if (state == 'NM') NM.push(data[i]);
 	if (state == 'NY') NY.push(data[i]);
 	if (state == 'NC') NC.push(data[i]);
 	if (state == 'ND') ND.push(data[i]);
 	if (state == 'OH') OH.push(data[i]);
 	if (state == 'OK') OK.push(data[i]);
 	if (state == 'OR') OR.push(data[i]);
 	if (state == 'PA') PA.push(data[i]);
 	if (state == 'RI') RI.push(data[i]);
 	if (state == 'SC') SC.push(data[i]);
 	if (state == 'SD') SD.push(data[i]);
 	if (state == 'TN') TN.push(data[i]);
 	if (state == 'TX') TX.push(data[i]);
 	if (state == 'UT') UT.push(data[i]);
 	if (state == 'VT') VT.push(data[i]);
 	if (state == 'VA') VA.push(data[i]);
 	if (state == 'WA') WA.push(data[i]);
 	if (state == 'WV') WV.push(data[i]);
 	if (state == 'WI') WI.push(data[i]);
 	if (state == 'WY') WY.push(data[i]);

}


newData= [AL,AK,AZ,AR,CA,
		  CO,CT,DE,FL,GA,
		  HI,ID,IL,IN,IA,
		  KS,KY,LA,ME,MD,
		  MA,MI,MN,MS,MO,
		  MT,NE,NV,NH,NJ,
		  NM,NY,NC,ND,OH,
		  OK,OR,PA,RI,SC,
		  SD,TN,TX,UT,VT,
		  VA,WA,WV,WI,WY];


fs.writeFileSync('./parsed_data/data_for_map_byStates.json',JSON.stringify(newData));
