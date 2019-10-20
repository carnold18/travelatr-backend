// initialize your express router
let router = require('express').Router();

// set default API response
router.get('/', function(req,res) {
    res.json({
        status: 200,
        message: "This is my first route!"
    });
});

// Import user controller
var userController = require('./controllers/userController');
// User routes
router.route('/users')
    .get(userController.index)
    .post(userController.new);
router.route('/users/:user_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);



// export API routes
module.exports = router;