//const { Mealplan } = require("../../models");
// const  runPage = async (event) => {

// }
const submitMP = async (event) => {

   // event.preventDefault();


    //grab all elements from the page and assign to variable
    const mealPlanBfastElements = document.getElementsByClassName('bfastText');
    const mealPlanLunchElements = document.getElementsByClassName('lunchText');
    const mealPlanDinnerElements = document.getElementsByClassName('dinnerText');
    const daySelect = document.getElementById('daySelect');
  
    console.log(daySelect.value);
    //get all inputted breakfast items
    const breakfastItems = [];
    for(i = 0; i < mealPlanBfastElements.length; i++) {
       let mealPlanBfast = mealPlanBfastElements[i].value;
       let jsonStringBfast = JSON.stringify(mealPlanBfast);
      //console.log(jsonStringBfast);
      breakfastItems.push(jsonStringBfast);
     
      //console.log(jsonStringBfast);
      breakfastItems.push(jsonStringBfast);
     
    }
    const breakfastString = breakfastItems.join(',');

    //get all inputted lunch items
    const lunchItems = [];
    for(i = 0; i < mealPlanLunchElements.length; i++) {
      let mealPlanLunch = mealPlanLunchElements[i].value;
      let jsonStringLunch = JSON.stringify(mealPlanLunch);
     //console.log(jsonStringLunch);
     lunchItems.push(jsonStringLunch);
    
   }
   const lunchString = lunchItems.join(',');


   //get all inputted dinner items
   const dinnerItems = [];
   for(i = 0; i < mealPlanDinnerElements.length; i++) {
      let mealPlanDinner = mealPlanDinnerElements[i].value;
      let jsonStringDinner = JSON.stringify(mealPlanDinner);
     //console.log(jsonStringDinner);
    dinnerItems.push(jsonStringDinner);
   }
   const dinnerString = dinnerItems.join(',');



   //Combine the JSON Strings
   const combinedJSON = JSON.stringify({
      breakfast: breakfastString,
      lunch: lunchString,
      dinner: dinnerString,
      dayid: 4,
      userid: 4
   });
   console.log(combinedJSON);

   //send the JSON data to the server
   try {
      const response = await fetch('/', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: combinedJSON
      });

      if(response.ok) {
         console.log('Data sent to the database');
      } else {
         console.log('Failed to send data to the database');
      }

   } catch (error) {
      console.error('Error:', error)
   }

};


submitMP();