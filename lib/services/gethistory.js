const {Events} = require("../models/event")
const _ = require("lodash/fp")
const moment = require('moment-timezone')

const gethistory = () => {

    const eventTypeMap = {
        enterwork : "Enter Work",
        leavework : "Leave Work",
        enterhome : "Enter Home",
        leavehome : "Leave Home"
    }

    const run = async () => {
        const events = await Events.find()
        return _.map(event => {
            return {
                Type : eventTypeMap[event.type],
                Date : moment.tz(event.date, "America/Sao_Paulo").toString()
            }
        }, events)
    }

    return {
        run
    }
}

module.exports = gethistory