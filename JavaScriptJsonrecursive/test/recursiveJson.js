"use strict";

const CoreUtilIs = require("core-util-is");

const json = {
    "h": "ram",
  Person: [
    {
      _id: "1",
      first: "Joe",
      last: "Foo1",
      Address: [
        {
          _id: "2",
          line1: "line1A",
          city: "cityA"
        },
        {
          _id: "3",
          line1: "line1B",
          city: "cityB"
        },
        {
          _id: "7",
          line1: "line1E",
          city: "cityE"
        },
        {
          _id: "8",
          line1: "line1F",
          city: "cityF"
        }
      ],
      Job: [
        {
          _id: "4",
          title: "titleA",
          Address: [
            {
              _id: "5",
              line1: "line1C",
              city: "cityC"
            },
            {
              _id: "6",
              line1: "line1D",
              city: "cityD"
            }
          ]
        }
      ]
    }
  ]
};

class OneMore {
  // CoreUtilIs.isArray();
  static go(json) {   
     var returnArray=[];
    for (let property in json) {
           let temp=json[property];
              returnArray=OneMore.getOnlyId(temp, returnArray);
               }
               
               return returnArray;
  }



  static getOnlyId(arry, returnArray)
  {  
      if(CoreUtilIs.isArray(arry)){
                  for(let i=0; i<arry.length; i++){
                      let temp=arry[i];
                        for(let key in temp) {
                            let value = temp[key];
                            if(CoreUtilIs.isArray(value))  { 
                                   OneMore.getOnlyId(value, returnArray); 
                              } 
                              else{
                                  if(key==='_id')
                                     returnArray.push(value); 
                              }  

                      } // end of second for loop  

               } // end of first foor loop

       } // end of first if clause; 
        else{  
            for(let key in temp) {
                        let value = temp[key];
                         if(CoreUtilIs.isArray(value))  { 
                              OneMore.getId(value, returnArray); 
                            } 
                             else{
                                  if(key==='_id')
                                  returnArray.push(value);
                              }            
                      } // end of else for loop;

             }// end of else clause

             return returnArray;
                    
       } // end of method getOnlyId
  
  
}

module.exports = OneMore;