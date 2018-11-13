const {Events} = require("../models/event")
const _ = require("lodash/fp")
const moment = require('moment-timezone')

const eventlogger = () => {

    const eventTypeMap = {
        enterwork : "Enter Work",
        leavework : "Leave Work",
        enterhome : "Enter Home",
        leavehome : "Leave Home"
    }

    const logEvent = async (eventType) => {
        const event = new Events({
            type : eventType,
            date : new Date()
        })

        try {
            const saveEvent = await event.save()
            return {
                type : saveEvent.type,
                date : saveEvent.date
            }
        }
        catch(e) {
            return e.message
        }
    }

    const getHistory = async () => {
        const events = await Events.find()
        return _.map(event => {
            return {
                Type : eventTypeMap[event.type],
                Date : moment.tz(event.date, "America/Sao_Paulo").toString()
            }
        }, events)
    }

    return {
        logEvent,
        getHistory
    }
}

module.exports = eventlogger