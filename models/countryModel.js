var mongoose = require('mongoose');
// Setup schema
var countrySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    stats: {
        type: String,
        required: true
    },
    polyglonCoordinates: {
        type: String,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now
    }
});
// Export Country model
var Country = module.exports = mongoose.model('country', countrySchema);
module.exports.get = function (callback, limit) {
    Country.find(callback).limit(limit);
}