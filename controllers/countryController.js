// Import country model
Country = require('../models/countryModel');
// Handle index actions
exports.index = function (req, res) {
    Country.get(function (err, countries) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "countries retrieved successfully",
            data: countries
        });
    });
};
// Handle create country actions
exports.new = function (req, res) {
    var country = new Country();
    country.name = req.body.name ? req.body.name : country.name;
    country.gender = req.body.gender;
    country.email = req.body.email;
    country.phone = req.body.phone;
// save the country and check for errors
    country.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New country created!',
            data: country
        });
    });
};
// Handle view country info
exports.view = function (req, res) {
    Expense.findById(req.params.expense_id, function (err, expense) {
        if (err)
            res.send(err);
        res.json({
            message: 'expense details loading..',
            data: expense
        });
    });
};
// Handle update expense info
exports.update = function (req, res) {
Expense.findById(req.params.expense_id, function (err, expense) {
        if (err)
            res.send(err);
        expense.name = req.body.name ? req.body.name : expense.name;
        expense.gender = req.body.gender;
        expense.email = req.body.email;
        expense.phone = req.body.phone;
// save the expense and check for errors
        expense.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'expense Info updated',
                data: expense
            });
        });
    });
};
// Handle delete expense
exports.delete = function (req, res) {
    Expense.remove({
        _id: req.params.expense_id
    }, function (err, expense) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'expense deleted'
        });
    });
};