const submitMP = async (event) => {
   //grab all elements from the page and assign to variable
   const mealPlanBfastElements = document.getElementsByClassName('bfastText');
   const mealPlanLunchElements = document.getElementsByClassName('lunchText');
   const mealPlanDinnerElements = document.getElementsByClassName('dinnerText');
   const daySelect = document.getElementById('daySelect');

   console.log(daySelect.value);
   //get all inputted breakfast items
   const breakfastItems = [];
   for (i = 0; i < mealPlanBfastElements.length; i++) {
      let mealPlanBfast = mealPlanBfastElements[i].value;
      let jsonStringBfast = JSON.stringify(mealPlanBfast);
      breakfastItems.push(jsonStringBfast);
   }

   const breakfastString = breakfastItems.join(',');
   console.log(breakfastString);

   //get all inputted lunch items
   const lunchItems = [];
   for (i = 0; i < mealPlanLunchElements.length; i++) {
      let mealPlanLunch = mealPlanLunchElements[i].value;
      let jsonStringLunch = JSON.stringify(mealPlanLunch);
      lunchItems.push(jsonStringLunch);
   }

   const lunchString = lunchItems.join(',');
   console.log(lunchString);


   //get all inputted dinner items
   const dinnerItems = [];
   for (i = 0; i < mealPlanDinnerElements.length; i++) {
      let mealPlanDinner = mealPlanDinnerElements[i].value;
      let jsonStringDinner = JSON.stringify(mealPlanDinner);
      dinnerItems.push(jsonStringDinner);
   }

   const dinnerString = dinnerItems.join(',');
   console.log(dinnerString);

   //Combine the JSON Strings
   const combinedJSON = JSON.stringify({
      breakfast: breakfastString,
      lunch: lunchString,
      dinner: dinnerString,
      dayid: daySelect.value,
      userid: 4
   });

   console.log(combinedJSON);
   console.log(breakfastString.value);
   //send the JSON data to the server
   try {
      const response = await fetch('/', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: combinedJSON
      });

      if (response.ok) {

         window.alert("Success");

      } else {
         console.log('Failed to send data to the database');
      }

   } catch (error) {
      console.error('Error:', error)
   }

};


