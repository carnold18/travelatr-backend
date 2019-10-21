// initialize your express router
let router = require('express').Router();

// set default API response
router.get('/', function(req,res) {
    res.json({
        status: 200,
        message: "This is my first route!"
    });
});

// Import User controller
var userController = require('./controllers/userController');
// User routes
router.route('/users')
    .get(userController.index)
    .post(userController.new);
router.route('/users/:userId')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);

// Import Country controller
var countryController = require('./controllers/countryController');
// Country routes
router.route('/countries')
    .get(countryController.index)
    .post(countryController.new);
router.route('/countries/:countryId')
    .get(countryController.view)
    .patch(countryController.update)
    .put(countryController.update)
    .delete(countryController.delete);

// Import Expense controller
var expenseController = require('./controllers/expenseController');
// Expense routes
router.route('/expenses')
    .get(expenseController.index)
    .post(expenseController.new);
router.route('/countries/:expenseId')
    .get(expenseController.view)
    .patch(expenseController.update)
    .put(expenseController.update)
    .delete(expenseController.delete);

// export API routes
module.exports = router;