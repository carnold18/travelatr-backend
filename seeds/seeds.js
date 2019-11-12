// Seeds File 

Country = require("../models/countryModel.js");
Expense = require("../models/expenseModel.js");
User = require("../models/userModel.js");

var expenses = require("./expenseData.json");

// need to make an object of countries to use to iterate over for country creation
// const locations = [
//     FTW, 
// ]

// for (let i = 0; i < 15; i++) {
//     console.log(expenses["expenses"][i]["Value"]);
// }

// let country = new Country();
// console.log(country);

// let expense = new Expense();
// console.log(expense);

// let user = new User();
// console.log(user);

let user;
function createUser() {
    user = new User();
    user.username = "carnie";
    user.email = "carnie@example.com";
    user.password = "password";
    user.age = 25;
    user.save();
    console.log(user);
}

let country;
function createCountry() {
    country = new Country();
    country.name = "hungary";
    country.stats = "rando";
    country.polyglonCoordinates = "XYZ";
    country.save();
    console.log(country);
}

let expense; 
function createUserExpenses(expenses) {
    console.log(expenses["expenses"][0]);
    createUser();
    createCountry();
    expense = new Expense();
    expense.userId = user.id;
    expense.countryId = country.id;
    expense.expenseType = expenses["expenses"][0].category;
    expense.value = expenses["expenses"][0].value;
    expense.save();
    console.log(expense);
}

createUserExpenses(expenses);

console.log(db.users.find())