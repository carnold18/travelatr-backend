// Seeds File

Country = require("../models/countryModel.js");
Expense = require("../models/expenseModel.js");
User = require("../models/userModel.js");

var expenses = require("./expenseData.json");

// for (let i = 0; i < 15; i++) {
//     console.log(expenses["expenses"][i]["Value"]);
// }

let country = new Country();
country.name = expenses["expenses"][0]["Name"];
country.save;
console.log(country);