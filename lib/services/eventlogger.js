const {Events} = require("../models/event")
const _ = require("lodash/fp")
const moment = require('moment-timezone')

const eventlogger = (eventType) => {

    const run = async () => {
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

    return {
        run
    }
}

module.exports = eventlogger