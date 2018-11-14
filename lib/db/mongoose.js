var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds037778.mlab.com:37778/work-home-track`, { useNewUrlParser : true })
        .then((c)=> {
            console.log(`Connected to mLab mongo database ${c.connection.name}`)
        }).catch(error => {
            console.log(error)
        });

module.exports = {
    mongoose: mongoose
};