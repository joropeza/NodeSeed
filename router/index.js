/**
 * The Index of Routes
 */

module.exports = function (app) {

	app.use('/things', require('./routes/things'));
    
}
