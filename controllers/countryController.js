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
    country.stats = req.body.stats;
    country.polyglonCoordinates = req.body.polyglonCoordinates;
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
    Country.findById(req.params.country_id, function (err, country) {
        if (err)
            res.send(err);
        res.json({
            message: 'country details loading..',
            data: country
        });
    });
};
// Handle update country info
exports.update = function (req, res) {
Country.findById(req.params.country_id, function (err, country) {
        if (err)
            res.send(err);
        country.name = req.body.name ? req.body.name : country.name;
        country.stats = req.body.stats;
        country.polyglonCoordinates = req.body.polyglonCoordinates;
// save the country and check for errors
        country.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'country Info updated',
                data: country
            });
        });
    });
};
// Handle delete country
exports.delete = function (req, res) {
    Country.remove({
        _id: req.params.country_id
    }, function (err, country) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'country deleted'
        });
    });
};