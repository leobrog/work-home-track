const mongoose = require('mongoose')

const Events = mongoose.model('Event', {
    type : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true
    }
})

/**
 * Event types : enterhome, leavehome, enterwork, leavework
 * 
 */

module.exports = {
    Events
}