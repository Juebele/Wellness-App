async function getData() {
    try {
        const response = await fetch('/mealplans', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }

        });

        if (response.ok) {
            const mealPlans = await response.json();
            const container = document.getElementById('mealPlanContainer');
            container.innerHTML = '';
            mealPlans.forEach((mealPlan) => {
                const mealPlanElement = document.createElement('div');
                mealPlanElement.textContent = `Breakfast: ${mealPlan.breakfast}, Lunch: ${mealPlan.lunch}, Dinner: ${mealPlan.dinner}`;
                container.appendChild(mealPlanElement);
            })
        } else (error)
        console.log('Failed to fetch data from server');
    } catch (error) { }
}