var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds037778.mlab.com:37778/work-home-track`, { useNewUrlParser : true });

module.exports = {
    mongoose: mongoose
};