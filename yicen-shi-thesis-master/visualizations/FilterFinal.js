var fs=require('fs');

//read the US dataset and get the results part
var reason_bacteria=JSON.parse(fs.readFileSync('/Users/yicenshi/Desktop/major_studio_2/visualizations/parsed_data/food_enforcement_US_bacteria.json'));

//final outputs for bacteria recalls
var finalCategory=[];


//by classification
var classI=[];
var classII=[];
var classIII=[];

var byClass={};

//by years
var Iyear11=[];
var Iyear12=[];
var Iyear13=[];
var Iyear14=[];
var Iyear15=[];
var Iyear16=[];
var Iyear17=[];

var IIyear11=[];
var IIyear12=[];
var IIyear13=[];
var IIyear14=[];
var IIyear15=[];
var IIyear16=[];
var IIyear17=[];

var IIIyear11=[];
var IIIyear12=[];
var IIIyear13=[];
var IIIyear14=[];
var IIIyear15=[];
var IIIyear16=[];
var IIIyear17=[];


var byYearI={};
var byYearII={};
var byYearIII={};


for (var i in reason_bacteria){

   classification=reason_bacteria[i].classification;

   //class I 
   if (classification == 'Class I'){

      var date=reason_bacteria[i].recall_initiation_date;
      var year=date.slice(0,4);


         //group by year
         if (year == '2011'){

             Iyear11.push({'classification':reason_bacteria[i]['classification'],
                            'recall_initiation_date':reason_bacteria[i]['recall_initiation_date'],
                            'city':reason_bacteria[i]['city'],
                            'recalling_firm':reason_bacteria[i]['recalling_firm'],
                            'distribution_pattern':reason_bacteria['distribution_pattern'],
                            'country':reason_bacteria[i]['country'],
                            'product_description':reason_bacteria[i]['product_description'],
                            'product_quantity':reason_bacteria[i]['product_quantity'],
                            'complete_address': reason_bacteria[i]['complete_address']});

         }

         else if (year == '2012'){


             Iyear12.push({'classification':reason_bacteria[i]['classification'],
                            'recall_initiation_date':reason_bacteria[i]['recall_initiation_date'],
                            'city':reason_bacteria[i]['city'],
                            'recalling_firm':reason_bacteria[i]['recalling_firm'],
                            'distribution_pattern':reason_bacteria['distribution_pattern'],
                            'country':reason_bacteria[i]['country'],
                            'product_description':reason_bacteria[i]['product_description'],
                            'product_quantity':reason_bacteria[i]['product_quantity'],
                            'complete_address': reason_bacteria[i]['complete_address']});

         }
         
         else if (year == '2013'){

            Iyear13.push({'classification':reason_bacteria[i]['classification'],
                            'recall_initiation_date':reason_bacteria[i]['recall_initiation_date'],
                            'city':reason_bacteria[i]['city'],
                            'recalling_firm':reason_bacteria[i]['recalling_firm'],
                            'distribution_pattern':reason_bacteria['distribution_pattern'],
                            'country':reason_bacteria[i]['country'],
                            'product_description':reason_bacteria[i]['product_description'],
                            'product_quantity':reason_bacteria[i]['product_quantity'],
                            'complete_address': reason_bacteria[i]['complete_address']});

         }

         else if (year == '2014'){

            Iyear14.push({'classification':reason_bacteria[i]['classification'],
                            'recall_initiation_date':reason_bacteria[i]['recall_initiation_date'],
                            'city':reason_bacteria[i]['city'],
                            'recalling_firm':reason_bacteria[i]['recalling_firm'],
                            'distribution_pattern':reason_bacteria['distribution_pattern'],
                            'country':reason_bacteria[i]['country'],
                            'product_description':reason_bacteria[i]['product_description'],
                            'product_quantity':reason_bacteria[i]['product_quantity'],
                            'complete_address': reason_bacteria[i]['complete_address']});

         }

         else if (year == '2015'){

            Iyear15.push({'classification':reason_bacteria[i]['classification'],
                            'recall_initiation_date':reason_bacteria[i]['recall_initiation_date'],
                            'city':reason_bacteria[i]['city'],
                            'recalling_firm':reason_bacteria[i]['recalling_firm'],
                            'distribution_pattern':reason_bacteria['distribution_pattern'],
                            'country':reason_bacteria[i]['country'],
                            'product_description':reason_bacteria[i]['product_description'],
                            'product_quantity':reason_bacteria[i]['product_quantity'],
                            'complete_address': reason_bacteria[i]['complete_address']});

         }

         else if (year == '2016'){

            Iyear16.push({'classification':reason_bacteria[i]['classification'],
                            'recall_initiation_date':reason_bacteria[i]['recall_initiation_date'],
                            'city':reason_bacteria[i]['city'],
                            'recalling_firm':reason_bacteria[i]['recalling_firm'],
                            'distribution_pattern':reason_bacteria['distribution_pattern'],
                            'country':reason_bacteria[i]['country'],
                            'product_description':reason_bacteria[i]['product_description'],
                            'product_quantity':reason_bacteria[i]['product_quantity'],
                            'complete_address': reason_bacteria[i]['complete_address']})
         }

         else if (year == '2017'){

           Iyear17.push({'classification':reason_bacteria[i]['classification'],
                            'recall_initiation_date':reason_bacteria[i]['recall_initiation_date'],
                            'city':reason_bacteria[i]['city'],
                            'recalling_firm':reason_bacteria[i]['recalling_firm'],
                            'distribution_pattern':reason_bacteria['distribution_pattern'],
                            'country':reason_bacteria[i]['country'],
                            'product_description':reason_bacteria[i]['product_description'],
                            'product_quantity':reason_bacteria[i]['product_quantity'],
                            'complete_address': reason_bacteria[i]['complete_address']});
         }

   }

   
   //class II
   else if (classification == 'Class II'){


      var date=reason_bacteria[i].recall_initiation_date;
      var year=date.slice(0,4);


         //group by year
         if (year == '2011'){

            IIyear11.push({'classification':reason_bacteria[i]['classification'],
                            'recall_initiation_date':reason_bacteria[i]['recall_initiation_date'],
                            'city':reason_bacteria[i]['city'],
                            'recalling_firm':reason_bacteria[i]['recalling_firm'],
                            'distribution_pattern':reason_bacteria['distribution_pattern'],
                            'country':reason_bacteria[i]['country'],
                            'product_description':reason_bacteria[i]['product_description'],
                            'product_quantity':reason_bacteria[i]['product_quantity'],
                            'complete_address': reason_bacteria[i]['complete_address']});     
         }

         else if (year == '2012'){

           IIyear12.push({'classification':reason_bacteria[i]['classification'],
                            'recall_initiation_date':reason_bacteria[i]['recall_initiation_date'],
                            'city':reason_bacteria[i]['city'],
                            'recalling_firm':reason_bacteria[i]['recalling_firm'],
                            'distribution_pattern':reason_bacteria['distribution_pattern'],
                            'country':reason_bacteria[i]['country'],
                            'product_description':reason_bacteria[i]['product_description'],
                            'product_quantity':reason_bacteria[i]['product_quantity'],
                            'complete_address': reason_bacteria[i]['complete_address']});   
         }
         
         else if (year == '2013'){


            IIyear13.push({'classification':reason_bacteria[i]['classification'],
                            'recall_initiation_date':reason_bacteria[i]['recall_initiation_date'],
                            'city':reason_bacteria[i]['city'],
                            'recalling_firm':reason_bacteria[i]['recalling_firm'],
                            'distribution_pattern':reason_bacteria['distribution_pattern'],
                            'country':reason_bacteria[i]['country'],
                            'product_description':reason_bacteria[i]['product_description'],
                            'product_quantity':reason_bacteria[i]['product_quantity'],
                            'complete_address': reason_bacteria[i]['complete_address']});  

         }

         else if (year == '2014'){

            IIyear14.push({'classification':reason_bacteria[i]['classification'],
                            'recall_initiation_date':reason_bacteria[i]['recall_initiation_date'],
                            'city':reason_bacteria[i]['city'],
                            'recalling_firm':reason_bacteria[i]['recalling_firm'],
                            'distribution_pattern':reason_bacteria['distribution_pattern'],
                            'country':reason_bacteria[i]['country'],
                            'product_description':reason_bacteria[i]['product_description'],
                            'product_quantity':reason_bacteria[i]['product_quantity'],
                            'complete_address': reason_bacteria[i]['complete_address']});  

         }

         else if (year == '2015'){

            IIyear15.push({'classification':reason_bacteria[i]['classification'],
                            'recall_initiation_date':reason_bacteria[i]['recall_initiation_date'],
                            'city':reason_bacteria[i]['city'],
                            'recalling_firm':reason_bacteria[i]['recalling_firm'],
                            'distribution_pattern':reason_bacteria['distribution_pattern'],
                            'country':reason_bacteria[i]['country'],
                            'product_description':reason_bacteria[i]['product_description'],
                            'product_quantity':reason_bacteria[i]['product_quantity'],
                            'complete_address': reason_bacteria[i]['complete_address']});   
         }

         else if (year == '2016'){

            IIyear16.push({'classification':reason_bacteria[i]['classification'],
                            'recall_initiation_date':reason_bacteria[i]['recall_initiation_date'],
                            'city':reason_bacteria[i]['city'],
                            'recalling_firm':reason_bacteria[i]['recalling_firm'],
                            'distribution_pattern':reason_bacteria['distribution_pattern'],
                            'country':reason_bacteria[i]['country'],
                            'product_description':reason_bacteria[i]['product_description'],
                            'product_quantity':reason_bacteria[i]['product_quantity'],
                            'complete_address': reason_bacteria[i]['complete_address']});   
         }

         else if (year == '2017'){

           IIyear17.push({'classification':reason_bacteria[i]['classification'],
                            'recall_initiation_date':reason_bacteria[i]['recall_initiation_date'],
                            'city':reason_bacteria[i]['city'],
                            'recalling_firm':reason_bacteria[i]['recalling_firm'],
                            'distribution_pattern':reason_bacteria['distribution_pattern'],
                            'country':reason_bacteria[i]['country'],
                            'product_description':reason_bacteria[i]['product_description'],
                            'product_quantity':reason_bacteria[i]['product_quantity'],
                            'complete_address': reason_bacteria[i]['complete_address']});   
         }

   }


   else {

      var date=reason_bacteria[i].recall_initiation_date;
      var year=date.slice(0,4);


         //group by year
         if (year == '2011'){

            IIIyear11.push({'classification':reason_bacteria[i]['classification'],
                            'recall_initiation_date':reason_bacteria[i]['recall_initiation_date'],
                            'city':reason_bacteria[i]['city'],
                            'recalling_firm':reason_bacteria[i]['recalling_firm'],
                            'distribution_pattern':reason_bacteria['distribution_pattern'],
                            'country':reason_bacteria[i]['country'],
                            'product_description':reason_bacteria[i]['product_description'],
                            'product_quantity':reason_bacteria[i]['product_quantity'],
                            'complete_address': reason_bacteria[i]['complete_address']});      

         }

         else if (year == '2012'){

            IIIyear12.push({'classification':reason_bacteria[i]['classification'],
                            'recall_initiation_date':reason_bacteria[i]['recall_initiation_date'],
                            'city':reason_bacteria[i]['city'],
                            'recalling_firm':reason_bacteria[i]['recalling_firm'],
                            'distribution_pattern':reason_bacteria['distribution_pattern'],
                            'country':reason_bacteria[i]['country'],
                            'product_description':reason_bacteria[i]['product_description'],
                            'product_quantity':reason_bacteria[i]['product_quantity'],
                            'complete_address': reason_bacteria[i]['complete_address']});   
         }
         
         else if (year == '2013'){

            IIIyear13.push({'classification':reason_bacteria[i]['classification'],
                            'recall_initiation_date':reason_bacteria[i]['recall_initiation_date'],
                            'city':reason_bacteria[i]['city'],
                            'recalling_firm':reason_bacteria[i]['recalling_firm'],
                            'distribution_pattern':reason_bacteria['distribution_pattern'],
                            'country':reason_bacteria[i]['country'],
                            'product_description':reason_bacteria[i]['product_description'],
                            'product_quantity':reason_bacteria[i]['product_quantity'],
                            'complete_address': reason_bacteria[i]['complete_address']});   

         }

         else if (year == '2014'){

            IIIyear14.push({'classification':reason_bacteria[i]['classification'],
                            'recall_initiation_date':reason_bacteria[i]['recall_initiation_date'],
                            'city':reason_bacteria[i]['city'],
                            'recalling_firm':reason_bacteria[i]['recalling_firm'],
                            'distribution_pattern':reason_bacteria['distribution_pattern'],
                            'country':reason_bacteria[i]['country'],
                            'product_description':reason_bacteria[i]['product_description'],
                            'product_quantity':reason_bacteria[i]['product_quantity'],
                            'complete_address': reason_bacteria[i]['complete_address']});   
         }

         else if (year == '2015'){

            IIIyear15.push({'classification':reason_bacteria[i]['classification'],
                            'recall_initiation_date':reason_bacteria[i]['recall_initiation_date'],
                            'city':reason_bacteria[i]['city'],
                            'recalling_firm':reason_bacteria[i]['recalling_firm'],
                            'distribution_pattern':reason_bacteria['distribution_pattern'],
                            'country':reason_bacteria[i]['country'],
                            'product_description':reason_bacteria[i]['product_description'],
                            'product_quantity':reason_bacteria[i]['product_quantity'],
                            'complete_address': reason_bacteria[i]['complete_address']});   
         }

         else if (year == '2016'){

             IIIyear16.push({'classification':reason_bacteria[i]['classification'],
                            'recall_initiation_date':reason_bacteria[i]['recall_initiation_date'],
                            'city':reason_bacteria[i]['city'],
                            'recalling_firm':reason_bacteria[i]['recalling_firm'],
                            'distribution_pattern':reason_bacteria['distribution_pattern'],
                            'country':reason_bacteria[i]['country'],
                            'product_description':reason_bacteria[i]['product_description'],
                            'product_quantity':reason_bacteria[i]['product_quantity'],
                            'complete_address': reason_bacteria[i]['complete_address']});    
         }

         else if (year == '2017'){

             IIIyear17.push({'classification':reason_bacteria[i]['classification'],
                            'recall_initiation_date':reason_bacteria[i]['recall_initiation_date'],
                            'city':reason_bacteria[i]['city'],
                            'recalling_firm':reason_bacteria[i]['recalling_firm'],
                            'distribution_pattern':reason_bacteria['distribution_pattern'],
                            'country':reason_bacteria[i]['country'],
                            'product_description':reason_bacteria[i]['product_description'],
                            'product_quantity':reason_bacteria[i]['product_quantity'],
                            'complete_address': reason_bacteria[i]['complete_address']});   
          }

   }

}

byYearI.IY11=Iyear11;
byYearI.IY12=Iyear12;
byYearI.IY13=Iyear13;
byYearI.IY14=Iyear14;
byYearI.IY15=Iyear15;
byYearI.IY16=Iyear16;
byYearI.IY17=Iyear17;

classI.push(byYearI);

byYearII.IIY11=IIyear11;
byYearII.IIY12=IIyear12;
byYearII.IIY13=IIyear13;
byYearII.IIY14=IIyear14;
byYearII.IIY15=IIyear15;
byYearII.IIY16=IIyear16;
byYearII.IIY17=IIyear17;

classII.push(byYearI);

byYearIII.IIIY11=IIIyear11;
byYearIII.IIIY12=IIIyear12;
byYearIII.IIIY13=IIIyear13;
byYearIII.IIIY14=IIIyear14;
byYearIII.IIIY15=IIIyear15;
byYearIII.IIIY16=IIIyear16;
byYearIII.IIIY17=IIIyear17;

classIII.push(byYearIII);



byClass.classI=classI;
byClass.classII=classII;
byClass.classIII=classIII;

finalCategory.push(byClass);


fs.writeFileSync('/Users/yicenshi/Desktop/major_studio_2/visualizations/parsed_data/finalByClass.json', JSON.stringify(finalCategory));

 //console.log(classIII[3]);






 


