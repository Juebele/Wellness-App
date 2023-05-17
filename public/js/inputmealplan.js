//const { Mealplan } = require("../../models");


const submitMP = async (event) => {
    var bfmeals = [];
    const mealPlanBfast = document.getElementsByClassName('bfastText');
    for(i = 0; i < mealPlanBfast.length; i++) {
       let mealPlanBfast = mealPlanBfast[i].value;
       let jsonStringBfast = JSON.stringify(mealPlanBfast);
        console.log(jsonStringBfast);
        // let mealPlanLunch = document.getElementById('lunchText').value;
        // let mealPlanDinner = document.getElementById('dinnerText').value;
        
    }
  

    //grab meals inputted into text areas
   //const mealPlansArr = document.getElementsByClassName('meal').value;


   //turn those into json
//    let jsonString = JSON.stringify(mealPlanBfast);
//    let jsonString1 = JSON.stringify(mealPlanLunch);
//    let jsonString2 = JSON.stringify(mealPlanDinner);
   

   console.log(jsonString);
   console.log(mealPlanBfast);
   console.log(mealPlanLunch);
   console.log(mealPlanDinner);
} 


submitMP();