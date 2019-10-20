var mongoose = require('mongoose');
// Setup schema
var expenseSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    countryId: {
        type: String,
        required: true
    },
    expenseType: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now
    }
});
// Export Expense model
var Expense = module.exports = mongoose.model('expense', expenseSchema);
module.exports.get = function (callback, limit) {
    Expense.find(callback).limit(limit);
}