// Import expense model
Expense = require('../models/expenseModel');
// Handle index actions
exports.index = function (req, res) {
    Expense.get(function (err, expenses) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "expenses retrieved successfully",
            data: expenses
        });
    });
};
// Handle create expense actions
exports.new = function (req, res) {
    var expense = new Expense();
    expense.value = req.body.value ? req.body.value : expense.value;
    expense.expenseType = req.body.expenseType;
    expense.userId = req.body.userId;
    expense.countryId = req.body.countryId;
// save the expense and check for errors
    expense.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New expense created!',
            data: expense
        });
    });
};
// Handle view expense info
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
        expense.value = req.body.value ? req.body.value : expense.value;
        expense.expenseType = req.body.expenseType;
        expense.userId = req.body.userId;
        expense.countryId = req.body.countryId;
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