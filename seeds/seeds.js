// Seeds File 

Country = require("../models/countryModel.js");
Expense = require("../models/expenseModel.js");
User = require("../models/userModel.js");

var expenses = require("./expenseData.json");

// for (let i = 0; i < 15; i++) {
//     console.log(expenses["expenses"][i]["Value"]);
// }

// let country = new Country();
// console.log(country);

// let expense = new Expense();
// console.log(expense);

// let user = new User();
// console.log(user);

function createUserExpenses(expenses) {
    console.log(expenses["expenses"][0]);
    let user = new User();
    user.username = "carnie";
    user.email = "carnie@example.com";
    user.password = "password";
    user.age = 25;
    user.save();
    console.log(user);
}

createUserExpenses(expenses);