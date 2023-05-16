const { Mealplan } = require('../models/mealplan');

const mealplanData = [
    {
        userid: 8,
        breakfast: "Banana",
        lunch: "Five dollar footlong",
        dinner: "Vodka RedBull",
        dayid: 1
    },
    {
        userid: 1,
        breakfast: "Cigarettes",
        lunch: "Tacos",
        dinner: "Swordfish steak",
        dayid: 2
    },
    {
        userid: 4,
        breakfast: "Cereal",
        lunch: "Publix sushi",
        dinner: "Pabst Blue Ribbon w/ grilled cheese",
        dayid: 3
    },
    {
        userid: 12,
        breakfast: "Oysters rockefeller",
        lunch: "Double quarter pounder w/ cheese",
        dinner: "Six unsalted crackers",
        dayid: 4
    },
    {
        userid: 7,
        breakfast: "Yogurt & granola",
        lunch: "Horse meat sandwich",
        dinner: "Filet mignon",
        dayid: 5
    },
    {
        userid: 16,
        breakfast: "Peanut butter sandwich",
        lunch: "Boiled peanuts",
        dinner: "Perfect Martini",
        dayid: 6
    },
    {
        userid: 6,
        breakfast: "Spinach casserole",
        lunch: "Edamame",
        dinner: "tap water with lemon twist",
        dayid: 7
    },
];

const seedMealplan = () => Mealplan.bulkCreate(mealplanData);