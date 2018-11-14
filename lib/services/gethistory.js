const {Events} = require("../models/event")
const _ = require("lodash/fp")
const momenttz = require('moment-timezone')
const moment = require('moment')

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
                Date : moment(momenttz.tz(event.date, "America/Sao_Paulo")).format("DD/MM/YYYY, hh:mm:ss")
            }
        }, events)
    }

    return {
        run
    }
}

module.exports = gethistory