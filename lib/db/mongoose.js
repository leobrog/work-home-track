var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://leobrog:mlbr99lg@ds037778.mlab.com:37778/work-home-track', { useNewUrlParser : true });

module.exports = {
    mongoose: mongoose
};